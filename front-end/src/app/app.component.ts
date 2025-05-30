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
  authorUpdate!: Author;

  ngOnInit() {
    this.getAllbooks();
    this.listAllAuthor();
  }

  onUpdateAuthor(author: Author) {
    this.authorUpdate = author;
  }
  listAllAuthor() {
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

  handleFormSubmitAuthor(author: Author) {
    if (this.authorUpdate) {
      const id = Number(this.authorUpdate.id);
      const authorFormated = {
        ...author,
        id: id,
      };
      console.log(authorFormated, 'cai aqui');

      this.authorService.updateAuthor(id, authorFormated).subscribe({
        next: (result: Author) => {
          console.log('alterado com sucesso', result);
          this.listAllAuthor();
          this.getAllbooks();
        },
      });
    } else {
      this.authorService.createAuthor(author).subscribe({
        next: (result: Author) => {
          console.log('cadastrado com sucesso', result);
          this.getAllbooks();
          this.listAllAuthor();
        },
      });
    }
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
  }

  getAllbooks() {
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
        console.log('deletei o book');
        this.getAllbooks();
      },
    });
  }
  deleteAuthorSubmit(id: number) {
    this.authorService.deleteAuthor(id).subscribe({
      next: () => {
        console.log('deletei o authors');
        this.listAllAuthor();
      },
      error: (error) => {
        console.log(
          'voce não pode deletar pois existe historicos de livros associados a este author',
          error
        );
      },
    });
  }
}
