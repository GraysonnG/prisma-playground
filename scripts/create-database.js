const fs = require("fs");
const path = require("path");

const fileName = process.argv[2];

if (fileName) {
  const filePath = path.resolve(`./prisma/${fileName}.db`);
  const dbExists = fs.existsSync(filePath);

  if (!dbExists) {
    fs.writeFileSync(filePath, "");
    console.log(`Database created: /prisma/${fileName}.db`);
  } else {
    console.log("Database already initialized!");
  }
}
