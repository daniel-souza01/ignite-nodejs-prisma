import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de java",
      duration: 500,
      description: "Curso de java 17",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Daniel Souza",
          },
          create: {
            name: "Daniel Souza",
          },
        },
      },
    },
  });

  console.log(result);
}

main();
