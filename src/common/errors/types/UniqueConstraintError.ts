import { PrismaClientError } from './PrismaClientError';
import { ConflictError } from './ConflictError';

export class UniqueConstraintError extends ConflictError {
  constructor(e: PrismaClientError) {
    const uniqueField = e.meta.target[0];
    super(`A record with this ${uniqueField} already exists.`);
  }
}
