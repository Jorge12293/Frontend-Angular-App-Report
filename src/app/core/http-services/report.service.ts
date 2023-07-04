import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_URLS } from '../urls/api.urls';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  
  constructor(
    private http: HttpClient,
  ) { }

  getListReportLimit(limit:number) {
    return this.http.get(`${API_URLS.listReportLimit}/${limit}`);
  }
  
}
