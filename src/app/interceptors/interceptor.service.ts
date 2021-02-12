import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  /**
   * Metodo de HttpInterceptor para interceptar cualquier peticion que lance la aplicacion
   * @param req Peticion
   * @param next handler para pasar a la siguiente peticion
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Pasó por el interceptor');

    const headers = new HttpHeaders({
      'token-usuario': '32rsdvsdwefe43'
    });

    // Clonamos la request para trabajar con ella
    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse) {
    console.error('Error: ', error);
    return throwError('Error personalizado');
  }
}
