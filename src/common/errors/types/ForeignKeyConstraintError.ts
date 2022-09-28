import { PrismaClientError } from './PrismaClientError';
import { BadRequestError } from './BadRequestError';

export class ForeignKeyConstraintError extends BadRequestError {
  constructor(e: PrismaClientError) {
    const foreignKeyField = e.meta.target;
    super(`Foreign key of field ${foreignKeyField} is invalid.`);
  }
}
