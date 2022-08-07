import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.teachers.create({
    data: {
      name: "Diego Fernandes 122312",
    },
  });

  console.log(result);
}

main();
