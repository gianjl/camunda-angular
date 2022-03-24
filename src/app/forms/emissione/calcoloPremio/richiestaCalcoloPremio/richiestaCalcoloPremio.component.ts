import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../../../camunda-rest.service';
import { CompleteTaskComponent } from '../../../general/complete-task.component';
import { InfoCliente } from '../../../../schemas/InfoCliente';

@Component({
  selector: 'richiestaCalcoloPremio',
  templateUrl: './richiestaCalcoloPremio.component.html',
  styleUrls: ['./richiestaCalcoloPremio.component.css']
})
export class richiestaCalcoloPremioComponent extends CompleteTaskComponent {
  submitted:boolean = false;
  comfirmPopUp:boolean = false;
  model = new InfoCliente('','','','','','','','','',[],null);

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

  openPopup(): void{
    this.comfirmPopUp = true;
  }
}
