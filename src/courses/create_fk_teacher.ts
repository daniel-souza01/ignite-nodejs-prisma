import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de ReactJS",
      description: "Curso excelente de ReactJS",
      duration: 300,
      fk_id_teacher: "a7afad6a-2710-454d-9c02-d6432aadd8de",
    },
  });

  console.log(result);
}

main();
