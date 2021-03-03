import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
readonly ROOT_URL = "http://65.1.65.81/restapi/v1";
  //readonly ROOT_URL = environment.base_url;
  foo_about:any;
  foo_blog:any;
  foo_serv:any;
  foo_contD:any;
  foo_follow:any;
  foo_all_right:any;
  social_media:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    const foo_about = this.http.get(this.ROOT_URL + '/footer_about_navi');
    const foo_blog = this.http.get(this.ROOT_URL + '/footer_blog_navi');
    const foo_serv = this.http.get(this.ROOT_URL + '/footer_services_navi');
    const foo_contD = this.http.get(this.ROOT_URL + '/footer-contact');
    const foo_follow = this.http.get(this.ROOT_URL + '/follow_us_para');
    const foo_all_right = this.http.get(this.ROOT_URL + '/footer_all_right');
    const social_media = this.http.get(this.ROOT_URL + '/social_media');
    forkJoin([foo_about, foo_blog, foo_serv, foo_contD, foo_follow, foo_all_right, social_media]).subscribe( result => {
      this.foo_about = result[0];
      this.foo_blog = result[1];
      this.foo_serv = result[2];
      this.foo_contD = result[3];
      this.foo_follow = result[4];
      this.foo_all_right = result[5];
      this.social_media = result[6];
      //console.log(this.foo_about);
    });
  }

}
