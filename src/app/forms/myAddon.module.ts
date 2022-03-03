import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { startNewProcessComponent } from './startNewProcess/startNewProcess.component';
import { approveDataTaskComponent } from './myprocess/approveDataTask.component';
import { anagraficaComponent } from './anagrafica/anagrafica.component';
import { codiceClienteComponent } from './codiceCliente/codiceCliente.component';
import { consensiComponent } from './consensi/consensi.component';
import { indirizzoComponent } from './indirizzo/indirizzo.component';
import { responseComponent } from './response/response.component';


@NgModule({
  entryComponents: [startNewProcessComponent,approveDataTaskComponent,anagraficaComponent,codiceClienteComponent,consensiComponent,indirizzoComponent,responseComponent],
  declarations: [startNewProcessComponent,approveDataTaskComponent,anagraficaComponent,codiceClienteComponent,consensiComponent,indirizzoComponent,responseComponent],
  imports: [FormsModule],
  exports: [startNewProcessComponent,approveDataTaskComponent,anagraficaComponent,codiceClienteComponent,consensiComponent,indirizzoComponent,responseComponent]
})
export class MyAddonModule {}

export { startNewProcessComponent } from './startNewProcess/startNewProcess.component';
export { approveDataTaskComponent } from './myprocess/approveDataTask.component';
export { anagraficaComponent } from './anagrafica/anagrafica.component';
export { codiceClienteComponent } from './codiceCliente/codiceCliente.component';
export { consensiComponent } from './consensi/consensi.component';
export { indirizzoComponent } from './indirizzo/indirizzo.component';
export { responseComponent } from './response/response.component';