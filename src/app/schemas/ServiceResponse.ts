export class ServiceResponse {

  constructor(
    public codeResponse: number,
    public outputJson: string,
    public payload: string,
    public retryService: string,
    public codiceCliente: string,

  ) {  }

}
