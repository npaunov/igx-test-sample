import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { InputReactiveComponent } from './input-reactive/input-reactive.component';
import { TimePickerSample1Component } from './timepicker-sample-1/timepicker-sample-1.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { text: 'Home' }},
  { path: 'input', component: InputComponent, data: { text: 'Input' } },
  { path: 'input-reactive', component: InputReactiveComponent, data: { text: 'Input Reactive' } },
  { path: 'timepicker-sample-1', component: TimePickerSample1Component, data: { text: 'TimePicker sample 1' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
