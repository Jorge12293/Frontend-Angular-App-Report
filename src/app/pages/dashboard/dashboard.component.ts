import { Component, ViewChild } from '@angular/core';
import { ReportService } from 'src/app/core/http-services/report.service';
import { ItemCheck } from 'src/app/interfaces/item-check';
import { ConvertListReport, Report } from 'src/app/models/report.class';

import { 
  getListNameCatCarUnique, 
  getListNameCitiesUnique, 
  getListNameCompaniesUnique, 
} from 'src/app/helpers/report-methods';
import { ContainerGraphsComponent } from 'src/app/components/container-graphs/container-graphs.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @ViewChild(ContainerGraphsComponent) containerGraphsComponent: ContainerGraphsComponent | undefined;

  listReport: Report[]=[];
  listReportFilter: Report[]=[];
  
  listItemCheckCompanies: ItemCheck[]=[];
  listItemCheckCities: ItemCheck[]=[];
  listItemCheckCatsCar: ItemCheck[]=[];

  listItemCheckCompaniesSelect: ItemCheck[]=[];
  listItemCheckCitiesSelect: ItemCheck[]=[];
  listItemCheckCatsCarSelect: ItemCheck[]=[];

  constructor(
    private reportService: ReportService
  ){}

  ngOnInit() {
    this.reportService.getListReportLimit(2000).subscribe({
      next: this.handleLoadResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }

  handleLoadResponse(response:any) {
    this.listReport = ConvertListReport.toListReport(JSON.stringify(response));
    this.listReportFilter = [...this.listReport];
    this.listItemCheckCompanies = getListNameCompaniesUnique(this.listReport);
    this.listItemCheckCities = getListNameCitiesUnique(this.listReport);
    this.listItemCheckCatsCar = getListNameCatCarUnique(this.listReport);
    this.containerGraphsComponent?.handleUpdateGraphs(this.listReportFilter);
  }

  handleError(error:any) {
    console.error(error);
  }

  actionListItemCheck(){
    this.listItemCheckCompaniesSelect = this.listItemCheckCompanies.filter(element=>element.checked);
    this.listItemCheckCitiesSelect    = this.listItemCheckCities.filter(element=>element.checked);
    this.listItemCheckCatsCarSelect   = this.listItemCheckCatsCar.filter(element=>element.checked);
    
    this.listReportFilter=[];
    if(this.listItemCheckCompaniesSelect.length > 0 || this.listItemCheckCitiesSelect.length > 0 || this.listItemCheckCatsCarSelect.length>0){
      this.listReport.forEach(element=>{
        const hasNomEmpresa =  this.listItemCheckCompaniesSelect.some(e => e.name === element.conNomEmpresa);
        const hasNomCiudad =  this.listItemCheckCitiesSelect.some(e => e.name === element.conNomCiudad);
        const hasCatCar =  this.listItemCheckCatsCarSelect.some(e => e.name === element.conNomCatVehiculo);
        if( hasNomEmpresa || hasNomCiudad || hasCatCar){
          this.listReportFilter.push(element);
        }
      });
    }else{
      this.listReportFilter = [...this.listReport] ; 
    }
    this.containerGraphsComponent?.handleUpdateGraphs(this.listReportFilter);
  }


}
