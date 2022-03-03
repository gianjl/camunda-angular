export class DatiAnagrafica {

  constructor(
    public codiceCliente: string,
    public nome: string,
    public cognome: string,
    public codiceFiscale: string,
    public numeroFigli: number,
    public dataNascita: Date,
    public sesso: string,
    public luogoNascita: string,
    public provinciaNascita: string,
    public statoCivile: string,
    public titoloStudio: string,
  ) {  }

}
