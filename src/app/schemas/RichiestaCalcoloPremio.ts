export class RichiestaCalcoloPremio {
    
    constructor(
      public codiceCliente: string,
      public nomeCliente: string,
      public cognomeCliente: string,
      public codiceFiscaleCliente: string,
      public partitaIvaCliente: string,
      //public pacchetto: [string, string, string],
      public id: string,
      public nome: string,
      public informazioni: string,
      public metodoPagamentoCliente: string
    ) {  }
  
  }
  