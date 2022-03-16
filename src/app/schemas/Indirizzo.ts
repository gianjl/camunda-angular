export class Indirizzo {

  constructor(
    public codiceCliente: string,
    public indirizzo: string,
    public civico: string,
    public comune: string,
    public provincia: string,
    public presso: string,
    public cap: number,
    public frazione: string,
    public nazione: string,
    public note: string,
    public regione: string,
    public statoNormalizzazione: string,
    public latitudine: number,
    public longitudine: number
  ) {  }

}
