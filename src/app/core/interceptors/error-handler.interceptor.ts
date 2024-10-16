import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error del lado del cliente: ${error.error.message}`;
      } else {
        switch (error.status) {
          case 0:
            errorMessage = `Error de red: La API en ${req.url} podría estar fuera de línea o inaccesible.`;
            break;
          case 404:
            errorMessage = `Error 404: La página o recurso que buscas no existe en ${req.url}.`;
            break;
          case 400:
          case 401:
          case 403:
          case 422:
            errorMessage = `Error del cliente ${error.status}: ${error.message}`;
            break;
          default:
            errorMessage = `Error del servidor ${error.status}: ${error.message}`;
        }
      }

      return throwError(() => new Error(errorMessage));
    })
  );
};

