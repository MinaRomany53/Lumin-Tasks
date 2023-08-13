import { Component, Input } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css'],
})
export class BooksDetailsComponent {
  @Input() book: Book;
}
