import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { environment } from 'src/environments/environment';

export interface user{ //solo hace falta si no usamos el any y queremos controlar lo que llega
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: number,
    city: string,
    zipcode: number | string,
    geo:{
      lat: number | string,
      lng: number | string,
    }
  },
  phone: number,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}
@Injectable({
  providedIn: 'root'
})

export class UsersService {


  // apiUrl = "https://jsonplaceholder.typicode.com";
 // apiUrl = "http://demo8931173.mockable.io/";
  url: any;

  constructor(
   private _http: HttpClient
  ) {
    this.url= environment.url
    
   }

  getUsers():Observable<any>{
   return this._http.get(this.url + '/usuarios')
   //return this._http.get(this.url + '/medicos')
  }

  getUsuarios():Observable<any>{
    return this._http.get(environment.apiUrl + "/users")
  }
  // getPacientes():Observable<any>{
  //   return this._http.get(this.apiUrl + '/pacientes')
  //  }


}
