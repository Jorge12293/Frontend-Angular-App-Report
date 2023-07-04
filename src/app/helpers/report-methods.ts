import { Report } from "../models/report.class";
import { ItemCheck } from 'src/app/interfaces/item-check';


export const getListNameCompaniesUnique = (listReport: Report[]): ItemCheck[] => {
    const uniqueCompaniesMap: Map<string, ItemCheck> = new Map();
    let idCounter = 1;  
    listReport.forEach((element) => {
      const name = element.conNomEmpresa;
      if (!uniqueCompaniesMap.has(name)) {
        uniqueCompaniesMap.set(name, {
          id: idCounter,
          name,
          checked: false
        });
        idCounter++;
      }
    });  
    return Array.from(uniqueCompaniesMap.values());
};

export const getListNameCitiesUnique = (listReport: Report[]): ItemCheck[] => {
  const uniqueCompaniesMap: Map<string, ItemCheck> = new Map();
  let idCounter = 1;  
  listReport.forEach((element) => {
    const name = element.conNomCiudad;
    if (!uniqueCompaniesMap.has(name)) {
      uniqueCompaniesMap.set(name, {
        id: idCounter,
        name,
        checked: false
      });
      idCounter++;
    }
  });  
  return Array.from(uniqueCompaniesMap.values());
};

export const getListNameCatCarUnique = (listReport: Report[]): ItemCheck[] => {
  const uniqueCompaniesMap: Map<string, ItemCheck> = new Map();
  let idCounter = 1;  
  listReport.forEach((element) => {
    const name = element.conNomCatVehiculo;
    if (!uniqueCompaniesMap.has(name)) {
      uniqueCompaniesMap.set(name, {
        id: idCounter,
        name,
        checked: false
      });
      idCounter++;
    }
  });  
  return Array.from(uniqueCompaniesMap.values());
};



