import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.css']
})
export class MethodologyComponent implements OnInit {
  
readonly ROOT_URL = "http://65.1.65.81/restapi/v1";
  //readonly ROOT_URL = environment.base_url;
  methodology:any;
  meta_tag:any;

  constructor(private http:HttpClient, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('home_page');

    const methodology = this.http.get(this.ROOT_URL + '/methodology');
    forkJoin([
      methodology
    ]).subscribe( result => {
      this.methodology = result[0];
      //console.log(this.about_us);
    });

    return this.http.get(this.ROOT_URL + '/meta_tag_methodology').subscribe((data)=>{
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

}
