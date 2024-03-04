import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from './professores/professores';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { 
  }

  salvar( professor: Professor) : Observable<Professor>{

    const tokenString = localStorage.getItem('access_token')
    console.log(tokenString)
    const token = JSON.parse(tokenString!)
    console.log(token)
    const headers = {
      'Authorization' : 'Bearer ' + token
    }

    return this.http.post<Professor>('http://localhost:8080/api/professor',professor,{ headers });
  }

  atualizar( professor: Professor) : Observable<Professor>{
    const tokenString = localStorage.getItem('access_token')
    console.log(tokenString)
    const token = JSON.parse(tokenString!)
    console.log(token)
    const headers = {
      'Authorization' : 'Bearer ' + token
    }
    return this.http.put<Professor>(`http://localhost:8080/api/professor/${professor.id}`,professor,{ headers });
  }

  getProfessores() : Observable<Professor[]> {
    const tokenString = localStorage.getItem('access_token')
    console.log(tokenString)
    const token = JSON.parse(tokenString!)
    console.log(token)
    const headers = {
      'Authorization' : 'Bearer ' + token
    }
    return this.http.get<Professor[]>('http://localhost:8080/api/professor',{ headers });
  }

  getProfessoresDocumentosEntregues() : Observable<Professor[]> {
    const tokenString = localStorage.getItem('access_token')
    console.log(tokenString)
    const token = JSON.parse(tokenString!)
    console.log(token)
    const headers = {
      'Authorization' : 'Bearer ' + token
    }
    return this.http.get<Professor[]>('http://localhost:8080/api/professor/documentos-entregues',{ headers });
  }

  getProfessorById(id:number) : Observable<Professor>{
    const tokenString = localStorage.getItem('access_token')
    console.log(tokenString)
    const token = JSON.parse(tokenString!)
    console.log(token)
    const headers = {
      'Authorization' : 'Bearer ' + token
    }
    console.log(`http://localhost:8080/api/professor/${id},`,{ headers } + 'estou chegando aqui')
    return this.http.get<Professor>(`http://localhost:8080/api/professor/${id} `,{ headers });
  }

  deletar(professor:Professor) :Observable<any>{
    const tokenString = localStorage.getItem('access_token')
    console.log(tokenString)
    const token = JSON.parse(tokenString!)
    console.log(token)
    const headers = {
      'Authorization' : 'Bearer ' + token
    }
    return this.http.delete<any>(`http://localhost:8080/api/professor/${professor.id}`,{ headers });
  }
}
