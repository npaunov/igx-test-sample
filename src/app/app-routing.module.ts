import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { InputReactiveComponent } from './input-reactive/input-reactive.component';
import { TimePickerSample1Component } from './timepicker-sample-1/timepicker-sample-1.component';
import { GridComponent } from './grid/grid.component';
import { ColorPickerSampleComponent } from './color-picker-sample/color-picker-sample.component';
import { TabsSample4Component } from './tabs-sample-4/components/tabs-sample-4.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { text: 'Home' }},
  { path: 'input', component: InputComponent, data: { text: 'Input' } },
  { path: 'input-reactive', component: InputReactiveComponent, data: { text: 'Input Reactive' } },
  { path: 'timepicker-sample-1', component: TimePickerSample1Component, data: { text: 'TimePicker sample 1' } },
  { path: 'grid', component: GridComponent, data: { text: 'Grid' } },
  { path: 'color-picker', component: ColorPickerSampleComponent, data: { text: 'color-picker' } },
  { path: 'tabs', component: TabsSample4Component, data: { text: 'tabs-routing' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
