import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-request-a-quote',
  templateUrl: './request-a-quote.component.html',
  styleUrls: ['./request-a-quote.component.css']
})
export class RequestAQuoteComponent implements OnInit {
  
readonly ROOT_URL = "http://65.1.65.81/restapi/v1";
  //readonly ROOT_URL = environment.base_url;
  service_link:any;
  top_header_contact:any;
  meta_tag:any;

  public show:boolean = false;
  public buttonName:any = 'Show';

  submitted = false;
  constructor(private http:HttpClient, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('home_page');

    const service_link = this.http.get(this.ROOT_URL + '/service_link');
    const top_header_contact = this.http.get(this.ROOT_URL + '/top_header_contact');
    forkJoin([
      service_link,
      top_header_contact
    ]).subscribe( result => {
      this.service_link = result[0];
      this.top_header_contact = result[1];
      //console.log(this.top_header_contact);
    });

    return this.http.get(this.ROOT_URL + '/meta_tag_request_a_quote').subscribe((data)=>{
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

  toggle() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
