import { Component } from '@angular/core';
import { Report } from 'src/app/models/report.class';
import { getGraphByCanal, getGraphByPlatform, getGraphBySegmentation } from 'src/app/helpers/graph-methods';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-container-graphs',
  templateUrl: './container-graphs.component.html',
  styleUrls: ['./container-graphs.component.css']
})
export class ContainerGraphsComponent {

  pieChartLabelsPlatform :any[]=[];
  pieChartDatasetsPlatform : any []=[];
  
  pieChartLabelsSegmentation :any[]=[];
  pieChartDatasetsSegmentation : any []=[];
  
  barChartDataForCanal: ChartConfiguration<'bar'>['data'] = { labels: [], datasets: [] }

  // Load data Graphs
  handleUpdateGraphs(listReportFilter: Report[] ) {

    let graphPlatformFilter = getGraphByPlatform(listReportFilter);
    this.pieChartLabelsPlatform = graphPlatformFilter?.labels ?? [];
    this.pieChartDatasetsPlatform = [ { data:  graphPlatformFilter?.values ?? []}];
  
    let graphSegmentationFilter = getGraphBySegmentation(listReportFilter);
    this.pieChartLabelsSegmentation = graphSegmentationFilter?.labels ?? [];
    this.pieChartDatasetsSegmentation = [ { data: graphSegmentationFilter?.values ?? []}];

    let graphCanalFilter = getGraphByCanal(listReportFilter);
    this.barChartDataForCanal = {
      labels: graphCanalFilter?.labels ?? [], 
      datasets: [
        {
          label: graphCanalFilter?.label, 
          data: graphCanalFilter?.values ?? [],
          backgroundColor: graphCanalFilter?.colors ?? [],
          borderWidth: 1,
        }
      ]
    };



  }



}
