import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../../../camunda-rest.service';
import { CompleteTaskComponent } from '../../../general/complete-task.component';
import { Preventivo } from '../../../../schemas/Preventivo';

@Component({
  selector: 'notificaSalvataggio',
  templateUrl: './notificaSalvataggio.component.html',
  styleUrls: ['./notificaSalvataggio.component.css']
})
export class notificaSalvataggioComponent extends CompleteTaskComponent {
  submitted:boolean = false;
  model = new Preventivo('','','','','');

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
