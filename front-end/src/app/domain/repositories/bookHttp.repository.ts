import { Observable } from 'rxjs';
import { Book } from '../entities/book';
import BookGateway from '../interfaces/bookGateway';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class BooksHttpRepository implements BookGateway {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.apiUrl;
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
  updateBook(id: number, book: Partial<Book>): Observable<Book> {
    return this.http.patch<Book>(this.apiUrl + 'books/' + id, book);
  }
  deleteBook(id: number): Observable<void> {
    const sId = id.toString();
    return this.http.delete<void>(this.apiUrl + 'books/' + sId);
  }
}
