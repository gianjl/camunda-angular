import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CamundaRestService } from '../../camunda-rest.service';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css']
})

export class UserComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    deletePopUp: boolean = false;
    user: User;

    constructor(
        private userService: UserService,
        private router: Router,
        private camundaRestService: CamundaRestService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.getUserProfile();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
        this.camundaRestService.deleteUser(this.currentUser.username).subscribe();
        this.router.navigate(['/login']);
    }

    getUserProfile() {
        this.camundaRestService
            .getUserProfile(this.currentUser.username)
            .subscribe(user => this.user = user);
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

}