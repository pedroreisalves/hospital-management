import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.room.createMany({
    data: [
      {
        available: true,
      },
      {
        available: false,
      },
    ],
  });

  await prisma.specialty.createMany({
    data: [
      {
        title: 'Specialty 1',
      },
      {
        title: 'Specialty 2',
      },
    ],
  });

  await prisma.doctor.create({
    data: {
      gender: 'MASCULINE',
      address: 'Street 97863',
      dateOfBirth: '1993-09-29T00:00:00.000Z',
      email: 'doctor1@doctor1.com',
      fullName: 'Doctor 1',
      password: '$2a$10$qsa7EzL0hdve1CEs2hn7/uOV/O510Ui4OSZviKSgOeGgSc11otWjK',
      specialtyId: 1,
    },
  });

  await prisma.receptionist.create({
    data: {
      gender: 'FEMININE',
      address: 'Street 87421',
      dateOfBirth: '1998-02-16T00:00:00.000Z',
      email: 'receptionist1@receptionist1.com',
      fullName: 'Receptionist 1',
      password: '$2a$10$9QUHpvNg2RXjqhp6HJayv.JTl9TZcqnCQrE.CitXsdLm81jRlRMZm',
    },
  });

  await prisma.nurse.create({
    data: {
      gender: 'FEMININE',
      address: 'Street 75432',
      dateOfBirth: '1988-07-21T00:00:00.000Z',
      email: 'nurse1@nurse1.com',
      fullName: 'Nurse 1',
      password: '$2a$10$903LMbWgXhdXypNk2nT3zegaSsZQEowX0KaCp2Gy91Pw8naSb/xL2',
    },
  });

  await prisma.patient.createMany({
    data: [
      {
        gender: 'MASCULINE',
        address: 'Street 89562',
        dateOfBirth: '1999-05-13T00:00:00.000Z',
        fullName: 'Patient 1',
      },
      {
        gender: 'MASCULINE',
        address: 'Street 98723',
        dateOfBirth: '2000-06-19T00:00:00.000Z',
        fullName: 'Patient 2',
      },
    ],
  });

  await prisma.hospitalization.createMany({
    data: [
      {
        entryDate: '2020-04-18T00:00:00.000Z',
        leaveDate: '2020-07-02T00:00:00.000Z',
        patientId: 2,
        roomId: 1,
      },
      {
        entryDate: '2022-06-03T00:00:00.000Z',
        patientId: 1,
        roomId: 2,
      },
    ],
  });

  await prisma.bill.create({
    data: {
      amount: 569.99,
      patientId: 2,
      date: '2020-07-05T00:00:00.000Z',
    },
  });

  await prisma.medicalAppointment.createMany({
    data: [
      {
        date: '2020-04-18T00:00:00.000Z',
        doctorId: 1,
        patientId: 2,
      },
      {
        date: '2022-06-03T00:00:00.000Z',
        doctorId: 1,
        patientId: 1,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
