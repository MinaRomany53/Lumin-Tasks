import { Component } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  selectedBook: Book = null;

  onBookSelected(book: Book) {
    this.selectedBook = book;
  }
}
