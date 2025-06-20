import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Author } from '../../domain/entities/author';
import { formatDateToYYYYMMDD } from '../../../utils/helpers';

@Component({
  selector: 'app-forms-author',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms-author.component.html',
})
export class FormsAuthorComponent {
  authorForm: FormGroup;
  @Input() author: Author | null = null;
  @Output() formSubmit = new EventEmitter<any>();
  updateTemplate: boolean = false;

  constructor(private fb: FormBuilder) {
    this.authorForm = this.fb.group({
      name: [''],
      birthDate: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['author'] && this.author) {
      this.updateFormWithAuthor(this.author);
      this.updateTemplate = true;
    }
  }

  updateFormWithAuthor(author: Author) {
    this.authorForm.patchValue({
      name: author.name,
      birthDate: formatDateToYYYYMMDD(new Date(author.birthDate)),
    });
  }

  onSubmit() {
    if (this.authorForm.valid) {
      console.log('Form submitted:', this.authorForm.value);
      this.formSubmit.emit(this.authorForm.value);
    }
    this.authorForm.reset();
    this.updateTemplate = false;
  }
}
