import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Author } from '../../domain/entities/author';
import { NgFor } from '@angular/common';
import { Book } from '../../domain/entities/book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './forms-book.component.html',
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  @Input() authors: Author[] = [];
  @Output() formSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      publicationDate: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.bookForm.valid) {
      const bookData = this.bookForm.value;
      const formattedBookData = {
        ...bookData,
        author: Number(bookData.author),
      };
      this.formSubmit.emit(formattedBookData);
    }
  }
}
