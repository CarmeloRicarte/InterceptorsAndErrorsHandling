import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    const params = new HttpParams().append('page', '1');

    return this.http.get('https://reqres.in/api/user',
      { params }
    ).pipe(
      map((resp: any) => resp.data),
    );
  }

}
