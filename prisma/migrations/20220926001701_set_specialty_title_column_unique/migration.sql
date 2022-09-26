/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Specialty` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Specialty_title_key" ON "Specialty"("title");
