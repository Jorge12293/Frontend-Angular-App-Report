import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-container-graph-pie',
  templateUrl: './container-graph-pie.component.html',
  styleUrls: ['./container-graph-pie.component.css']
})
export class ContainerGraphPieComponent {
  @Input() title: string='';
  @Input() chartWidth: number = 200;
  @Input() chartHeight: number = 200;
  @Input() pieChartDatasets:any;
  @Input() pieChartLabels: any;

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  
  public pieChartLegend = true;
  
  public pieChartPlugins = [];

}
