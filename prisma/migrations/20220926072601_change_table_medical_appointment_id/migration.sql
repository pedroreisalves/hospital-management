/*
  Warnings:

  - The primary key for the `MedicalAppointment` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "MedicalAppointment" DROP CONSTRAINT "MedicalAppointment_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "MedicalAppointment_pkey" PRIMARY KEY ("id");
