export interface JwtPayload {
  role: 'NURSE' | 'DOCTOR' | 'RECEPTIONIST';
  id: number;
}
