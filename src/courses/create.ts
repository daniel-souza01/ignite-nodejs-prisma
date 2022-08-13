import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: "Curso de ReactJs",
      description: "Curso excelente de  ReactJs",
    },
  });

  console.log(result);
}

main();
