import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'login', component: LoginComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
