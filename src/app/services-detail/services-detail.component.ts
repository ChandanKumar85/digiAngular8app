import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { OurServicesService } from '../app-service/our-services.service';
declare var $: any;

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css']
})
export class ServicesDetailComponent implements OnInit {

  constructor(
    private route:ActivatedRoute, 
    private ourServicesService:OurServicesService,
    private titleService: Title, 
    private meta: Meta
    ) {
    setTimeout(function(){
      $('ul.tabs li').click(function(){
        let hasCls = $(this).attr('class');
        $('.tab-content-p').removeClass('current');
        $('.tab_area').find('.'+hasCls).addClass('current');
        $('ul.tabs li').removeClass('current');
        $(this).addClass('current');
      })

      $('.getVal').bind('click',function(){
        var pageval = $(this).attr('rel');
        console.log(pageval);
      })

    }, 300);
  }

  services:any;

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('home_page');

    //console.log(this.route.snapshot.params['tid']);
    let tid = this.route.snapshot.params['tid'];
    this.ourServicesService.getServices(tid).subscribe(serv => {
      this.services = serv;
      
      this.titleService.setTitle(this.services[0].field_page_title_d);
      this.meta.updateTag({name: 'canonical', content: 'http://www.digitigi.com'+this.services[0].view_taxonomy_term});
      this.meta.updateTag({name: 'keywords', content: this.services[0].field_keywords_d });
      this.meta.updateTag({name: 'description', content: this.services[0].field_description_d});
      this.meta.updateTag({name: 'og_title', property: 'og:title', content: this.services[0].field_page_title_d});
      this.meta.updateTag({name: 'og_url', property: 'og:url', content: 'http://www.digitigi.com'+this.services[0].view_taxonomy_term});
      this.meta.updateTag({name: 'og_site_name', property: 'og:site_name', content: 'digitigi.com'});
    })

  }



  mySlideOptions = {
    items: 4,
    nav: true,
    loop: true,
    margin: 20,
    dots: false,
    autoHeight:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsiveClass: true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
    }
  }

}
