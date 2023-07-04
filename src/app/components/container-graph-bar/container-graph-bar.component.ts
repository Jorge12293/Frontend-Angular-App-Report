import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-container-graph-bar',
  templateUrl: './container-graph-bar.component.html',
  styleUrls: ['./container-graph-bar.component.css']
})
export class ContainerGraphBarComponent {
  @Input() title: string='';
  @Input() chartWidth: number = 200;
  @Input() chartHeight: number = 200;
  @Input() barChartData: ChartConfiguration<'bar'>['data'] = { labels: [], datasets: [] }

  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    indexAxis: "x",
  };

  // public barChartData: ChartConfiguration<'bar'>['data'] = {
  //   labels: [ 
  //     '2006', 
  //     '2007', 
  //     '2009',
  //     '2001', 
  //     '2002', 
  //     '2003', 
  //     '2004', 
  //     '2005', 
  //     '2011',  
  //   ],
  //   datasets: [
  //     { 
  //       data: [ 65, 59, 80,65, 59, 80 ],
  //       label: 'Canal', 
  //       backgroundColor: [
  //         this.generateRandomColor(),    // Color para el año 2006
  //         this.generateRandomColor(),   
  //         this.generateRandomColor(),   
  //         this.generateRandomColor(),    // Color para el año 2006
  //         this.generateRandomColor(),   
  //         this.generateRandomColor(),   
  //         this.generateRandomColor(),    // Color para el año 2006
  //         this.generateRandomColor(),   
  //         this.generateRandomColor(),   
  //       ],
  //       borderWidth: 1
  //     },
  //   ]
  // };






}
