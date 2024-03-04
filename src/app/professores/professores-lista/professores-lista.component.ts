import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../professor.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Professor } from '../professores';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-professores-lista',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  providers:[ProfessorService],
  templateUrl: './professores-lista.component.html',
  styleUrl: './professores-lista.component.css'
})
export class ProfessorListaComponent implements OnInit {

    professor: Professor[] = [];
    professorSelecionado!: Professor;
    mensagemSucesso!: string;
    mensagemErro!: String;
    documentosEntregues: boolean = false;

    constructor(private service : ProfessorService, private router: Router){
      
    }

  ngOnInit(): void {
    if(this.documentosEntregues){
      
      this.service
        .getProfessoresDocumentosEntregues()
        .subscribe( response => this.professor = response)
      
    }else{

    this.service
      .getProfessores()
      .subscribe( response => this.professor = response)
    }
  }

  editarProfessor(id: number) {
    this.router.navigate(['/professor-form', id]);
  }

  novoCadastro(){
    this.router.navigate(['/professor-form'])
  }

  preparaDelecao(professor: Professor){
    this.professorSelecionado = professor;
  }

  deletarProfessor(){
    this.service
    .deletar(this.professorSelecionado)
    .subscribe(
     response => {this.mensagemSucesso = 'Professor deletado com sucesso!'
    this.ngOnInit()},
      erro => this.mensagemErro = 'Ocorreu um erro ao deletar o professor.'
    )
  }

  onDocumentosEntreguesChange() {
    console.log('Valor de documentosEntregues mudou:', this.documentosEntregues);

    this.ngOnInit()
  }

}
