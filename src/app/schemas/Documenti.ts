export class Documenti {

    constructor(
      public codiceCliente: string,
      public numBarcode: string,
      public tipoDocument: string,
      public luogoDiRilascio: string,
      public dataRilascio: Date,
      public numeroDocumento: string,
      public rilasciatoDa: string,
      public dataScadenza: Date,
      public percentualeRiconoscimento: number
    ) {  }
  
  }