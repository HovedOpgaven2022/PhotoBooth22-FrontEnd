import { HttpClient } from '@angular/common/http';
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
        if (((username == undefined || username == null || username == "") || (password == undefined || password == null || password == ""))) {
            console.log(username);
            
            return { username: "", id: "", name: "", phoneNumber: "" }
        }

        let _url = `${environment.appUrl}/api/User/GetSalt/${username}`


        this.http.post<string>(_url, username).subscribe(salt => this.$salt = salt);

        if (this.$salt != undefined) {

            console.log(this.$salt);


            let hashedPassword = this.sec.hashPassword(password, this.$salt);
            /*this.http.post<User>(environment.appUrl + "/api/User/Login", {username, hashedPassword}).subscribe(res => {
                console.log(res);
            })*/
        }

        return { id: "", name: "", phoneNumber: "", username: "" }
    }
}
