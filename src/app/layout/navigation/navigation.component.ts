import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  // onSave($event){
  //   console.log("Save button is clicked!", $event);
  // }
  
readonly ROOT_URL = "http://65.1.65.81/restapi/v1";
  //readonly ROOT_URL = environment.base_url;
  navig:any;

  constructor( private http:HttpClient ) { }

  ngOnInit() {
    const navig = this.http.get(this.ROOT_URL + '/service_link');
    forkJoin([
      navig
    ]).subscribe( result => {
      this.navig = result[0];
    });
  }
}






  // constructor( private http:HttpClient ) { }
  // ngOnInit() {
  //   return this.http.get(this.ROOT_URL + '/service_link').subscribe((data)=>{
  //     this.navig = data;
  //     //console.log(this.navig);
  //   });
  // }