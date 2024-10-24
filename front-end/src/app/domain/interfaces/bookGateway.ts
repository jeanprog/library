import { Observable } from 'rxjs';
import { Author } from '../entities/author';
import { Book } from '../entities/book';

export default interface BookGateway {
  createAuthor(Author: Author): Observable<Book>;

  listAllbooks(): Observable<Book[]>;

  listBooksOfAuthors(): Observable<Book[]>;

  updateBook(id: number): Observable<Author>;

  deleteBook(id: number): Observable<void>;
}
