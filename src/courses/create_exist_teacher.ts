import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native iginte",
      description: "Curso excelente de React Native",
      duration: 300,
      teacher: {
        connect: {
          id: "d0ac90a2-07af-4d8c-906a-9d0fc7fe95ad",
        },
      },
    },
  });

  console.log(result);
}

main();
