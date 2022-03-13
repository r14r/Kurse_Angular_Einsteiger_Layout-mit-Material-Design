import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './pages/home/module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { DemoMatTableModule } from './pages/mat-table/module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,

    HomeModule,
    DemoMatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
