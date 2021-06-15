import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddressComponent } from './address/address.component';
import { CartComponent } from './cart/cart.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ListFoodComponent } from './list-food/list-food.component';
import { LoginComponent } from './login/login.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list-food/:userId',
    component: ListFoodComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: "cart/:userId",
    component: CartComponent
  },
  {
    path: "settings/:userId",
    component: SettingsComponent
  },
  {
    path: 'header/:userId',
    component: MainHeaderComponent
  },
  {
    path: 'profile/:userId',
    component: ProfileComponent
  },
  {
    path: 'address/:userId',
    component: AddressComponent
  },
  {
    path: "addAddress/:userId",
    component: AddAddressComponent
  },
  {
    path: "trackorder/:userId",
    component: TrackingComponent
  },
  {
    path: "editAddress/:addressId",
    component: EditAddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
