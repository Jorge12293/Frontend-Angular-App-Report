import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';

const listComponents = [
  DashboardComponent,
  PagesComponent
];


@NgModule({
  declarations: [
    ...listComponents
  ],
  exports: [
    ...listComponents
  ],
  imports: [ 
    CommonModule,
    RouterModule,
    ComponentsModule,
    HttpClientModule,  
  ]

})
export class PagesModule { }
