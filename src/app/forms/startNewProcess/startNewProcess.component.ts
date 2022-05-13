import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  model = new DatiAnagrafica('', '', '', '', null, null, '', '', '', '', '');

  refresh() {
    window.location.reload();
  }

  constructor(route: ActivatedRoute,
    camundaRestService: CamundaRestService,) {
    super(route, camundaRestService);
  }

}
