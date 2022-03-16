import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../camunda-rest.service';
import { CompleteTaskComponent } from '../general/complete-task.component';
import { Documenti } from '../../schemas/Documenti';

@Component({
  selector: 'documenti',
  templateUrl: './documenti.component.html',
  styleUrls: ['./documenti.component.css']
})
export class documentiComponent extends CompleteTaskComponent {
  submitted:boolean = false;
  model = new Documenti('','','','',null,'','',null,null);

  constructor(route: ActivatedRoute,
              router: Router,
              camundaRestService: CamundaRestService) {
    super(route, router, camundaRestService);
    this.route.params.subscribe(params => {
      const taskId = params['id'];
      const variableNames = Object.keys(this.model).join(',');
      this.loadExistingVariables(taskId, 'variableNames');
    });
  }
}
