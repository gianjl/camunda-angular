import { Garanzia } from "./Garanzia";

export class Pacchetto {
  public action: string;

    public garanzie: Garanzia[]
    constructor(
      public idPacchetto: string,
      public nomePacchetto: string,
      public infoPacchetto: string,
    ) { 
      this.garanzie = [];
      this.action = '';
     }
  
  }