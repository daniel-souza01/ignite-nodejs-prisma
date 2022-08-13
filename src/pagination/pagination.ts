import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  let skip = 0;
  let exist = true;

  while (exist) {
    const result = await prisma.courses.findMany({
      skip: skip,
      take: 2,
    });
    skip += 2;

    if (result.length <= 0) {
      exist = false;
    }

    console.log(result);
    console.log("---------");
  }
}

main();
