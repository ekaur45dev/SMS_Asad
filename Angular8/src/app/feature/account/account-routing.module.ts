import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{
  path: "", component: IndexComponent, children: [
    {
      path: "", redirectTo:"/account/login",pathMatch:"full"
    },
    {
      path: "login", component: LoginComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
