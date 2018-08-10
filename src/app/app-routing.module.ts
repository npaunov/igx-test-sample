import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { InputReactiveComponent } from './input-reactive/input-reactive.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { text: 'Home' }},
  { path: 'input', component: InputComponent, data: { text: 'Input' } },
  { path: 'input-reactive', component: InputReactiveComponent, data: { text: 'Input Reactive' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
