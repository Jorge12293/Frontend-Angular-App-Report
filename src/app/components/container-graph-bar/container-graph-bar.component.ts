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

}
