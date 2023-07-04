export interface Report {
    id:                         number;
    conNomEtapa:                string;
    conNomMarca:                string;
    conEmpresa:                 number;
    conNomEmpresa:              string;
    conCodAlmacen:              string;
    conNomAlmacen:              string;
    conNomCiudad:               string;
    conUsuario:                 number;
    conNomAsesor:               string;
    conNomCanal:                string;
    conNomMedio:                string;
    conNomCalidad:              string;
    conNomCampana:              string;
    conNomTipocontacto:         string;
    conPeriodo:                 number;
    conMes:                     number;
    conDia:                     number;
    conEstContactado:           number;
    conEstDesistido:            number;
    conCodLeadgenId:            string;
    conCantidad:                number;
    conPAgeDh:                  number;
    conPAgeFh:                  number;
    conInversion:               number;
    conCosto:                   number;
    conNomCatVehiculo:          string;
    fecdesdeCampania:           Date | null;
    fechastaCampania:           Date | null;
    conSegmentacion:            string;
    conSubsegmentacion:         string;
    conFecha:                   Date;
    conPlataforma:              string;
    conRazonDesistido:          string;
    conNomEstadoContactado:     string;
    conCliente:                 string;
    conCliCedula:               string;
    conCliDireccion:            string;
    conCliMail:                 string;
    conCliTelefono:             string;
    conCiudadCliente:           null;
    conDireccionContacto:       null;
    conMailContacto:            string;
    conTelefonoCelularContacto: string;
    conNombresContacto:         string;
    modeloVersionInteres:       string;
    conNomPermisoUsuario:       string;
    conPeriodoMesCierre:        null;
    conMesCierre:               null;
    conPeriodoCierre:           null;
    conNomMesCierre:            null;
    conPeriodoReporteCierre:    number;
    conMesReporteCierre:        number;
    conCantidadSugerida:        number;
    conEstadoCierre:            number;
    conNombreEstadoCierre:      string;
    conVisitaShowroom:          string;
    conNomPlatfIng:             string;
    calificado:                 string;
    conEstadoRegTestDrive:      string;
}

export class ConvertListReport {
    public static toListReport(json: string): Report[] {
        return JSON.parse(json);
    }

    public static listReportToJson(value: Report[]): string {
        return JSON.stringify(value);
    }
}

