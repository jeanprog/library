import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Author } from '../../domain/entities/author';
import { NgFor, NgIf } from '@angular/common';
import { Book } from '../../domain/entities/book';
import { formatDateToYYYYMMDD } from '../../../utils/helpers';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './forms-book.component.html',
})
export class BookFormComponent {
  bookForm: FormGroup;
  @Input() authors: Author[] = [];
  @Input() book: Book | null = null;
  @Output() formSubmit = new EventEmitter<any>();
  updateTemplate: boolean = false;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      publicationDate: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['book'] && changes['book'].currentValue) {
      this.populateForm(changes['book'].currentValue);
      this.updateTemplate = true;
    }
  }
  populateForm(book: Book) {
    this.bookForm.patchValue({
      title: book.title,
      publicationDate: formatDateToYYYYMMDD(new Date(book.publicationDate)),
      author: book.author.id, // Setar o ID do autor
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const bookData = this.bookForm.value;
      const formattedBookData = {
        ...bookData,
        author: Number(bookData.author),
      };
      this.formSubmit.emit(formattedBookData);
      this.bookForm.reset();
      this.updateTemplate = false;
    }
  }
}
