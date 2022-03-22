import { Garanzia } from "./Garanzia";

export class Pacchetto {
  public garanzie: Garanzia[];

    constructor(
      public id: string,
      public nome: string,
      public informazioni: string
    ) { 
      this.garanzie = [];
     }
  
  }