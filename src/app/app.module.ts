import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    ProcesslistComponent,
    TasklistComponent,
    HomeComponent,
    ProcessInstanceListComponent,
    StartProcessComponent,
    GenericForm
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
  providers: [CamundaRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
