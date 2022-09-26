import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { DoctorsModule } from './doctors/doctors.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { PatientsModule } from './patients/patients.module';
import { MedicalAppointmentsModule } from './medical-appointments/medical-appointments.module';
import { ReceptionistsModule } from './receptionists/receptionists.module';
import { NursesModule } from './nurses/nurses.module';
import { BillsModule } from './bills/bills.module';
import { HospitalizationsModule } from './hospitalizations/hospitalizations.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    LoginModule,
    DoctorsModule,
    SpecialtiesModule,
    PatientsModule,
    MedicalAppointmentsModule,
    ReceptionistsModule,
    NursesModule,
    BillsModule,
    HospitalizationsModule,
    RoomsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
