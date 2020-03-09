import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [

  {
    path: "", redirectTo: "/account",pathMatch:"full"
  },
  {
    path: "account", loadChildren: () => import("./feature/account/account.module").then(mod => mod.AccountModule)
  },
  {
    path: "dashboard", loadChildren: () => import("./feature/dashboard/dashboard.module").then(module => module.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
