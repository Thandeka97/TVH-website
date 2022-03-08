import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginUIComponent } from './login-ui/login-ui.component';



const routes: Routes = [
  {path: 'loginForm',component:LoginFormComponent},
  {path:'loginUI', component:LoginUIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myroute = {LoginFormComponent}
export const androute = {LoginUIComponent}
