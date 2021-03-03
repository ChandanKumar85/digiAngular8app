import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  readonly ROOT_URL = "http://65.1.65.81/restapi/v1";

  constructor(private http:HttpClient) { }

  getAllServices(){
    return this.http.get(this.ROOT_URL);
  }

}
