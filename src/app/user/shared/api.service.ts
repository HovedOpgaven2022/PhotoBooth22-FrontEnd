import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    login(username: string): User {

        //Get salt from username
        let salt = this.http.post((environment.appUrl + "/api/User/GetSalt/"), username);
        //Hash the password using the salt
        //Send the hashed password with username to server
        //Get response

        return { id: "", name: "", phoneNumber: "", username: "" }
    }
}
