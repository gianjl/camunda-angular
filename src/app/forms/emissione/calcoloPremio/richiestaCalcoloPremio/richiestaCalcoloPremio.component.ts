import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../../../camunda-rest.service';
import { CompleteTaskComponent } from '../../../general/complete-task.component';
import { RichiestaCalcoloPremio } from '../../../../schemas/RichiestaCalcoloPremio';
import { Pacchetto } from '../../../../schemas/Pacchetto';

@Component({
  selector: 'richiestaCalcoloPremio',
  templateUrl: './richiestaCalcoloPremio.component.html',
  styleUrls: ['./richiestaCalcoloPremio.component.css']
})
export class richiestaCalcoloPremioComponent extends CompleteTaskComponent {
  submitted:boolean = false;
  //model = new RichiestaCalcoloPremio('','','','','','','','','');
  model = new RichiestaCalcoloPremio('','','','','','','','','');

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
  /*open(): void{
    this.model.overlay.style.display = 'block';
    popup.style.display = 'block';
  }
  funPop():void{

  }*/
}
