import { PrismaClientError } from './PrismaClientError';
import { BadRequestError } from './BadRequestError';

export class ForeignKeyConstraintError extends BadRequestError {
  constructor(e: PrismaClientError) {
    const foreignKeyField = e.meta.field_name.split('_')[1];
    super(`Foreign key field ${foreignKeyField} is invalid.`);
  }
}
