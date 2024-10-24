import { Component, Input } from '@angular/core';
import { Author } from '../../domain/entities/author';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css',
})
export class AuthorListComponent {
  @Input() authors: Author[] = [];
}
