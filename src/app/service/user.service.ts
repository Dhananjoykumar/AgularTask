import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  downloadUserData() {
    var headers = new Headers({'Content-Type': 'text/xml'})
    headers.set('Accept', 'text/xml');
    headers.set('Content-Type', 'text/xml');
    
    // return this.http.get("http://183.82.144.243:8081/api/Transactions/InfoData/1277/33/56768/56578")
    //   .map(res => res.json();

     return this.http.get("http://183.82.144.243:8081/api/Transactions/InfoData/1277/33/56768/56578")
      //convert to JSON here
      .map(res => res.json())
      .catch((e: any) => Observable.throw(this.errorHandler(e)));;
      // .subscribe(data => { 
      //      console.log(data);  
      //      console.log("hello")            
      // })
  }
  errorHandler(error: any): void {
    console.log(error || 'Error');
  }

}
