import { PrismaClientError } from './../types/PrismaClientError';

export const isPrismaError = (err: PrismaClientError) => {
  return (
    typeof err.code === 'string' &&
    typeof err.clientVersion === 'string' &&
    (typeof err.meta === 'undefined' || typeof err.meta === 'object')
  );
};
