import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../../camunda-rest.service';
import { CompleteTaskComponent } from '../../general/complete-task.component';
import { Consensi } from '../../../schemas/Consensi';


@Component({
  selector: 'consensi',
  templateUrl: './consensi.component.html',
  styleUrls: ['./consensi.component.css']
})
export class consensiComponent extends CompleteTaskComponent implements OnInit {
  submitted:boolean = false;
  model = new Consensi('','', '','',null);
 

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
  
  ngOnInit(){
	
  }
 
  
}