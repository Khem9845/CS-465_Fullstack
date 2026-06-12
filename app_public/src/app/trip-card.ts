import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from './trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCardComponent implements OnInit {
  @Input('trip') trip: Trip = {
    _id: '',
    code: '',
    name: '',
    length: '',
    start: new Date(),
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public editTrip(trip: Trip): void {
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }
}