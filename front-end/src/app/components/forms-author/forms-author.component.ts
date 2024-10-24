import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-author',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms-author.component.html',
})
export class FormsAuthorComponent {
  authorForm: FormGroup;
  @Output() formSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.authorForm = this.fb.group({
      name: [''],
      birthDate: [''],
    });
  }

  onSubmit() {
    if (this.authorForm.valid) {
      console.log('Form submitted:', this.authorForm.value);
      this.formSubmit.emit(this.authorForm.value);
      // Aqui você pode chamar um serviço para enviar os dados
    }
  }
}
