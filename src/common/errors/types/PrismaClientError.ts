import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export type PrismaClientError = PrismaClientKnownRequestError & {
  meta?: { field_name?: string; target?: string };
};
