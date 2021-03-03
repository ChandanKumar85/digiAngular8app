import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
declare var $: any;
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
readonly ROOT_URL = "http://65.1.65.81/restapi/v1";
  //readonly ROOT_URL = environment.base_url;
  redefining_digital:any;
  our_methodology:any;
  testimonials:any;
  what_to_do:any;
  top_digitigian:any;
  bottom_digitigian:any;
  our_winning_strokes:any;
  our_team_persion:any;
  meta_tag_home:any;

  constructor(
    private http:HttpClient, 
    private titleService: Title, private meta: Meta
    ) {
    $(document).ready(function($){
      var $this;
      var contentSections = $('.cd-section'),
          navigationItems = $('#cd-vertical-nav li');
    
      updateNavigation();
      $(window).on('scroll', function(){
        updateNavigation();
      });
    
      function updateNavigation() {
        contentSections.each(function(){
          $this = $(this);
          var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
          if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
            navigationItems.eq(activeSection).addClass('active');
          }else {
            navigationItems.eq(activeSection).removeClass('active');
          }
        });
      }
    });

  }

  // collect that title data properties from all child routes
  // there might be a better way but this worked for me
  getTitle(state, parent) {
    var data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('home_page');

    const redefining_digital = this.http.get(this.ROOT_URL + '/redefining_digital');
    const our_methodology = this.http.get(this.ROOT_URL + '/our_methodology');
    const testimonials = this.http.get(this.ROOT_URL + '/testimonials');
    const what_to_do = this.http.get(this.ROOT_URL + '/service_link');
    const top_digitigian = this.http.get(this.ROOT_URL + '/top_digitigian');
    const bottom_digitigian = this.http.get(this.ROOT_URL + '/bottom_digitigian');
    const our_winning_strokes = this.http.get(this.ROOT_URL + '/our_winning_strokes');
    const our_team_persion = this.http.get(this.ROOT_URL + '/our_team_persion');
    
    forkJoin([
      redefining_digital, 
      our_methodology, 
      testimonials, 
      what_to_do, 
      top_digitigian, 
      bottom_digitigian, 
      our_winning_strokes,
      our_team_persion
    ]).subscribe( result => {
      this.redefining_digital = result[0];
      this.our_methodology = result[1];
      this.testimonials = result[2];
      this.what_to_do = result[3];
      this.top_digitigian = result[4];
      this.bottom_digitigian = result[5];
      this.our_winning_strokes = result[6];
      this.our_team_persion = result[7];
    });

    return this.http.get(this.ROOT_URL + '/meta_tag_home').subscribe((data)=>{
      this.meta_tag_home = data;
    
      this.titleService.setTitle(this.meta_tag_home[0].field_page_title);
      this.meta.updateTag({name: 'canonical', content: this.meta_tag_home[0].field_canonical});
      this.meta.updateTag({name: 'keywords', content: this.meta_tag_home[0].field_keywords});
      this.meta.updateTag({name: 'description', content: this.meta_tag_home[0].field_description});
      this.meta.updateTag({name: 'og_title', property: 'og:title', content: this.meta_tag_home[0].field_page_title});
      this.meta.updateTag({name: 'og_url', property: 'og:url', content: this.meta_tag_home[0].field_canonical});
      this.meta.updateTag({name: 'og_site_name', property: 'og:site_name', content: this.meta_tag_home[0].field_site_name});
      //console.log(this.meta_tag_home[0].field_page_title);
      //this.meta.addTag({name: 'author', content: 'rsgitech'});
      //this.meta.addTag({name: 'robots', content: 'index, follow'});

    });
  }

  scrollTOElement = (element, offsetParam?, speedParam?) => {
    const toElement = $(element);
    const focusElement = $(element);
    const offset = offsetParam * 1 || 200;
    const speed = speedParam * 1 || 500;
    $('html, body').animate({
      scrollTop: toElement.offset().top + offset
    }, speed);
    if (focusElement) {
      $(focusElement).focus();
    }
  }

  mySlideOptions = {
    items: 1,
    nav: true,
    loop: true,
    margin: 10,
    dots: false,
    autoHeight:true,
    responsiveClass: true
  }

}
