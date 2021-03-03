import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
declare var $: any;
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  readonly ROOT_URL = "http://65.1.65.81/restapi/v1";
  
  homeBanner:any;
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(private http:HttpClient) { }

ngOnInit() {
  const homeBanner = this.http.get(this.ROOT_URL + '/home-header-banner');
  forkJoin([homeBanner]).subscribe( result => {
    this.homeBanner = result[0];
    //console.log(this.homeBanner);
  });

  this.myStyle = {
    'position': 'absolute',
    'width': '100%',
    'height': '100%',
    'z-index': 1,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  }
  this.myParams = {
    particles: {
      number: {
          value: 100,
      },
      color: {
          value: '#ff0000'
      },
      shape: {
          type: 'triangle',
      },
    }
  }
}

}
