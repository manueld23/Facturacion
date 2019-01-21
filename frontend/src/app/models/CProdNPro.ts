export class CProdNPro {
 constructor(id = 0, idCProdNPro = 0, CPNPdPro = '', CPNPdUni = '', CPNPserv = '', CPNPcUni = '',
     CPNPdesc = '', CPNPvUni = 0, CPNPnIden = 0, CPNPunidad = '' /*, createdAt = '', updatedAt = ''*/) {

     this.id = id;
     this.idCProdNPro = idCProdNPro;
     this.CPNPdPro = CPNPdPro;
     this.CPNPdUni = CPNPdUni;
     this.CPNPserv = CPNPserv;
     this.CPNPcUni = CPNPcUni;
     this.CPNPdesc = CPNPdesc;
     this.CPNPvUni = CPNPvUni;
     this.CPNPnIden = CPNPnIden;
     this.CPNPunidad = CPNPunidad;
     /*this.createdAt = createdAt;
       this.updatedAt = updatedAt;*/
    }
     id: number;
     idCProdNPro: number;
     CPNPdPro: string;
     CPNPdUni: string;
     CPNPserv: string;
     CPNPcUni: string;
     CPNPdesc: string;
     CPNPvUni: number;
     CPNPnIden: number;
     CPNPunidad: string;
     /*createdAt: string;
     updatedAt: string;*/
}