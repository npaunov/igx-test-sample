import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IgxNavigationDrawerModule, IgxToggleModule, IgxGridModule, IgxTimePickerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule, IgxInputGroupModule } from 'igniteui-angular';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { InputReactiveComponent } from './input-reactive/input-reactive.component';
import { TimePickerSample1Component } from './timepicker-sample-1/timepicker-sample-1.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    InputReactiveComponent,
    TimePickerSample1Component,
    GridComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxInputGroupModule,
    IgxTimePickerModule,
    IgxGridModule,
    IgxToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
