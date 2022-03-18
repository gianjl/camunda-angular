import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../../../camunda-rest.service';
import { CompleteTaskComponent } from '../../../general/complete-task.component';
import { DatiAnagrafica } from '../../../../schemas/DatiAnagrafica';

@Component({
  selector: 'visualizzaAccordo',
  templateUrl: './visualizzaAccordo.component.html',
  styleUrls: ['./visualizzaAccordo.component.css']
})
export class visualizzaAccordoComponent extends CompleteTaskComponent {
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