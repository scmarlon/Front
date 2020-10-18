import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:3000/';

  constructor(private response: HttpClient) { }

  getPrueba(variabales: JSON){
    return this.response.post(this.url+'test/getTest', variabales);
  }
}

