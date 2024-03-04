import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule,  } from '@angular/common/http';
import { error } from 'console';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { subscribe } from 'diagnostics_channel';
import { ProfessorService } from '../../professor.service';
import { Professor } from '../professores';



@Component({
  selector: 'app-professor-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  providers:[ProfessorService],
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.css'
})
export class ProfessorFormComponent implements OnInit {

  professor!: Professor;
  success: boolean = false;
  errors!: String[];
  id!: number;

  constructor( 
    private service: ProfessorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ){
    this.professor = new Professor()
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service.getProfessorById(this.id).subscribe(
            (response: any) => {
                this.professor = response;
            },
            (errorResponse: any) => {
                this.professor = new Professor();
            }
        );
        }
      
    });
}

  voltarParaListagem(){
    this.router.navigate(['/professor-lista'])
  }


  onSubmit() {
   
    if(this.id){
      this.service.atualizar(this.professor)
      .subscribe({
        next: (response) => {
          this.success = true;
          this.errors = []
          this.professor = response
        },
        error: (errorResponse) => {
          this.errors = ['Erro ao atualizar o Professor.']
        }
      });

    }else{
      this.service
      .salvar(this.professor)
      .subscribe({
        next: (response) => {
          this.success = true;
          this.errors = []
          this.professor = response
        },
        error: (errorResponse) => {
          this.success=false
          this.errors = errorResponse.error.errors
        }
      });
    }
    
  }
}
