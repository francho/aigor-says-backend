import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AigorMessage} from "../models/aigor-message";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {AigorSaysApiServer} from "../models/aigor-says-app-config";

@Injectable({
  providedIn: 'root'
})
export class AigorApiService {

  constructor(private http: HttpClient) {
  }

  talk(host: AigorSaysApiServer, message: AigorMessage):  Observable<any> {
    const url = `${host.url}/api/Speaker/say`;
    console.log(url);
    return this.http.post(url, message).pipe(
      catchError(this.handleError('talk', false))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
