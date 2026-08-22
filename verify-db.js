const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const bcrypt = require('bcryptjs');

require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function run() {
  console.log("Verifying registration and persistence...");
  try {
    await prisma.user.deleteMany({ where: { email: 'direct@example.com' } });
    
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = await prisma.user.create({
      data: {
        firstName: 'Direct',
        lastName: 'Test',
        email: 'direct@example.com',
        password: hashedPassword
      }
    });
    console.log("User persisted:", !!user.id);
    
    const isPasswordValid = await bcrypt.compare('password123', user.password);
    console.log("Password hash verified:", isPasswordValid);
    
    await prisma.user.deleteMany({ where: { email: 'direct@example.com' } });
    console.log("Cleanup done.");
    
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await prisma.$disconnect();
  }
}
run();
