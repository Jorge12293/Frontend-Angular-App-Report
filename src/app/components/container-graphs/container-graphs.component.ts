import { Component } from '@angular/core';
import { Report } from 'src/app/models/report.class';
import { getGraphByCanal, getGraphByMedio, getGraphByPlatform, getGraphByQuality, getGraphBySegmentation, getGraphDataBar } from 'src/app/helpers/graph-methods';
import { ChartConfiguration } from 'chart.js';
import { Graph } from 'src/app/interfaces/graph';
import { ChartGraphValues } from 'src/app/interfaces/chart-graph-values';
import { getChartGraphValues } from '../../helpers/graph-methods';


@Component({
  selector: 'app-container-graphs',
  templateUrl: './container-graphs.component.html',
  styleUrls: ['./container-graphs.component.css']
})
export class ContainerGraphsComponent {

  // Variables Graphs Doughnut
  doughnutChartGraphValuesQuality: ChartGraphValues = new ChartGraphValues();
  
  // Variables Graphs Pies
  pieChartGraphValuesPlatform: ChartGraphValues = new ChartGraphValues();
  pieChartGraphValuesSegmentation: ChartGraphValues = new ChartGraphValues();

  // Variables Graphs Bars
  barChartDataForCanal: ChartConfiguration<'bar'>['data'] = { labels: [], datasets: [] }
  barChartDataForMedio: ChartConfiguration<'bar'>['data'] = { labels: [], datasets: [] }

  
  // Load data Graphs
  handleUpdateGraphs(listReportFilter: Report[] ) {

    this.doughnutChartGraphValuesQuality = getChartGraphValues(getGraphByQuality(listReportFilter));

    this.pieChartGraphValuesPlatform = getChartGraphValues(getGraphByPlatform(listReportFilter));
    this.pieChartGraphValuesSegmentation = getChartGraphValues(getGraphBySegmentation(listReportFilter));

    this.barChartDataForCanal = getGraphDataBar(getGraphByCanal(listReportFilter));
    this.barChartDataForMedio = getGraphDataBar(getGraphByMedio(listReportFilter));
  }



}

