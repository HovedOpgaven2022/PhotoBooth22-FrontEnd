import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
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

        if (((username == undefined || username == null || username == "") || (password == undefined || password == null || password == ""))) {
            return { username: "", id: "", name: "", phoneNumber: "" }
        }

        this.http.get<string>(`${environment.appUrl}/api/User/GetSalt/${username}`, requestOptions).subscribe(async salt => {
            let hashedPassword = await this.sec.hashPassword(password, salt); 
            let data = {
                AccountName: username,
                Password: hashedPassword
            }

            console.log(data)
            this.http.post<any>(`${environment.appUrl}/api/User/Login`, JSON.stringify(data), requestOptions).subscribe(res => console.log(res))
        })
        return { id: "", name: "", phoneNumber: "", username: "" }
    }
}
