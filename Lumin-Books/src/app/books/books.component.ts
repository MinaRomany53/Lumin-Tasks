import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [];
  selectedBook: Book = null;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  onBookSelected(book: Book) {
    this.selectedBook = book;
  }
}
