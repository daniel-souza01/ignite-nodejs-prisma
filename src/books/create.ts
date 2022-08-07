import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura Limpa",
      author_id: "d96454c1-2d40-4d93-8192-f3e42b9e370e",
    },
  });

  console.log(result);
}

main();
