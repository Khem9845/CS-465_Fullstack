import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from './trip-card';
import { TripDataService } from './trip-data.service';
import { Trip } from './trip';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message: string = 'Loading...';

  constructor(
    private tripDataService: TripDataService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getStuff();
  }

  private getStuff(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: any) => {
        console.log('API response:', value);
        this.trips = [...value];
        this.message = 'There are ' + this.trips.length + ' trips available.';
        this.cd.detectChanges();
      },
      error: (error: any) => {
        console.error('Error fetching trips:', error);
        this.message = 'Error: ' + error.message;
        this.cd.detectChanges();
      }
    });
  }
}