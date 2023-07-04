import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerGraphBarComponent } from './container-graph-bar/container-graph-bar.component';
import { ContainerGraphDoughnutComponent } from './container-graph-doughnut/container-graph-doughnut.component';
import { ContainerGraphPieComponent } from './container-graph-pie/container-graph-pie.component';
import { ContainerOptionsCheckboxComponent } from './container-options-checkbox/container-options-checkbox.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { ContainerGraphsComponent } from './container-graphs/container-graphs.component';

const listComponents = [
  ContainerGraphBarComponent,
  ContainerGraphDoughnutComponent,
  ContainerGraphPieComponent,
  ContainerGraphPieComponent,
  ContainerOptionsCheckboxComponent,
  ContainerGraphsComponent, 
];

@NgModule({
  declarations: [
    ...listComponents
  ],
  exports:[
    ...listComponents 
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
  ]
})
export class ComponentsModule { }
