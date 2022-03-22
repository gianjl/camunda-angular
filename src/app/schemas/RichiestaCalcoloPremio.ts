export class RichiestaCalcoloPremio {
    
    constructor(
      public codiceCliente: string,
      public nomeCliente: string,
      public cognomeCliente: string,
      public codiceFiscaleCliente: string,
      public partitaIvaCliente: string,
      public garanzie: string[],
      public metodoPagamentoCliente: string
    ) {  }
  
  }
  