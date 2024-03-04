import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './login/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    const tokenString = localStorage.getItem('access_token');
    let isAuthenticated: boolean = false;
    if (tokenString) {
      isAuthenticated = true;
    }
    return isAuthenticated;
  }

  salvar(Usuario: Usuario) :Observable<any> {
    return this.http.post<any>('http://localhost:8080/auth/register',Usuario)
  }

  logar(Usuario: Usuario) :Observable<any>{
    return this.http.post<any>('http://localhost:8080/auth/login',Usuario)

  }
}
