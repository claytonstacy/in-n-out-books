/*
============================================
Title: 8.2- Server Side Communications
Author: Clayton Stacy
Date: 24 August 2020
Modified by: Clayton Stacy
Description: Demonstrate communicating through APIs
============================================
*/

import { Injectable } from '@angular/core';
import {IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
/* import { map } from 'rxjs'; */


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ]
  constructor(private http: HttpClient) {

   }

   getBooks() {
    let params = new HttpParams();
    params = params.append('bibkeys', `ISBN: ${ this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    return this.http.get('https://openlibrary.org/api/books', {params: params});
  }

}
