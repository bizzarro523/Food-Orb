import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { ListFoodComponent } from './list-food/list-food.component';
import { MustMatchDirective } from './directives/must-match.directive';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FoodService } from './services/food.service';
import { HeaderComponent } from './header/header.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CartComponent } from './cart/cart.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { AddressService } from './services/address.service';
import { AddAddressComponent } from './add-address/add-address.component';
import { TrackingComponent } from './tracking/tracking.component';
import { EditAddressComponent } from './edit-address/edit-address.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListFoodComponent,
    MustMatchDirective,
    ForgotPasswordComponent,
    HeaderComponent,
    MainHeaderComponent,
    CartComponent,
    SettingsComponent,
    ProfileComponent,
    AddressComponent,
    AddAddressComponent,
    TrackingComponent,
    EditAddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, FoodService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
