import { Observable } from 'rxjs';
import { Author } from '../entities/author';
import { Book } from '../entities/book';

export default interface BookGateway {
  createBook(Book: Book): Observable<Book>;

  listAllbooks(): Observable<Book[]>;

  listBooksOfAuthors(id: number): Observable<Book[]>;

  updateBook(id: number): Observable<Author>;

  deleteBook(id: number): Observable<void>;
}
