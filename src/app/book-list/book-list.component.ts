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
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Array<IBook> = [];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe(res => {
      // Removed first imbedded if, it seemed unnecessary since we are iterating res, it will always contain key?
      // Refactored author if statement to ternary like the other property mapping statements
      for (let key in res) {
          this.books.push({
          isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
          title: res[key].details.title,
          description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
          numOfPages: res[key].details.number_of_pages,
          authors: res[key].details.authors ? res[key].details.authors.map(author => author.name) : [],
          thumb: res[key].thumbnail_url
        });
      }
    });
   }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.books.find(book =>book.isbn === isbn);
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }

}
