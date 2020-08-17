import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class HttpService {

   constructor(private http: HttpClient) { }

   getAdvantageData(){
      let apiUrl = './assets/data.json';
      return this.http.get(apiUrl)
      .forEach( (response: Response) => {
         const data = response.json();
         return data;
      });
   }
}
