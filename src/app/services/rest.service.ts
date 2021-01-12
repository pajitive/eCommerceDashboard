import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl:any
  constructor(private http: HttpClient) { 
    
  }
  get(endPointg: string, params?: any, optn?: any): Observable<any> {
    const p = [];
    let newParam: string;
    // if (params) {
    //   // tslint:disable-next-line: forin
    //   for (const  k in params) {
    //     const str = k + '=' + params[k];
    //     p.push(str);
    //   }
    //   newParam = p.join('&');
    // }
    try {
      return this.http.get(this.baseUrl + endPointg + '?' +  optn );
    }
    catch (e) {
      console.log(e);
    }
  }
}
