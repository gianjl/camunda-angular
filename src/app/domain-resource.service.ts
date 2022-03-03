import {Component, Injectable} from '@angular/core';
import { ServiceResponse } from './schemas/ServiceResponse';

@Injectable()
export class DomainResourceService {
  submitted:boolean = false;
  model = new ServiceResponse(null,'','','','');

  constructor() {

  }

  getDomainOptions(): JSON {
    let jsonObj = JSON.parse(this.model.outputJson);
    let jsonList = jsonObj.elements;
    return jsonList;
  }

	init() {
		let jsonObj = JSON.parse(this.model.outputJson);
		var ele = document.getElementById('sel');
        for (var i = 0; i < jsonObj.length; i++) {
            // POPULATE SELECT ELEMENT WITH JSON.
            ele.innerHTML = ele.innerHTML +
                '<option value="' + jsonObj[i]['ID'] + '">' + jsonObj[i]['Bird_Name'] + '</option>';
        }
    }

}
