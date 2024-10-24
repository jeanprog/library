import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorService } from './domain/services/author.service';
import { Author } from './domain/entities/author';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { FormsAuthorComponent } from './components/forms-author/forms-author.component';
import { BookService } from './domain/services/book.service';
import { Book } from './domain/entities/book';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookFormComponent } from './components/forms-book/forms-book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthorListComponent,
    FormsAuthorComponent,
    BooksListComponent,
    BookFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrigido de styleUrl para styleUrls
})
export class AppComponent {
  constructor(
    private authorService: AuthorService,
    private bookService: BookService
  ) {}

  authors: Author[] = [];
  booksAuthor: Book[] = [];
  bookUpdate!: Book;

  ngOnInit() {
    this.getAllbooks();
    this.authorService.listAllAuthors().subscribe({
      next: (result) => {
        console.log(result);

        if (!result || result.length === 0) {
          return console.log('error ao obter a lista');
        }
        this.authors = result;
      },
    });
  }

  handleFormSubmit(formData: Author) {
    console.log('Data received from child:', formData);
  }
  handleFormSubmitBook(book: Book) {
    if (this.bookUpdate) {
      const id = Number(this.bookUpdate.id);
      const bookFormated = {
        ...book,
        id: id,
      };
      console.log(bookFormated);
      this.bookService.updateBook(id, bookFormated).subscribe({
        next: (result: Book) => {
          console.log('alterado com sucesso', result);
          this.getAllbooks();
        },
      });
    } else {
      this.bookService.createBook(book).subscribe({
        next: (result: Book) => {
          console.log('cadastrado com sucesso', result);
          this.getAllbooks();
        },
      });
    }
  }

  handleUpdateSubmitBook(id: number, book: Book) {
    this.bookService.updateBook(id, book).subscribe({
      next: (result: Book) => {
        console.log('ATUALIZADO COM SUCESSO', result);
      },
    });
  }

  onUpdateBook(book: Book) {
    this.bookUpdate = book;
    console.log('evento chegou até aqui', this.bookUpdate);
  }

  getAllbooks() {
    console.log('chamei todos aqui');
    this.bookService.listAllbooks().subscribe({
      next: (result: Book[]) => {
        console.log(this.booksAuthor);
        this.booksAuthor = result;
      },
    });
  }

  getBooksAuthor(id: number) {
    this.bookService.listBooksOfAuthors(id).subscribe({
      next: (result: Book[]) => {
        console.log(result);
        this.booksAuthor = result;
      },
      error: (error) => {
        console.log('error implemented', error);
      },
    });
  }

  deleteBooksSubmit(id: number) {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        console.log('não retorna nada deletei o book');
        this.getAllbooks();
      },
    });
  }
}
