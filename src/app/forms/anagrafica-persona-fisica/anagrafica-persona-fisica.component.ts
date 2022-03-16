import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../camunda-rest.service';
import { CompleteTaskComponent } from '../general/complete-task.component';
import { DatiAnagrafica } from '../../schemas/DatiAnagrafica';

@Component({
  selector: 'anagrafica',
  templateUrl: './anagrafica-persona-fisica.component.html',
  styleUrls: ['./anagrafica-persona-fisica.component.css']
})
export class anagraficaPersonaFisicaComponent extends CompleteTaskComponent {
  submitted:boolean = false;
  model = new DatiAnagrafica('','','','',null,null,'','','','','');

  constructor(route: ActivatedRoute,
              router: Router,
              camundaRestService: CamundaRestService) {
    super(route, router, camundaRestService);
    this.route.params.subscribe(params => {
      const taskId = params['id'];
      const variableNames = Object.keys(this.model).join(',');
      this.loadExistingVariables(taskId, variableNames);
    });
  }
 
  
}
