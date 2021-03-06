import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { UserRegister } from '../interfaces/user-register';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    url: string = 'http://localhost:8200'; // aaaaaaa@aaaaaaa.fr

    constructor(private http: HttpClient, private _router :Router) {}

    login(email: string, password: string) {
        return new Promise((resolve, rejects) => {
            this.http.post(this.url + '/login', { email: email, password: password }).subscribe((data: any) => {
                (!data.success) ? rejects(false): resolve(data);
            });
        });
    }

    register(user: UserRegister) {
        return new Promise((resolve, rejects) => {
            this.http.post(this.url + '/signup', user).subscribe((data: any) => {
                (!data.success) ? rejects(data.message): resolve(data);
            });
        });
    }

    logout(){
        //Supprime le token
        localStorage.removeItem('token');
        //Vers la page Login
        this._router.navigate(['/login']);
    }

    getProfile() {
        return this.http.get(this.url + '/profil');
    }
}