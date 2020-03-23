import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface UserDataModule {
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
}

@Injectable({providedIn: 'root'})
export class RegistrationService {
    constructor(private http: HttpClient){
    }
    createUser(data: UserDataModule){
        return this.http.post('http://localhost/v1/reg.php', data, {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          });
    }
}
