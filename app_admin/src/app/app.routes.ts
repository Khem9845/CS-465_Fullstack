import { Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing';
import { AddTripComponent } from './add-trip/add-trip';
import { EditTripComponent } from './edit-trip/edit-trip';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'trips-listing', pathMatch: 'full' },
  { path: 'trips-listing', component: TripListingComponent, canActivate: [AuthGuard] },
  { path: 'add-trip', component: AddTripComponent, canActivate: [AuthGuard] },
  { path: 'edit-trip', component: EditTripComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];