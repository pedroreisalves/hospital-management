import { DatabaseError } from './../types/DatabaseError';
import { handleDatabaseErrors } from './../utils/handle-database-errors.util';
import { isPrismaError } from './../utils/is-prisma-error.util';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadGatewayException,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class DatabaseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        if (isPrismaError(error)) {
          error = handleDatabaseErrors(error);
        }
        if (error instanceof DatabaseError)
          throw new BadGatewayException(error.message);
        throw error;
      }),
    );
  }
}
