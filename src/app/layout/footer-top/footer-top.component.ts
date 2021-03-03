import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer-top',
  templateUrl: './footer-top.component.html'
  //styleUrls: ['./footer-top.component.css']
})
export class FooterTopComponent implements OnInit {
  
readonly ROOT_URL = "http://65.1.65.81/restapi/v1";
  //readonly ROOT_URL = environment.base_url;
  footer_top_link:any;

  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    const footer_top_link = this.http.get(this.ROOT_URL + '/footer_top_link');
    forkJoin([footer_top_link]).subscribe( result => {
      this.footer_top_link = result[0];
      //console.log(this.footer_top_link);
    });
  }

}
