import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from './trip-data.service';
import { Trip } from './trip';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-trip.html',
  styles: []
})
export class AddTripComponent implements OnInit {
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

  ngOnInit(): void {}

  public onSubmit(): void {
    this.tripDataService.addTrip(this.trip).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.error('Error adding trip:', error);
      }
    });
  }

  public goBack(): void {
    this.router.navigate(['']);
  }
}