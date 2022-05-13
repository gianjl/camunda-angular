import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CamundaRestService } from '../../camunda-rest.service';

import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit{
    model: any = {};
    loading = false;
    message: any;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private camundaRestService: CamundaRestService) { }

    ngOnInit(): void {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.camundaRestService.createUser(this.getCreateUserRequestBody()).subscribe();
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    getCreateUserRequestBody(){
        const body = {
            "profile":
                {"id": this.model.username,
                "firstName": this.model.firstName,
                "lastName": this.model.lastName,
                "email": this.model.email},
            "credentials": 
                {"password":this.model.password}
            }
        return body;
    }

}