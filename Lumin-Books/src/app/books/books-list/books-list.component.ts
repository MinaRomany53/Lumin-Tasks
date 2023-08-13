import { Component, EventEmitter, Output } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent {
  books: Book[] = [];
  @Output() selectedBook = new EventEmitter<Book>();
  selectedBookIndex: number | null = null;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  selectBook(book: Book): void {
    this.selectedBook.emit(book);
  }

  onActive(index: number) {
    this.selectedBookIndex = index;
  }
}
