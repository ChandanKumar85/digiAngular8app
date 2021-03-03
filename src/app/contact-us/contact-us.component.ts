import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
readonly ROOT_URL = "http://65.1.65.81/restapi/v1";
  //readonly ROOT_URL = environment.base_url;
  social_media:any;
  foo_contD:any;
  contact_us_top_details:any;
  contact_google_map:any;
  top_header_contact:any;
  meta_tag:any;

  submitted = false;

  constructor(private http:HttpClient, private titleService: Title, private meta: Meta ) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('home_page');

    const social_media = this.http.get(this.ROOT_URL + '/social_media');
    const foo_contD = this.http.get(this.ROOT_URL + '/footer-contact');
    const contact_us_top_details = this.http.get(this.ROOT_URL + '/contact_us_page_top_details');
    const contact_google_map = this.http.get(this.ROOT_URL + '/contact_google_map');
    const top_header_contact = this.http.get(this.ROOT_URL + '/top_header_contact');
    forkJoin([social_media, foo_contD, contact_us_top_details, contact_google_map, top_header_contact]).subscribe( result => {
      this.social_media = result[0];
      this.foo_contD = result[1];
      this.contact_us_top_details = result[2];
      this.contact_google_map = result[3];
      this.top_header_contact = result[4];
      //console.log(this.contact_google_map);
    });

    return this.http.get(this.ROOT_URL + '/meta_tag_contact_us').subscribe((data)=>{
      this.meta_tag = data;

      this.titleService.setTitle(this.meta_tag[0].field_page_title);
      this.meta.updateTag({name: 'canonical', content: this.meta_tag[0].field_canonical});
      this.meta.updateTag({name: 'keywords', content: this.meta_tag[0].field_keywords});
      this.meta.updateTag({name: 'description', content: this.meta_tag[0].field_description});
      this.meta.updateTag({name: 'og_title', property: 'og:title', content: this.meta_tag[0].field_page_title});
      this.meta.updateTag({name: 'og_url', property: 'og:url', content: this.meta_tag[0].field_canonical});
      this.meta.updateTag({name: 'og_site_name', property: 'og:site_name', content: this.meta_tag[0].field_site_name});
      //console.log(this.meta_tag[0].field_page_title);
    });

  }

  onSubmit(value: any){
    this.submitted = true;
    console.log(value);
  }

} 
