import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../../../camunda-rest.service';
import { CompleteTaskComponent } from '../../../general/complete-task.component';
import { DatiAnagrafica } from '../../../../schemas/DatiAnagrafica';

@Component({
  selector: 'sceltaPacchetto',
  templateUrl: './sceltaPacchetto.component.html',
  styleUrls: ['./sceltaPacchetto.component.css']
})
export class sceltaPacchettoComponent extends CompleteTaskComponent {
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
