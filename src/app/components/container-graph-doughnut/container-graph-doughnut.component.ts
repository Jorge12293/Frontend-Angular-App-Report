import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ChartGraphValues } from 'src/app/interfaces/chart-graph-values';

@Component({
  selector: 'app-container-graph-doughnut',
  templateUrl: './container-graph-doughnut.component.html',
  styleUrls: ['./container-graph-doughnut.component.css']
})
export class ContainerGraphDoughnutComponent {
  @Input() title: string='';
  @Input() chartWidth: number = 200;
  @Input() chartHeight: number = 200; 
  @Input() chartGraphValues: ChartGraphValues = new ChartGraphValues();


  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
  };

}
