import { Observable } from 'rxjs';
import { Author } from '../entities/author';
import AuthorGateway from '../interfaces/authorGateway';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorHttpRepository implements AuthorGateway {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.apiUrl;

  createAuthor(Author: Author): Observable<Author> {
    throw new Error('Method not implemented.');
  }
  listAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl + 'authors');
  }
  updateAuthor(id: number): Observable<Author> {
    throw new Error('Method not implemented.');
  }
  deleteAuthor(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
