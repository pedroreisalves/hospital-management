-- AlterTable
ALTER TABLE "Bill" ALTER COLUMN "date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "dateOfBirth" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "Hospitalization" ALTER COLUMN "entryDate" SET DATA TYPE DATE,
ALTER COLUMN "leaveDate" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "MedicalAppointment" ALTER COLUMN "date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "Nurse" ALTER COLUMN "dateOfBirth" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "Patient" ALTER COLUMN "dateOfBirth" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "Receptionist" ALTER COLUMN "dateOfBirth" SET DATA TYPE DATE;
