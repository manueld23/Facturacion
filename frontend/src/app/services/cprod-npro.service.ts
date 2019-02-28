import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CProdNPro } from '../models/CProdNPro';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CProdNProService {
  selectedCProdNPro: CProdNPro;
  cprodnpros: CProdNPro[];
  private URL_API = 'http://localhost:3000/api/cprodnpro';  // URL to web api

  constructor(private http: HttpClient) { }

  agregarProducto(cprodnpro: CProdNPro) {
    return this.http.post(this.URL_API, cprodnpro, httpOptions);
  }

  obtenerCProdNPro() {
    return this.http.get(this.URL_API);
  }

  /*obtenerIdCProdNPro(idCProdNPro): Observable<CProdNPro> {
    const url = `${this.URL_API}/${idCProdNPro}`;
    return this.http.get<CProdNPro>(url).pipe(
      tap(_ => console.log(`fetched cprodnpro idCProdNPro=${idCProdNPro}`)),
      catchError(this.handleError<CProdNPro>(`obtenerIdCProdNPro idCProdNPro=${idCProdNPro}`))
    );
  }*/

  obtenerIdCProdNPro (idCProdNPro: number) {
    return this.http.get(this.URL_API + `/${idCProdNPro}`);
  }

  eliminarCProdNPro(idCProdNPro: number) {
    return this.http.delete(this.URL_API + `/${idCProdNPro}`, httpOptions);
  }

  putCProdNPro(cprodnpro: CProdNPro) {
    return this.http.put(this.URL_API + `/${cprodnpro.idCProdNPro}`, cprodnpro);
  }

  /*putCProdNPro (cprodnpro: CProdNPro): Observable<any> {
    return this.http.put(this.URL_API, cprodnpro, httpOptions).pipe(
      tap(_ => console.log(`updated cprodnpro idCProdNPro=${cprodnpro.idCProdNPro}`)),
      catchError(this.handleError<any>('putCProdNPro'))
    );
  }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
