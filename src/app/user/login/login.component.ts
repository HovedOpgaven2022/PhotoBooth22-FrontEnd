import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/model/login-user';
import { ApiService } from '../shared/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private userService: ApiService, private fb: FormBuilder) { }

    loginForm = this.fb.group({
        username: [''],
        password: ['']
    })

    signup() {
        this.router.navigateByUrl('/signup')
    }

    login(){
        const user = this.loginForm.value as LoginUser;
        this.userService.login(user.username, user.password);
    }

    ngOnInit(): void {
    }

}
