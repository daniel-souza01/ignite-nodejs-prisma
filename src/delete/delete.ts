import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "4e4a1eb3-f6e5-495c-85c8-2f42b36b0e82",
    },
  });

  console.log(result);
}

main();
