import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';

@NgModule({
  declarations: [AppComponent, CustomerComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
