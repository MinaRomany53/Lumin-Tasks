import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<Book[]>('../assets/books.json');
  }
}
