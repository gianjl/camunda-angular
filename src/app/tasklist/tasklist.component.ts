import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CamundaRestService } from '../camunda-rest.service';
import { ProcessInstance } from '../schemas/ProcessInstance';
import { Task } from '../schemas/Task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = [];
  trashbin: string = '../../assets/resources/recycle-bin.png'
  taskId: string;
  processInstanceId: string;
  formKey: String;
  processInstances: ProcessInstance[] = [];
  deletePopUp: boolean;
  taskToDel: string;


  constructor(
    private camundaRestService: CamundaRestService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getTasks();
    if (this.route.params != null) {
      this.route.params.subscribe(params => {
        if (params['id'] != null) {
          this.taskId = params['id'];
          this.getFormKey();
        } else {
          this.getTasks();
        }
      });
    }
  }

  refresh(): void {
    window.location.reload();
  }

  getFormKey(): void {
    this.camundaRestService
      .getTaskFormKey(this.taskId)
      .subscribe(formKey => this.formKey = formKey.key);
  }

  getTasks(): void {
    this.camundaRestService
      .getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(taskId: string): void{
    this.camundaRestService
      .deleteTask(taskId)
      .subscribe();
    this.refresh();
  }

  setTaskToDelete(taskId: string): void{
    this.taskId = '';
    this.deletePopUp = true;
    this.taskToDel = taskId;
  }

  deleteProcessInstance(pIId: string): void{
    const instructions = this.generateDeleteInstructions(pIId);
    this.camundaRestService
      .deleteProcessInstance(instructions)
      .subscribe();
    this.refresh();
  }

  generateDeleteInstructions(pIId: string) {
    const instructions = {
      "deleteReason" : "",
      "processInstanceIds": [pIId],
      "skipCustomListeners" : true,
      "skipSubprocesses" : true
      };
    return instructions;
  }

  setProcessInstanceToDelete(pIId: string): void{
    this.taskId = '';
    this.deletePopUp = true;
    this.processInstanceId = pIId;
  }

}
