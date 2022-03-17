import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { startNewProcessComponent } from './startNewProcess/startNewProcess.component';
import { anagraficaPersonaFisicaComponent } from './cliente/anagrafica-persona-fisica/anagrafica-persona-fisica.component';
import { codiceClienteComponent } from './codiceCliente/codiceCliente.component';
import { consensiComponent } from './cliente/consensi/consensi.component';
import { indirizzoComponent } from './cliente/indirizzo/indirizzo.component';
import { responseComponent } from './response/response.component';
import { contattiComponent } from './cliente/contatti/contatti.component';
import { inserimentoInfoClienteComponent } from './emissione/calcoloPremio/inserimentoInfoCliente/inserimentoInfoCliente.component';
import { compilazioneVariabiliComponent } from './emissione/calcoloPremio/compilazioneVariabili/compilazioneVariabili.component';
import { richiestaCalcoloPremioComponent } from './emissione/calcoloPremio/richiestaCalcoloPremio/richiestaCalcoloPremio.component';
import { sceltaPacchettoComponent } from './emissione/calcoloPremio/sceltaPacchetto/sceltaPacchetto.component';
import { visualizzazionePremioComponent } from './emissione/calcoloPremio/visualizzazionePremio/visualizzazionePremio.component';
import { autenticazioneComponent } from './emissione/richiestaAccordo/autenticazioneEnte/autenticazione.component';
import { visualizzaAccordoComponent } from './emissione/richiestaAccordo/visualizzazioneAccordoCommerciale/visualizzaAccordo.component';
import { restituzionePacchettiGaranzieComponent } from './emissione/richiestaPacchettiGaranzie/restituzionePacchettiGaranzie/restituzionePacchettiGaranzie.component';
import { sceltaAreaOggettiComponent } from './emissione/richiestaPacchettiGaranzie/sceltaAreaOggetti/sceltaAreaOggetti.component';
import { selezionaAccordoComponent } from './emissione/richiestaPacchettiGaranzie/selezionaAccordoCommerciale/selezionaAccordo.component';
import { visualizzaAreaOggettiComponent } from './emissione/richiestaPacchettiGaranzie/visualizzaAreaOggetti/visualizzaAreaOggetti.component';
import { notificaSalvataggioComponent } from './emissione/salvataggioEmissione/notificaSalvataggio/notificaSalvataggio.component';
import { richiestaSalvataggioComponent } from './emissione/salvataggioEmissione/richiestaSalvataggio/richiestaSalvataggio.component';


@NgModule({
  entryComponents: [startNewProcessComponent,anagraficaPersonaFisicaComponent,codiceClienteComponent,consensiComponent,indirizzoComponent,responseComponent, contattiComponent,compilazioneVariabiliComponent,inserimentoInfoClienteComponent,richiestaCalcoloPremioComponent,sceltaPacchettoComponent,visualizzazionePremioComponent,autenticazioneComponent,visualizzaAccordoComponent,restituzionePacchettiGaranzieComponent,sceltaAreaOggettiComponent,selezionaAccordoComponent,visualizzaAreaOggettiComponent,notificaSalvataggioComponent,richiestaSalvataggioComponent],
  declarations: [startNewProcessComponent,anagraficaPersonaFisicaComponent,codiceClienteComponent,consensiComponent,indirizzoComponent,responseComponent, contattiComponent,compilazioneVariabiliComponent,inserimentoInfoClienteComponent,richiestaCalcoloPremioComponent,sceltaPacchettoComponent,visualizzazionePremioComponent,autenticazioneComponent,visualizzaAccordoComponent,restituzionePacchettiGaranzieComponent,sceltaAreaOggettiComponent,selezionaAccordoComponent,visualizzaAreaOggettiComponent,notificaSalvataggioComponent,richiestaSalvataggioComponent],
  imports: [FormsModule],
  exports: [startNewProcessComponent,anagraficaPersonaFisicaComponent,codiceClienteComponent,consensiComponent,indirizzoComponent,responseComponent, contattiComponent,compilazioneVariabiliComponent,inserimentoInfoClienteComponent,richiestaCalcoloPremioComponent,sceltaPacchettoComponent,visualizzazionePremioComponent,autenticazioneComponent,visualizzaAccordoComponent,restituzionePacchettiGaranzieComponent,sceltaAreaOggettiComponent,selezionaAccordoComponent,visualizzaAreaOggettiComponent,notificaSalvataggioComponent,richiestaSalvataggioComponent]
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
export { compilazioneVariabiliComponent } from './emissione/calcoloPremio/compilazioneVariabili/compilazioneVariabili.component';
export { richiestaCalcoloPremioComponent } from './emissione/calcoloPremio/richiestaCalcoloPremio/richiestaCalcoloPremio.component';
export { sceltaPacchettoComponent } from './emissione/calcoloPremio/sceltaPacchetto/sceltaPacchetto.component';
export { visualizzazionePremioComponent } from './emissione/calcoloPremio/visualizzazionePremio/visualizzazionePremio.component';
export { autenticazioneComponent } from './emissione/richiestaAccordo/autenticazioneEnte/autenticazione.component';
export { visualizzaAccordoComponent } from './emissione/richiestaAccordo/visualizzazioneAccordoCommerciale/visualizzaAccordo.component';
export { restituzionePacchettiGaranzieComponent } from './emissione/richiestaPacchettiGaranzie/restituzionePacchettiGaranzie/restituzionePacchettiGaranzie.component';
export { sceltaAreaOggettiComponent } from './emissione/richiestaPacchettiGaranzie/sceltaAreaOggetti/sceltaAreaOggetti.component';
export { selezionaAccordoComponent } from './emissione/richiestaPacchettiGaranzie/selezionaAccordoCommerciale/selezionaAccordo.component';
export { visualizzaAreaOggettiComponent } from './emissione/richiestaPacchettiGaranzie/visualizzaAreaOggetti/visualizzaAreaOggetti.component';
export { notificaSalvataggioComponent } from './emissione/salvataggioEmissione/notificaSalvataggio/notificaSalvataggio.component';
export { richiestaSalvataggioComponent } from './emissione/salvataggioEmissione/richiestaSalvataggio/richiestaSalvataggio.component';