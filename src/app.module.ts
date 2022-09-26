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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
