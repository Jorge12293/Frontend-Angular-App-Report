import { ChartConfiguration } from 'chart.js';
import { ChartGraphValues } from '../interfaces/chart-graph-values';
import { Graph } from '../interfaces/graph';
import { Report } from '../models/report.class';
import { generateRandomColor } from './colors-methods';



export const getGraphByQuality = (listReport: Report[]): Graph => {
  const graph: Graph = {
    label: 'Plataforma',
    labels: [],
    values: [],
    colors: [],
  };

  const countMap: Map<string, number> = new Map();
  const uniqueNames: Set<string> = new Set();

  listReport.forEach((element) => {
    const name = element.conNomCalidad;
    uniqueNames.add(name);
    countMap.set(name, (countMap.get(name) || 0) + 1);
  });

  uniqueNames.forEach((name) => {
    graph.labels.push(name);
    graph.values.push(countMap.get(name) || 0);
    graph.colors.push(generateRandomColor());
  });

  return graph;
};


export const getGraphByPlatform = (listReport: Report[]): Graph => {
   const graph: Graph = {
     label: 'Plataforma',
     labels: [],
     values: [],
     colors: [],
   };
 
   const countMap: Map<string, number> = new Map();
   const uniqueNames: Set<string> = new Set();
 
   listReport.forEach((element) => {
     const name = element.conNomPlatfIng;
     uniqueNames.add(name);
     countMap.set(name, (countMap.get(name) || 0) + 1);
   });
 
   uniqueNames.forEach((name) => {
     graph.labels.push(name);
     graph.values.push(countMap.get(name) || 0);
     graph.colors.push(generateRandomColor());
   });

   return graph;
 };
 
 export const getGraphBySegmentation = (listReport: Report[]): Graph  => {
  const graph: Graph = {
    label: 'Procedencia',
    labels: [],
    values: [],
    colors: [],
  };

  const countMap: Map<string, number> = new Map();
  const uniqueNames: Set<string> = new Set();

  listReport.forEach((element) => {
    const name = element.conSegmentacion;
    uniqueNames.add(name);
    countMap.set(name, (countMap.get(name) || 0) + 1);
  });

  uniqueNames.forEach((name) => {
    graph.labels.push(name);
    graph.values.push(countMap.get(name) || 0);
    graph.colors.push(generateRandomColor());
  });

  return graph;
};


export const getGraphByCanal = (listReport: Report[]): Graph  => {
  const graph: Graph = {
    label: 'Canal',
    labels: [],
    values: [],
    colors: [],
  };

  const countMap: Map<string, number> = new Map();
  const uniqueNames: Set<string> = new Set();

  listReport.forEach((element) => {
    const name = element.conNomCanal;
    uniqueNames.add(name);
    countMap.set(name, (countMap.get(name) || 0) + 1);
  });

  uniqueNames.forEach((name) => {
    graph.labels.push(name);
    graph.values.push(countMap.get(name) || 0);
    graph.colors.push(generateRandomColor());
  });
  return graph;
};

export const getGraphByMedio = (listReport: Report[]): Graph  => {
  const graph: Graph = {
    label: 'Medio',
    labels: [],
    values: [],
    colors: [],
  };

  const countMap: Map<string, number> = new Map();
  const uniqueNames: Set<string> = new Set();

  listReport.forEach((element) => {
    const name = element.conNomMedio;
    uniqueNames.add(name);
    countMap.set(name, (countMap.get(name) || 0) + 1);
  });

  uniqueNames.forEach((name) => {
    graph.labels.push(name);
    graph.values.push(countMap.get(name) || 0);
    graph.colors.push(generateRandomColor());
  });
  return graph;
};


export const getGraphDataBar = (graphData: Graph): ChartConfiguration<'bar'>['data'] => {  
  return {
    labels: graphData?.labels ?? [],
    datasets: [
      {
        label: graphData?.label,
        data: graphData?.values ?? [],
        backgroundColor: graphData?.colors ?? [],
        borderWidth: 1,
      }
    ]
  };
}

export const getChartGraphValues = (graphData: Graph): ChartGraphValues => {
  return {
    chartLabels: graphData.labels || [],
    chartDatasets: [
      {
        data: graphData.values,
        label: graphData.label,
        backgroundColor: graphData.colors || [],
      }
    ]
  };
}

