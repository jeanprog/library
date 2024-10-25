import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../../domain/entities/author';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './author-list.component.html',
})
export class AuthorListComponent {
  @Input() authors: Author[] = [];
  selectedIndex: number | null = null;
  @Output() authorSelected = new EventEmitter<number>();
  @Output() reload = new EventEmitter<any>();
  @Output() authorEvent = new EventEmitter<Author>();
  @Output() deleteAuthorEvent = new EventEmitter<any>();

  toggleSelection(index: number, authorID: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
    if (!authorID) {
      this.reload.emit();
    }
    if (this.selectedIndex === null) {
      this.reload.emit();
    } else {
      this.authorSelected.emit(authorID);
    }
  }

  onEventUpdateAuthor(author: Author) {
    console.log(author, 'no evento component');
    this.authorEvent.emit(author);
  }

  deleteAuthor(id: number) {
    this.deleteAuthorEvent.emit(id);
  }
}
