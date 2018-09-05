import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IgxNavigationDrawerModule, IgxTabsModule, IgxSnackbarModule, IgxDialogModule, IgxIconModule, IgxDropDownModule, IgxToggleModule, IgxGridModule, IgxTimePickerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule, IgxInputGroupModule, IgxDatePickerModule } from 'igniteui-angular';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { InputReactiveComponent } from './input-reactive/input-reactive.component';
import { TimePickerSample1Component } from './timepicker-sample-1/timepicker-sample-1.component';
import { GridComponent } from './grid/grid.component';
import { ColorPickerSampleComponent } from './color-picker-sample/color-picker-sample.component';
import { TabsSample4Component } from './tabs-sample-4/components/tabs-sample-4.component';
import { TabsRouting1Module } from './tabs-sample-4/tabs.routing1.module';
import { TabsSample4Module } from './tabs-sample-4/tabs-sample-4.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    InputReactiveComponent,
    TimePickerSample1Component,
    GridComponent,
    ColorPickerSampleComponent,
    TabsSample4Component
  ],
  imports: [
    FormsModule,
    IgxIconModule,
    IgxTabsModule,
    IgxSnackbarModule,
    IgxDialogModule,
    IgxDropDownModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxDatePickerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxInputGroupModule,
    IgxTimePickerModule,
    IgxGridModule,
    IgxToggleModule,
		TabsRouting1Module,
		TabsSample4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
