import { Oggetto } from "./Oggetto";

export class AreaBisogno {
  public oggetti: Oggetto[]
  constructor(
    public idArea: string,
    public nomeArea: string,
  ) {
    this.oggetti = [];
   }

   getOggettoById(id: string): any{
    return this.oggetti.filter(oggetto => oggetto.idOggetto == id)[0];
   }

}