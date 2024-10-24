import { Observable } from 'rxjs';
import { Book } from '../entities/book';
import BookGateway from '../interfaces/bookGateway';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Author } from '../entities/author';

@Injectable({
  providedIn: 'root',
})
export class BooksHttpRepository implements BookGateway {
  constructor(private http: HttpClient) {}
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl + 'books', book);
  }
  listAllbooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + 'books');
  }
  listBooksOfAuthors(id: number): Observable<Book[]> {
    const sId = id.toString();
    return this.http.get<Book[]>(this.apiUrl + 'books/' + 'author/' + sId);
  }
  updateBook(id: number): Observable<Author> {
    throw new Error('Method not implemented.');
  }
  deleteBook(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
  private apiUrl = environment.apiUrl;
}
