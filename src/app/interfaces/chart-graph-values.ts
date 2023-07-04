export class ChartGraphValues {
    chartLabels: any[];
    chartDatasets:any[];

    constructor( chartLabels: any[]=[],  chartDatasets:any[]=[]) {
        this.chartLabels=chartLabels;
        this.chartDatasets=chartDatasets;
    }
}