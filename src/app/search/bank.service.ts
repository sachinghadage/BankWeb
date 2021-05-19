import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BankService {
apiURl:string = 'https://vast-shore-74260.herokuapp.com/banks?city=' 
  constructor(private http:HttpClient) { }

  getCity(city) {
    return this.http.get<any>(this.apiURl+city)
  }
}
