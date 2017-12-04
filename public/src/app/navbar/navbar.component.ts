import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sideNav() {
    $('.button-collapse').sideNav('toggle');
  }
  sideNavClose() {
    $('.button-collapse').sideNav('hide');
  }

}
