export class Contatti {

    constructor(
        public telefonoPrincipale: string,
        public telefonoSecondario: string,
        public fax: string,
        public telefonoPortatile: string,
        public email: string,
        public sitoInternet: string,
        public flagContattoVolutoCellulare: boolean,
        public flagContattoVolutoEmail: boolean,
        public note: string,
        public idContatto: string,
        public codiceTipoContatto: number,
        public codiceUsoContatto: number,
        public contatto: string,
        public codiceStatoValidazione: number,
        public dataValidazione: Date
    ) {  }
  
  }