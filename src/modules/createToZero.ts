import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 200,
          name: "Curso de nodejs",
          description: "Curso completo de nodejs",
        },
      },
      module: {
        create: {
          description: "Curso completo de prisma IO",
          name: "PrismaIO",
        },
      },
    },
  });

  console.log(result);
}

main();
