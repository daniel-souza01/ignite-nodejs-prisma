-- CreateTable
CREATE TABLE "course_modules" (
    "id" TEXT NOT NULL,
    "fk_id_course" TEXT NOT NULL,
    "fk_id_module" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "coursesId" TEXT NOT NULL,

    CONSTRAINT "course_modules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "course_modules" ADD CONSTRAINT "course_modules_fk_id_course_fkey" FOREIGN KEY ("fk_id_course") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_modules" ADD CONSTRAINT "course_modules_fk_id_module_fkey" FOREIGN KEY ("fk_id_module") REFERENCES "modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
