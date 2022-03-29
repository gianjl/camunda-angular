export class Oggetto {
  public action: string
  constructor(
    public idOggetto: string,
    public nomeOggetto: string,
    public descrizioneOggetto: string,
    public areaBisogno: string,

  ) {
    this.action = '';
  }
}

