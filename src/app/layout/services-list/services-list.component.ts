import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  
readonly ROOT_URL = "http://65.1.65.81/restapi/v1";
  //readonly ROOT_URL = environment.base_url;
  what_to_do:any;

  constructor( private http:HttpClient ) { }

  ngOnInit() {
    const what_to_do = this.http.get(this.ROOT_URL + '/service_link');
    forkJoin([
      what_to_do
    ]).subscribe( result => {
      this.what_to_do = result[0];
      //console.log(this.what_to_do[0]);
    });
  }

}
