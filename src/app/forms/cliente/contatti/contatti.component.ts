import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../../camunda-rest.service';
import { CompleteTaskComponent } from '../../general/complete-task.component';
import { Contatti } from "../../../schemas/Contatti";

@Component({
  selector: 'contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class contattiComponent extends CompleteTaskComponent {
  submitted:boolean = false;
  model = new Contatti('','','','','','',null,null,'','',null,null,'',null,null);

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

  setPreferenzaContatti(): void {
    if(this.model.flagContattoVolutoCellulare) {
        
        this.model.flagContattoVolutoEmail = false;
    }
    if(this.model.flagContattoVolutoEmail) {
        this.model.flagContattoVolutoCellulare = false;

    }
  }

}