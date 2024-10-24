import { Observable } from 'rxjs';
import { Author } from '../entities/author';
import AuthorGateway from '../interfaces/authorGateway';

export class AuthorHttpRepository implements AuthorGateway {
  createAuthor(Author: Author): Observable<Author> {
    throw new Error('Method not implemented.');
  }
  listAllAuthors(): Observable<Author[]> {
    throw new Error('Method not implemented.');
  }
  updateAuthor(id: number): Observable<Author> {
    throw new Error('Method not implemented.');
  }
  deleteAuthor(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
