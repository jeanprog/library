import { Observable } from 'rxjs';
import { Author } from '../entities/author';
import { Book } from '../entities/book';

export default interface BookGateway {
  createBook(Book: Book): Observable<Book>;

  listAllbooks(): Observable<Book[]>;

  listBooksOfAuthors(id: number): Observable<Book[]>;

  updateBook(id: number, book: Partial<Book>): Observable<Book>;

  deleteBook(id: number): Observable<void>;
}
