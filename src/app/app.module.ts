import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CamundaRestService } from './camunda-rest.service';
import { ProcesslistComponent } from './processlist/processlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { HomeComponent } from './home/home.component';
import { StartProcessComponent } from './start-process/start-process.component';
import { GenericForm } from './generic-form.component';
import { MyAddonModule } from './forms/myAddon.module';
import { ProcessInstanceListComponent } from './processinstancelist/processinstancelist.component';

import { fakeBackendProvider } from './authentication/helpers/fake-backend';
import { AuthGuard } from './authentication/guards/auth.guard';
import { JwtInterceptor } from './authentication/helpers/jwt.interceptor';
import {  AuthenticationService } from './authentication/services/authentication.service';
import { UserService } from './authentication/services/user.service';
import { AlertService } from './authentication/services/alert.service';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcesslistComponent,
    TasklistComponent,
    HomeComponent,
    ProcessInstanceListComponent,
    StartProcessComponent,
    GenericForm,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SuiModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MyAddonModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    // provider used to create fake backend
    fakeBackendProvider,
    CamundaRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
