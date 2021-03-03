import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor( private titleService: Title, private meta: Meta ) { }

  title = 'Digitigi | Page Note Found!';
  ngOnInit() {
    this.titleService.setTitle(this.title);
    //const body = document.getElementsByClassName('navi')[0];
    //body.classList.add('bg-col');
  }

}
