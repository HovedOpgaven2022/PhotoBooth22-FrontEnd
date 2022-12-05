import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { RegisterUser } from 'src/app/model/register-user';
import { User } from 'src/app/model/user';

import { environment } from 'src/environments/environment';
import { SecurityService } from './security.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient, private sec: SecurityService) { }

    $salt: string | undefined;

    login(username: string, password: string): User {
        const _headers = new HttpHeaders().set('Content-type', 'text/json')
        const requestOptions: Object = {
            headers: _headers,
            responseType: 'text'
        }

        if (this.validateInput(username, password)) {
            return { username: "", id: "", name: "", phoneNumber: "" }
        }

        this.http.get<string>(`${environment.appUrl}/api/User/GetSalt/${username}`, requestOptions).subscribe(async salt => {
            let hashedPassword = await this.sec.hashPassword(password, salt);
            let data = {
                AccountName: username,
                Password: hashedPassword
            }

            console.log(data)
            this.http.post<any>(`${environment.appUrl}/api/User/Login`, data, requestOptions).subscribe(res => console.log(res))
        })
        return { id: "", name: "", phoneNumber: "", username: "" }
    }

    async register(username: string, password: string, name: string, phone: string) {
        const _headers = new HttpHeaders().set('Content-type', 'text/json')
        const requestOptions: Object = {
            headers: _headers,
            responseType: 'text'
        }

        if (this.validateInput(username, password)) {
            return
        }

        let generatedSalt = await this.sec.generateSalt();
        let hashedPassword = await this.sec.hashPassword(password, generatedSalt);

        let data: RegisterUser = {
            AccountName: username,
            Name: name,
            Password: hashedPassword,
            Phone: phone,
            Salt: generatedSalt
        }

        this.http.post(`${environment.appUrl}/api/User/CreateUser`, JSON.stringify(data), requestOptions).subscribe(result => {
            console.log(result);
        })
    }

    validateInput(username: string, password: string): boolean {
        return ((username == undefined || username == null || username == "") || (password == undefined || password == null || password == ""))    
    }
}
