import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo firebase do zero",
      name: "Aprendendo firebase",
      courses: {
        create: {
          course: {
            connect: {
              id: "028dfb56-7321-4ab0-9c45-de0a239957f6",
            },
          },
        },
      },
    },
  });

  console.log(result);
}

main();
