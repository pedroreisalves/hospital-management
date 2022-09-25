/*
  Warnings:

  - Added the required column `email` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Nurse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Nurse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Receptionist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Receptionist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Nurse" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Receptionist" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
