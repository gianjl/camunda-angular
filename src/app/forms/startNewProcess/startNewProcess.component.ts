import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../camunda-rest.service';
import { StartProcessInstanceComponent } from '../general/start-process-instance.component';
import { DatiAnagrafica } from '../../schemas/DatiAnagrafica';

@Component({
  selector: 'startNewProcess',
  templateUrl: './startNewProcess.component.html',
  styleUrls: ['./startNewProcess.component.css']
})
export class startNewProcessComponent extends StartProcessInstanceComponent {
  submitted: boolean = false;
  router: Router;
  model = new DatiAnagrafica('', '', '', '', null, null, '', '', '', '', '');

  constructor(route: ActivatedRoute,
    camundaRestService: CamundaRestService,) {
    super(route, camundaRestService);
  }

}
