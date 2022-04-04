import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(
        private userService: UserService,
        private router: Router,) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
        this.router.navigate(['/login']);
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}