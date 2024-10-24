import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorService } from './domain/services/author.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrigido de styleUrl para styleUrls
})
export class AppComponent {
  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.authorService.listAllAuthors().subscribe({
      next: (result) => {
        console.log(result);
        if (!result || result.length === 0) {
          console.log('não funcionou');
        }
      },
    });
  }
}
