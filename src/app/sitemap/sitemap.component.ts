import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  title = 'Digitigi | Sitemap';
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({name: 'canonical', content: 'http://www.digitigi.com/site-map'});
  	this.meta.updateTag({name: 'keywords', content: ''});
    this.meta.updateTag({name: 'description', content: ''});
    this.meta.updateTag({name: 'og_title', property: 'og:title', content: 'Sitemap - Digitigi Technologies'});
    this.meta.updateTag({name: 'og_url', property: 'og:url', content: 'http://www.digitigi.com/'});
    this.meta.updateTag({name: 'og_site_name', property: 'og:site_name', content: 'digitigi.com'});

  }

}
