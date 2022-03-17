import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatoCivile } from './domain-models/StatoCivile';
import { Observable } from 'rxjs';

@Injectable()

export class DataService {
  private restUrl = 'http://localhost:24772/api/v1/Domini/'
  constructor(private http: HttpClient) { }

  getStatoCivile(): Observable<StatoCivile[]> {
    const endpoint =  `${this.restUrl}TipiStatoCivile/`;
    return this.http.get<StatoCivile[]>(endpoint).pipe(
      catchError(this.handleError('getTasks', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}
