import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorService } from './domain/services/author.service';
import { Author } from './domain/entities/author';
import { AuthorListComponent } from './components/author-list/author-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthorListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrigido de styleUrl para styleUrls
})
export class AppComponent {
  constructor(private authorService: AuthorService) {}

  authors: Author[] = [];

  ngOnInit() {
    this.authorService.listAllAuthors().subscribe({
      next: (result) => {
        console.log(result);
        this.authors = result;
        if (!result || result.length === 0) {
          return console.log('error ao obter a lista');
        }
      },
    });
  }
}
