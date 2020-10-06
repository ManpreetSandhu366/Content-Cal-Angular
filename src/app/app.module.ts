import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IToastr } from 'src/services/IToastr.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { TOASTR_TOKEN } from 'src/services/toastr.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HomeLocallyComponent } from './homeLocally/homeLocally.component';

const toastr: IToastr = window['toastr'];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeLocallyComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
