import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { style } from '@angular/core/src/animation/dsl';
import { CamundaRestService } from '../../camunda-rest.service';
import { Auth } from '../models/auth.model';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    message: any;
    authStatus: Auth = new Auth();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private camundaRestService: CamundaRestService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/user';
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }

    login() {
        
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    /*if (this.authStatus.authenticated && this.authStatus.authenticatedUser == this.model.username) {
                        
                    } else {
                        error => this.alertService.error(error);
                        this.loading = false;
                    }*/
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });

    }

    verifyIdentity() {
        this.camundaRestService
            .verifyUser(this.getVerifyUserRequestBody())
            .subscribe(auth => this.authStatus = auth);
    }

    getVerifyUserRequestBody() {
        const body = {
            "username": this.model.username,
            "password": this.model.password
        };
        return body;
    }
}