import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BackendService } from './service/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowdetailsComponent } from './showdetails/showdetails/showdetails.component';
import { SearchbyidComponent } from './searchbyid/searchbyid.component';
import { UpdateinternComponent } from './updateintern/updateintern.component';
import { RemoveinternComponent } from './removeintern/removeintern.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdddetailsComponent,
    ShowdetailsComponent,
    SearchbyidComponent,
    UpdateinternComponent,
    RemoveinternComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [MatSnackBar,BackendService],
  bootstrap: [AppComponent]


})
export class AppModule { }
