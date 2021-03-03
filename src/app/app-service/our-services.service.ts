import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OurServicesService {

  readonly ROOT_URL = "http://65.1.65.81/restapi/v1";
  
  base_url:any;
  constructor(private http:HttpClient ) { }
  
  getServices(tid:number){
    return this.http.get(this.ROOT_URL+'/our_service_list/'+tid);
  }

}
