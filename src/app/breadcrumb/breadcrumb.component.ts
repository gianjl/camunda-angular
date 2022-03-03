import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'breadcrumb',
	templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
    
})

export class breadcrumbComponent implements OnInit {

	@Input() taskNames: String[];

	constructor() {}
	
	ngOnInit(): void {
		
	}
	
}