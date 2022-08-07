import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "345a51c2-fcea-4e57-bea1-f7f4d3c27c58",
    },
    data: {
      duration: 50,
      description: "ignite react native (new)",
    },
  });

  console.log(result);
}

main();
