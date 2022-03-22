import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../../../camunda-rest.service';
import { CompleteTaskComponent } from '../../../general/complete-task.component';
import { Pacchetto } from '../../../../schemas/Pacchetto';
import { GARANZIE } from '../../../../mocks/MockGaranzie';
import { Garanzia } from '../../../../schemas/Garanzia';
import { PACCHETTI } from '../../../../mocks/MockPacchetto';

@Component({
  selector: 'sceltaPacchetto',
  templateUrl: './sceltaPacchetto.component.html',
  styleUrls: ['./sceltaPacchetto.component.css']
})
export class sceltaPacchettoComponent extends CompleteTaskComponent implements OnInit {
  submitted: boolean = false;
  model = new Pacchetto('', '', '');
  sceltaPacchettoGaranzie: string = '';

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
    this.model.garanzie = [];
  }

  public setChoice(choice: string) {
    this.model = new Pacchetto('', '', '');;
    this.sceltaPacchettoGaranzie = choice;
  }

  public selectGaranzie(garanziaSel: Garanzia): void {
    if (this.model.garanzie.length == 0) {
      this.model.garanzie.push(garanziaSel);
    } else {
      if (this.model.garanzie.filter(garanzia => garanzia.id == garanziaSel.id).length == 0) {
        this.model.garanzie.push(garanziaSel);
      } else {
        if (this.model.garanzie.filter(garanzia => garanzia.id == garanziaSel.id).length > 0) {

          const index = this.model.garanzie.indexOf(garanziaSel, 0);
          if (index > -1) {
            this.model.garanzie.splice(index, 1);
          }
        }
      }
    }
    if (this.model.garanzie.length > 0) {
      this.model.id = 'custom';
    } else {
      this.model.id = '';
    }
  }

  public isGaranziaSelected(idGaranzia: string): boolean {
    if (this.model.garanzie.length > 0) {
      if (this.model.garanzie.filter(garanzia => garanzia.id == idGaranzia).length > 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  public getGaranzie(): any {
    return GARANZIE;
  }

  public getPacchetti(): any {
    return PACCHETTI;
  }

  setPacchettoSelezionato(pacchetto: Pacchetto): void {
    this.model = pacchetto;
  }

}
