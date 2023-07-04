import { Graph } from '../interfaces/graph';
import { Report } from '../models/report.class';
import { generateRandomColor } from './colors-methods';


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
    label: 'Segmentación',
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
