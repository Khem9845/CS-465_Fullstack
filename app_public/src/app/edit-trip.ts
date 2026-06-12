import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from './trip-data.service';
import { Trip } from './trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-trip.html',
  styles: []
})
export class EditTripComponent implements OnInit {
  trip: Trip = {
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

  constructor(
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    const tripCode = localStorage.getItem('tripCode');
    if (tripCode) {
      this.tripDataService.getTrip(tripCode).subscribe({
        next: (value: any) => {
          this.trip = value[0];
        },
        error: (error: any) => {
          console.error('Error fetching trip:', error);
        }
      });
    }
  }

  public onSubmit(): void {
    this.tripDataService.updateTrip(this.trip).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.error('Error updating trip:', error);
      }
    });
  }

  public goBack(): void {
    this.router.navigate(['']);
  }
}