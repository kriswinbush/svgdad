import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/authentication/login/login.component'

const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'landing', loadChildren: 'app/features/landing/landing.module#LandingModule'},
  {path: 'products', loadChildren: 'app/features/products/products.module#ProductsModule'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
