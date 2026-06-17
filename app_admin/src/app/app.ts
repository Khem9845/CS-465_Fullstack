import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'travlr-admin';
}