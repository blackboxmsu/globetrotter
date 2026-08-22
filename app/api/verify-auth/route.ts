import { NextResponse } from "next/server"
import { registerUser, loginUser } from "@/app/actions/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const results: any = {}
  
  try {
    // 1. Test Registration
    const fd = new FormData()
    fd.append("firstName", "Test")
    fd.append("lastName", "Verify")
    fd.append("email", "verify@example.com")
    fd.append("password", "secretpass")
    
    // Clean up first just in case
    await prisma.user.deleteMany({ where: { email: "verify@example.com" } })
    
    const regRes = await registerUser(fd)
    results.registration = regRes.success ? "PASS" : "FAIL"
    
    // 2. Verify Persistence
    const dbUser = await prisma.user.findUnique({ where: { email: "verify@example.com" } })
    results.persistence = dbUser ? "PASS" : "FAIL"
    
    // 3. Test Login
    // Note: loginUser calls signIn which throws NEXT_REDIRECT on success, or returns { error } on failure
    try {
      const loginRes = await loginUser(fd)
      if (loginRes?.error) {
        results.login = "FAIL - " + loginRes.error
      }
    } catch (e: any) {
      // NEXT_REDIRECT means it successfully authenticated and tried to redirect to /dashboard or /
      if (e.message && e.message.includes("NEXT_REDIRECT")) {
        results.login = "PASS"
      } else {
        results.login = "FAIL - " + e.message
      }
    }

    // 4. Test error handling (wrong password)
    const fdWrong = new FormData()
    fdWrong.append("email", "verify@example.com")
    fdWrong.append("password", "wrongpass")
    try {
      const wrongRes = await loginUser(fdWrong)
      if (wrongRes?.error === "Invalid credentials.") {
        results.errorHandling = "PASS"
      } else {
        results.errorHandling = "FAIL"
      }
    } catch (e: any) {
      results.errorHandling = "FAIL (should not redirect)"
    }
    
    // Clean up
    await prisma.user.deleteMany({ where: { email: "verify@example.com" } })
    
    return NextResponse.json(results)
  } catch (err: any) {
    return NextResponse.json({ error: err.message, results })
  }
}
