import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../../../camunda-rest.service';
import { CompleteTaskComponent } from '../../../general/complete-task.component';
import { AreaBisogno } from '../../../../schemas/AreaBisogno';
import { Oggetto } from '../../../../schemas/Oggetto';

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
  private areeBisogno;

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
    this.getAreeBisogno();
    this.areaSelezionata = new AreaBisogno(this.areaId, '');
  }

  getAreeBisogno(): void {
    this.areeBisogno = [new AreaBisogno('famiglia', 'Area Famiglia'),new AreaBisogno('auto', 'Area Auto'),new AreaBisogno('sci', 'Area Sci')];
  }

  popolaOggettiSelezionabili(): void {
    this.areaSelezionata = new AreaBisogno(this.areaId, '');
    if(this.areaId == ''){
      this.model = new Oggetto('','','','');
      this.oggettoId = '';
    }
    if(this.areaId == 'famiglia'){
      this.areaSelezionata.oggetti.push(new Oggetto('vita', 'Assicurazione Vita', 'aaaaaaaaaaaaaa', this.areaId));
      this.areaSelezionata.oggetti.push(new Oggetto('casa', 'Assicurazione Immobile', 'aaaaaaaaaaaaaa', this.areaId));
    }
    if(this.areaId == 'auto'){
      this.areaSelezionata.oggetti.push(new Oggetto('rca', 'Assicurazione RCA', 'aaaaaaaaaaaaaa', this.areaId));
      this.areaSelezionata.oggetti.push(new Oggetto('furtoIncendio', 'Assicurazione Furto-Incendio', 'aaaaaaaaaaaaaa', this.areaId));
      this.areaSelezionata.oggetti.push(new Oggetto('kasko', 'Assicurazione Kasko', 'aaaaaaaaaaaaaa', this.areaId));
      this.areaSelezionata.oggetti.push(new Oggetto('ambientali', 'Assicurazione Danni Ambientali', 'aaaaaaaaaaaaaa', this.areaId));
    }
    if(this.areaId == 'sci'){
      this.areaSelezionata.oggetti.push(new Oggetto('sci', 'Assicurazione Neve', 'aaaaaaaaaaaaaa', this.areaId));
    }
  }

  selezionaOggetto(): void {
    this.model = this.areaSelezionata.getOggettoById(this.oggettoId);
  }

}
