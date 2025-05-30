import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../domain/entities/book';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { formatDateToDDMMYYYY } from '../../../utils/helpers';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './books-list.component.html',
})
export class BooksListComponent {
  @Input() booksAuthor: Book[] = [];
  @Output() updateBooksEvent = new EventEmitter<any>();
  @Output() deleteBookEvent = new EventEmitter<any>();

  updateBook(book: Book) {
    this.updateBooksEvent.emit(book);
  }

  formatDate(date: string) {
    const dateformat = formatDateToDDMMYYYY(new Date(date));
    return dateformat;
  }

  deleteBook(id: number) {
    this.deleteBookEvent.emit(id);
  }
}
