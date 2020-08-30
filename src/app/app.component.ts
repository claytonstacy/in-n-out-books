/*
============================================
Title: 8.2- Server Side Communications
Author: Clayton Stacy
Date: 24 August 2020
Modified by: Clayton Stacy
Description: Demonstrate communicating through APIs
============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;
  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books'
  }
}
