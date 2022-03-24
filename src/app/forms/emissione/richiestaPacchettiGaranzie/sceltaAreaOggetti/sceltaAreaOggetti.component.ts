import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../../../camunda-rest.service';
import { CompleteTaskComponent } from '../../../general/complete-task.component';
import { AreaBisogno } from '../../../../schemas/AreaBisogno';
import { Oggetto } from '../../../../schemas/Oggetto';
import { AREE_BISOGNO } from '../../../../mocks/MockAreeBisogno';
import * as MockOggettiAssicurabili from '../../../../mocks/MockOggettiAssicurabili';

@Component({
  selector: 'sceltaAreaOggetti',
  templateUrl: './sceltaAreaOggetti.component.html',
  styleUrls: ['./sceltaAreaOggetti.component.css']
})
export class sceltaAreaOggettiComponent extends CompleteTaskComponent implements OnInit {
  submitted:boolean = false;
  model: Oggetto = new Oggetto('','','','');
  areaSelezionata: AreaBisogno;
  areaId: string = '';
  oggettoId: string = '';
  areeBisogno;
  goBack: boolean = false;
  task: string;

  constructor(route: ActivatedRoute,
              router: Router,
              camundaRestService: CamundaRestService) {
    super(route, router, camundaRestService);
    this.route.params.subscribe(params => {
      const taskId = params['id'];
      const variableNames = Object.keys(this.model).join(',').concat(',goBack,task');
      this.loadExistingVariables(taskId, variableNames);
    });
  }

  ngOnInit(): void {    
    this.getAreeBisogno();
    this.areaSelezionata = new AreaBisogno(this.areaId, '');
    this.goBack = false;
  }

  getAreeBisogno(): void {
    this.areeBisogno = AREE_BISOGNO;
  }

  popolaOggettiSelezionabili(): void {
    this.areaSelezionata = new AreaBisogno(this.areaId, '');
    if(this.areaId == ''){
      this.model = new Oggetto('','','','');
      this.oggettoId = '';
    }
    if(this.areaId == 'famiglia'){
      this.areaSelezionata.oggetti = MockOggettiAssicurabili.OGGETTI_FAM;
    }
    if(this.areaId == 'auto'){
      this.areaSelezionata.oggetti = MockOggettiAssicurabili.OGGETTI_AUTO;
    }
    if(this.areaId == 'sci'){
      this.areaSelezionata.oggetti = MockOggettiAssicurabili.OGGETTI_SCI;
    }
  }

  selezionaOggetto(): void {
    this.model = this.areaSelezionata.getOggettoById(this.oggettoId);
  }

  goTo(taskId: string): void{
    this.task = taskId;
    this.goBack = true;
  }

}
