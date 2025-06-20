import { Observable } from 'rxjs';
import { Author } from '../entities/author';
import { Book } from '../entities/book';
import BookGateway from '../interfaces/bookGateway';
import { BooksHttpRepository } from '../repositories/bookHttp.repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Registra automaticamente no root
})
export class BookService implements BookGateway {
  constructor(private bookRepository: BooksHttpRepository) {}
  createBook(book: Book): Observable<Book> {
    return this.bookRepository.createBook(book);
  }
  listAllbooks(): Observable<Book[]> {
    return this.bookRepository.listAllbooks();
  }
  listBooksOfAuthors(id: number): Observable<Book[]> {
    return this.bookRepository.listBooksOfAuthors(id);
  }
  updateBook(id: number, book: Partial<Book>): Observable<Book> {
    return this.bookRepository.updateBook(id, book);
  }
  deleteBook(id: number): Observable<void> {
    return this.bookRepository.deleteBook(id);
  }
}
