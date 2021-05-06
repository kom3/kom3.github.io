import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"view", component:ViewprojectComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
