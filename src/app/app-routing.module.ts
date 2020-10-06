import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeLocallyComponent } from './homeLocally/homeLocally.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'local', component: HomeLocallyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
