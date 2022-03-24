import { Garanzia } from "./Garanzia";

export class Pacchetto {
  public garanzie: Garanzia[];

    constructor(
      public idPacchetto: string,
      public nomePacchetto: string,
      public infoPacchetto: string
    ) { 
      this.garanzie = [];
     }
  
  }