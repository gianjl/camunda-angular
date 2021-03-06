import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UserComponent } from './authentication/user/user.component';

import { HomeComponent } from './home/home.component';
import { ProcesslistComponent } from './processlist/processlist.component';
import { StartProcessComponent } from './start-process/start-process.component'
import { TasklistComponent } from './tasklist/tasklist.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard]  },
  { path: 'processlist', component: ProcesslistComponent, canActivate: [AuthGuard] },
  { path: 'startprocess/:processdefinitionkey', component: StartProcessComponent, canActivate: [AuthGuard]  },
  { path: 'tasklist', component: TasklistComponent, canActivate: [AuthGuard]  },
  { path: 'tasklist/:id', component: TasklistComponent, canActivate: [AuthGuard]  },
  { path: '**', redirectTo: 'user', canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
