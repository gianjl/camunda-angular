import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { startNewProcessComponent } from './startNewProcess/startNewProcess.component';
import { anagraficaPersonaFisicaComponent } from './cliente/anagrafica-persona-fisica/anagrafica-persona-fisica.component';
import { codiceClienteComponent } from './codiceCliente/codiceCliente.component';
import { consensiComponent } from './cliente/consensi/consensi.component';
import { indirizzoComponent } from './cliente/indirizzo/indirizzo.component';
import { responseComponent } from './response/response.component';
import { contattiComponent } from './cliente/contatti/contatti.component';
import { inserimentoInfoClienteComponent } from './emissione/calcoloPremio/inserimentoInfoCliente/inserimentoInfoCliente.component';
import { richiestaCalcoloPremioComponent } from './emissione/calcoloPremio/richiestaCalcoloPremio/richiestaCalcoloPremio.component';
import { sceltaPacchettoComponent } from './emissione/calcoloPremio/sceltaPacchetto/sceltaPacchetto.component';
import { visualizzaPremioComponent } from './emissione/calcoloPremio/visualizzaPremio/visualizzaPremio.component';
import { sceltaAreaOggettiComponent } from './emissione/richiestaPacchettiGaranzie/sceltaAreaOggetti/sceltaAreaOggetti.component';
import { selezionaAccordoComponent } from './emissione/richiestaPacchettiGaranzie/selezionaAccordo/selezionaAccordo.component';
import { notificaSalvataggioComponent } from './emissione/salvataggioEmissione/notificaSalvataggio/notificaSalvataggio.component';
import { richiestaSalvataggioComponent } from './emissione/salvataggioEmissione/richiestaSalvataggio/richiestaSalvataggio.component';


@NgModule({
  entryComponents: [startNewProcessComponent,anagraficaPersonaFisicaComponent,codiceClienteComponent,consensiComponent,indirizzoComponent,responseComponent, contattiComponent,inserimentoInfoClienteComponent,richiestaCalcoloPremioComponent,sceltaPacchettoComponent,visualizzaPremioComponent,sceltaAreaOggettiComponent,selezionaAccordoComponent,notificaSalvataggioComponent,richiestaSalvataggioComponent],
  declarations: [startNewProcessComponent,anagraficaPersonaFisicaComponent,codiceClienteComponent,consensiComponent,indirizzoComponent,responseComponent, contattiComponent,inserimentoInfoClienteComponent,richiestaCalcoloPremioComponent,sceltaPacchettoComponent,visualizzaPremioComponent,sceltaAreaOggettiComponent,selezionaAccordoComponent,notificaSalvataggioComponent,richiestaSalvataggioComponent],
  imports: [FormsModule, CommonModule],
  exports: [startNewProcessComponent,anagraficaPersonaFisicaComponent,codiceClienteComponent,consensiComponent,indirizzoComponent,responseComponent, contattiComponent,inserimentoInfoClienteComponent,richiestaCalcoloPremioComponent,sceltaPacchettoComponent,visualizzaPremioComponent,sceltaAreaOggettiComponent,selezionaAccordoComponent,notificaSalvataggioComponent,richiestaSalvataggioComponent]
})
export class MyAddonModule {}

export { startNewProcessComponent } from './startNewProcess/startNewProcess.component';
export { anagraficaPersonaFisicaComponent } from './cliente/anagrafica-persona-fisica/anagrafica-persona-fisica.component';
export { codiceClienteComponent } from './codiceCliente/codiceCliente.component';
export { consensiComponent } from './cliente/consensi/consensi.component';
export { indirizzoComponent } from './cliente/indirizzo/indirizzo.component';
export { responseComponent } from './response/response.component';
export { contattiComponent } from './cliente/contatti/contatti.component';
export { inserimentoInfoClienteComponent } from './emissione/calcoloPremio/inserimentoInfoCliente/inserimentoInfoCliente.component';
export { richiestaCalcoloPremioComponent } from './emissione/calcoloPremio/richiestaCalcoloPremio/richiestaCalcoloPremio.component';
export { sceltaPacchettoComponent } from './emissione/calcoloPremio/sceltaPacchetto/sceltaPacchetto.component';
export { visualizzaPremioComponent } from './emissione/calcoloPremio/visualizzaPremio/visualizzaPremio.component';
export { sceltaAreaOggettiComponent } from './emissione/richiestaPacchettiGaranzie/sceltaAreaOggetti/sceltaAreaOggetti.component';
export { selezionaAccordoComponent } from './emissione/richiestaPacchettiGaranzie/selezionaAccordo/selezionaAccordo.component';
export { notificaSalvataggioComponent } from './emissione/salvataggioEmissione/notificaSalvataggio/notificaSalvataggio.component';
export { richiestaSalvataggioComponent } from './emissione/salvataggioEmissione/richiestaSalvataggio/richiestaSalvataggio.component';