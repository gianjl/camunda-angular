import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CamundaRestService } from '../camunda-rest.service';

import { AlertService } from '../authentication/services/alert.service';
import { UserService } from '../authentication/services/user.service';
import { User } from '../authentication/models/user.model';

@Component({
    moduleId: module.id,
    templateUrl: 'admin-dashboard.component.html',
    styleUrls: ['admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit{
    model: any = {};
    loading = false;
    message: any;
    users: User[];
    currentUser: User;
    deletePopUp = false;
    registerPopUp = false;
    profilePopUp = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private camundaRestService: CamundaRestService) { }

    ngOnInit(): void {
        this.camundaRestService.getUsers().subscribe(users => this.users = users);
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
                    window.location.reload();
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

    setCurrentUser(userSel: User){
        this.currentUser = userSel;
        this.profilePopUp = true;
    }

    setUserForDeletion(userSel: User){
        this.currentUser = userSel;
        this.deletePopUp = true;
    }

    deleteUser(userId: number) {
        this.userService.delete(userId).subscribe(() => { this.loadAllUsers() });
        this.camundaRestService.deleteUser(userId).subscribe();
        window.location.reload();
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

}