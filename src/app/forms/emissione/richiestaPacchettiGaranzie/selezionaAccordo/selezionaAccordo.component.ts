import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../../../camunda-rest.service';
import { CompleteTaskComponent } from '../../../general/complete-task.component';
import { Accordo } from '../../../../schemas/Accordo';
import { ACCORDI } from '../../../../mocks/MockAccordi';


@Component({
  selector: 'selezionaAccordo',
  templateUrl: './selezionaAccordo.component.html',
  styleUrls: ['./selezionaAccordo.component.css']
})
export class selezionaAccordoComponent extends CompleteTaskComponent implements OnInit{
  submitted:boolean = false;
  model: Accordo = new Accordo('','','');
  accordi:Accordo[];

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

  ngOnInit(): void {
    this.getAccordi();
  }

  onSelect(accordo: Accordo): void {
    this.model=accordo;
  }
  
  getAccordi():void{
    this.accordi=ACCORDI;
  }
}
