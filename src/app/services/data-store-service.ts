import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable()

export class DataStoreService {
    uri = 'https://api.github.com/search/users?q=';
 constructor(private http: HttpClient){}

    
  postData(data: object) {
        console.table(data);
        return this.http.get(`${this.uri}${data}`)
        .pipe(
            tap(data=> console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError));
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
        };
      }
    
}