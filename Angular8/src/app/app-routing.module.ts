import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [

  {
    path: "", redirectTo: "/account",pathMatch:"full"
  },
  {
    path: "account", loadChildren: () => import("./Feature/account/account.module").then(mod => mod.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
