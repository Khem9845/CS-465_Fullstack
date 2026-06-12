import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Travlr Admin</a>
        <div class="navbar-nav">
          <a class="nav-link" routerLink="/">Trip Listing</a>
          <a class="nav-link" routerLink="/add-trip">Add Trip</a>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'travlr-admin';
}