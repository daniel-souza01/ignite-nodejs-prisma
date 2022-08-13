/*
  Warnings:

  - You are about to drop the `course_modules` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "course_modules" DROP CONSTRAINT "course_modules_fk_id_course_fkey";

-- DropForeignKey
ALTER TABLE "course_modules" DROP CONSTRAINT "course_modules_fk_id_module_fkey";

-- DropTable
DROP TABLE "course_modules";

-- CreateTable
CREATE TABLE "courses_modules" (
    "id" TEXT NOT NULL,
    "fk_id_course" TEXT NOT NULL,
    "fk_id_module" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "courses_modules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "courses_modules" ADD CONSTRAINT "courses_modules_fk_id_course_fkey" FOREIGN KEY ("fk_id_course") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_modules" ADD CONSTRAINT "courses_modules_fk_id_module_fkey" FOREIGN KEY ("fk_id_module") REFERENCES "modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
