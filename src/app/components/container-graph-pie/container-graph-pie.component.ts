import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ChartGraphValues } from 'src/app/interfaces/chart-graph-values';

@Component({
  selector: 'app-container-graph-pie',
  templateUrl: './container-graph-pie.component.html',
  styleUrls: ['./container-graph-pie.component.css']
})
export class ContainerGraphPieComponent {
  @Input() title: string='';
  @Input() chartWidth: number = 200;
  @Input() chartHeight: number = 200;
  @Input() chartGraphValues: ChartGraphValues = new ChartGraphValues();

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLegend = true;
  public pieChartPlugins = [];


}
