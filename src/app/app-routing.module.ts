import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { anagraficaPersonaFisicaComponent, consensiComponent } from './forms/myAddon.module';

import { HomeComponent } from './home/home.component';
import { ProcessInstanceListComponent } from './processinstancelist/processinstancelist.component';
import { ProcesslistComponent } from './processlist/processlist.component';
import { StartProcessComponent } from './start-process/start-process.component'
import { TasklistComponent } from './tasklist/tasklist.component';


const routes: Routes = [
  { path: '', component: ProcesslistComponent },
  { path: 'home', component: HomeComponent },
  { path: 'processlist', component: ProcesslistComponent },
  { path: 'startprocess/:processdefinitionkey', component: StartProcessComponent },
  { path: 'tasklist', component: TasklistComponent },
  { path: 'processinstancelist', component: ProcessInstanceListComponent},
  { path: 'processinstancelist/:id', component: ProcessInstanceListComponent },
  { path: 'tasklist/:id', component: TasklistComponent },
  { path: 'tasklist/:id/anagrafica', component: anagraficaPersonaFisicaComponent },
  { path: 'tasklist/:id/consensi', component: consensiComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
