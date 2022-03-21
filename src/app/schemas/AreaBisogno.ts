import { Oggetto } from "./Oggetto";

export class AreaBisogno {
  public oggetti: Oggetto[]
  constructor(
    public id: string,
    public nome: string,
  ) {
    this.oggetti = [];
   }

   getOggettoById(id: string): any{
    return this.oggetti.filter(oggetto => oggetto.id == id)[0];
   }

}