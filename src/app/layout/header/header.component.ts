import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
readonly ROOT_URL = "http://65.1.65.81/restapi/v1";
  //readonly ROOT_URL = environment.base_url;
  social_media:any;
  top_header_contact:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    const social_media = this.http.get(this.ROOT_URL + '/social_media');
    const top_header_contact = this.http.get(this.ROOT_URL + '/top_header_contact');
    forkJoin([social_media, top_header_contact]).subscribe( result => {
      this.social_media = result[0];
      this.top_header_contact = result[1];
      //console.log(this.social_media);
    });
  }

}
