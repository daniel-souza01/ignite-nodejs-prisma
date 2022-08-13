import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "028dfb56-7321-4ab0-9c45-de0a239957f6",
      fk_id_module: "e23c8929-1339-445d-9765-882e69d8ed51",
    },
  });

  console.log(result);
}

main();
