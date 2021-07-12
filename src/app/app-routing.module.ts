import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { HomeComponent } from './home/home.component';
import { ShowdetailsComponent } from './showdetails/showdetails/showdetails.component';

const routes: Routes = [
  {
    path:"show",
    component:ShowdetailsComponent,
    pathMatch:"full"
  },
  {
    path:"add",
    component:AdddetailsComponent,
    pathMatch:"full"
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
