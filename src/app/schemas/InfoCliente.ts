import { Garanzia } from "./Garanzia";

export class InfoCliente {
    
    constructor(
      public codiceCliente: string,
      public nomeCliente: string,
      public cognomeCliente: string,
      public codiceFiscaleCliente: string,
      public partitaIvaCliente: string,
      public metodoPagamentoCliente: string,
      public idPacchetto: string,
      public nomePacchetto: string,
      public infoPacchetto: string,
      public garanzie: Garanzia[],
      public premio: number
    ) {  }
  
  }
  