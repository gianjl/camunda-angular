import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamundaRestService } from '../camunda-rest.service';
import { Activity } from '../schemas/Activity';
import { ProcessInstance } from '../schemas/ProcessInstance';

@Component({
  selector: 'app-processinstancelist',
  templateUrl: './processinstancelist.component.html',
  styleUrls: ['./processinstancelist.component.css']
})
export class ProcessInstanceListComponent implements OnInit {
  processInstances: ProcessInstance [] = [];
  piid:String = null;
  mainActivity: Activity = new Activity();
  

  constructor(
    private camundaRestService: CamundaRestService,
    private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.getProcessInstances();
    if (this.route.params != null) {
      this.route.params.subscribe(params => {
        if (params['id'] != null) {
          this.piid = params['id'];
          this.getActivities(this.piid);
        } else {
          this.getProcessInstances();
        }
      });
    }
  }

  getProcessInstances(): void {
    this.camundaRestService
      .getProcessInstances()
      .subscribe(processInstances => this.processInstances = processInstances);
  }

  getActivities(piid): void {
    this.camundaRestService
      .getActivityInstances(piid)
      .subscribe(activity => this.mainActivity = activity);
  }
  
}
