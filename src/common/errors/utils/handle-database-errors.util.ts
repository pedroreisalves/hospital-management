import { ForeignKeyConstraintError } from './../types/ForeignKeyConstraintError';
import { DatabaseError } from './../types/DatabaseError';
import { UniqueConstraintError } from './../types/UniqueConstraintError';
import { PrismaClientError } from './../types/PrismaClientError';
enum PrismaErrors {
  UniqueConstraintFail = 'P2002',
  ForeignKeyConstraintFail = 'P2003',
}

export const handleDatabaseErrors = (e: PrismaClientError) => {
  switch (e.code) {
    case PrismaErrors.UniqueConstraintFail:
      return new UniqueConstraintError(e);
    case PrismaErrors.ForeignKeyConstraintFail:
      return new ForeignKeyConstraintError(e);
    default:
      return new DatabaseError(e.message);
  }
};
