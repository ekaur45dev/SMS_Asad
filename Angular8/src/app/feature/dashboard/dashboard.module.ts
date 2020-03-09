import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuBarComponent } from '../../shared/menu-bar/menu-bar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [DashboardComponent, MenuBarComponent,  HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
