const fs = require('fs');
let content = fs.readFileSync('.env', 'utf8');

// The user might have written DATABASE_URL="postgres://..." or similar. 
// Let's replace literally `"postgres` with `postgres` and similar for the end quote if it's there.
content = content.replace(/"(postgres(ql)?:\/\/[^"]+)"/g, '$1');
content = content.replace(/DATABASE_URL="\s*"/, 'DATABASE_URL=""');
content = content.replace(/^"|"$/g, ''); 

fs.writeFileSync('.env', content);
console.log('Done fixing .env');
