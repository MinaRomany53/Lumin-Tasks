import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [];
  selectedBook: Book = null;
  selectedBookIndex: number | null = null;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  selectBook(book: Book): void {
    this.selectedBook = book;
  }

  onActive(index: number) {
    this.selectedBookIndex = index;
  }
}
