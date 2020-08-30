/*
============================================
Title: 8.2- Server Side Communications
Author: Clayton Stacy
Date: 24 August 2020
Modified by: Clayton Stacy
Description: Demonstrate communicating through APIs
============================================
*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

export class WishlistComponent implements OnInit {
  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
