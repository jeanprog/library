import { Observable } from 'rxjs';
import { Author } from '../entities/author';
import { Book } from '../entities/book';
import BookGateway from '../interfaces/bookGateway';

export class BookService implements BookGateway {
  createAuthor(Author: Author): Observable<Book> {
    throw new Error('Method not implemented.');
  }
  listAllbooks(): Observable<Book[]> {
    throw new Error('Method not implemented.');
  }
  listBooksOfAuthors(): Observable<Book[]> {
    throw new Error('Method not implemented.');
  }
  updateBook(id: number): Observable<Author> {
    throw new Error('Method not implemented.');
  }
  deleteBook(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
