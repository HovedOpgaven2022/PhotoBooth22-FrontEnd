import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterUser } from 'src/app/model/register-user';
import { ApiService } from '../shared/api.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor(private fb: FormBuilder, private userService: ApiService) { }

    registerForm = this.fb.group({
        username: [''],
        email: [''],
        phone: [''],
        password: ['']
    })

    register() {
        const regUser = this.registerForm.value
        this.userService.register(regUser.username as string, regUser.password as string, regUser.email as string, regUser.phone as string);
    }

    ngOnInit(): void {
    }

}
