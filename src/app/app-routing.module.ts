import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { EmissioneComponent } from './emissioneProcess/emissione.component';

import { HomeComponent } from './home/home.component';
import { ProcessInstanceListComponent } from './processinstancelist/processinstancelist.component';
import { ProcesslistComponent } from './processlist/processlist.component';
import { StartProcessComponent } from './start-process/start-process.component'
import { TasklistComponent } from './tasklist/tasklist.component';


const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'processlist', component: ProcesslistComponent },
  { path: 'startprocess/:processdefinitionkey', component: StartProcessComponent },
  { path: 'tasklist', component: TasklistComponent },
  { path: 'tasklist/:id', component: TasklistComponent },
  { path: 'processinstancelist', component: ProcessInstanceListComponent},
  { path: 'processinstancelist/:id', component: ProcessInstanceListComponent },
  { path: 'emissione', component: EmissioneComponent },
  { path: 'emissione/:id', component: EmissioneComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
