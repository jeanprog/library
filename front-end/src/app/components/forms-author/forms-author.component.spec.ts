import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAuthorComponent } from './forms-author.component';

describe('FormsAuthorComponent', () => {
  let component: FormsAuthorComponent;
  let fixture: ComponentFixture<FormsAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsAuthorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
