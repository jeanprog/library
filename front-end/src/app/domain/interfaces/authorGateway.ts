import { Observable } from 'rxjs';
import { Author } from '../entities/author';

export default interface AuthorGateway {
  createAuthor(Author: Author): Observable<Author>;

  listAllAuthors(): Observable<Author[]>;

  updateAuthor(id: number): Observable<Author>;

  deleteAuthor(id: number): Observable<void>;
}
