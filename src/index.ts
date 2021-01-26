import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.test.create({
  //   data: {
  //     title: "some thing 2",
  //     desc: "some description of some thing"
  //   }
  // })

  const allTests = await prisma.test.findMany();
  console.log(allTests)
}

main().catch(e => {
  throw e
}).finally(async () => {
  await prisma.$disconnect()
})