import { Observable } from 'rxjs';
import { Author } from '../entities/author';
import AuthorGateway from '../interfaces/authorGateway';
import { AuthorHttpRepository } from '../repositories/authorHttp.repository';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root', // Registra automaticamente no root
})
export class AuthorService implements AuthorGateway {
  constructor(private authorRepository: AuthorHttpRepository) {}
  createAuthor(author: Author): Observable<Author> {
    return this.authorRepository.createAuthor(author);
  }
  listAllAuthors(): Observable<Author[]> {
    return this.authorRepository.listAllAuthors();
  }
  updateAuthor(id: number, author: Author): Observable<Author> {
    return this.authorRepository.updateAuthor(id, author);
  }
  deleteAuthor(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
