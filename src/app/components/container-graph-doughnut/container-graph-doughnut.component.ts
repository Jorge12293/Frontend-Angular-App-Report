import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-container-graph-doughnut',
  templateUrl: './container-graph-doughnut.component.html',
  styleUrls: ['./container-graph-doughnut.component.css']
})
export class ContainerGraphDoughnutComponent {
  @Input() title: string=''; 
  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [
      { data: [350, 450, 100], label: 'Series A' },
      { data: [50, 150, 120], label: 'Series B' },
      { data: [250, 130, 70], label: 'Series C' },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
  };

}
