import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { startNewProcessComponent } from './startNewProcess/startNewProcess.component';
import { anagraficaPersonaFisicaComponent } from './anagrafica-persona-fisica/anagrafica-persona-fisica.component';
import { codiceClienteComponent } from './codiceCliente/codiceCliente.component';
import { consensiComponent } from './consensi/consensi.component';
import { indirizzoComponent } from './indirizzo/indirizzo.component';
import { responseComponent } from './response/response.component';
import { contattiComponent } from './contatti/contatti.component';


@NgModule({
  entryComponents: [startNewProcessComponent,anagraficaPersonaFisicaComponent,codiceClienteComponent,consensiComponent,indirizzoComponent,responseComponent, contattiComponent],
  declarations: [startNewProcessComponent,anagraficaPersonaFisicaComponent,codiceClienteComponent,consensiComponent,indirizzoComponent,responseComponent, contattiComponent],
  imports: [FormsModule],
  exports: [startNewProcessComponent,anagraficaPersonaFisicaComponent,codiceClienteComponent,consensiComponent,indirizzoComponent,responseComponent, contattiComponent]
})
export class MyAddonModule {}

export { startNewProcessComponent } from './startNewProcess/startNewProcess.component';
export { anagraficaPersonaFisicaComponent } from './anagrafica-persona-fisica/anagrafica-persona-fisica.component';
export { codiceClienteComponent } from './codiceCliente/codiceCliente.component';
export { consensiComponent } from './consensi/consensi.component';
export { indirizzoComponent } from './indirizzo/indirizzo.component';
export { responseComponent } from './response/response.component';
export { contattiComponent } from './contatti/contatti.component';