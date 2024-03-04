import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';
import { HttpClientModule,  } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username!: string;
  password!: string;
  cadastrando!: boolean;
  mensagemSucesso!: String;
  errors!: String[];

  constructor( 
     private router:Router
    ,private authService: AuthService){
  }

  onSubmit(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
        .logar(usuario)
        .subscribe(response=> {
          console.log(response)
          const access_token = JSON.stringify(response.token)
          console.log(access_token)
          localStorage.setItem('access_token', access_token)
          this.router.navigate(['/home'])
        }, errorResponse => {
            this.errors= ['Usuário e/pu senha incorretos(s)']
        })
    
  }

  preparaCadastrar(event: MouseEvent){
    event.preventDefault()
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService.salvar(usuario)
    .subscribe( response => {
      this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login"
      this.cadastrando = false
      this.username = ''
      this.password = ''
      this.errors = []
    }, errorResponse =>{
      this.mensagemSucesso = '';
      this.errors = errorResponse.error.errors;
    })
  }

}
