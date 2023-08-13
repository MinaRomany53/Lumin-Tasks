import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent {
  @Input() books: Book[] = [];
  @Output() selectedBook = new EventEmitter<Book>();
  selectedBookIndex: number | null = null;

  selectBook(book: Book): void {
    this.selectedBook.emit(book);
  }

  onActive(index: number) {
    this.selectedBookIndex = index;
  }
}
