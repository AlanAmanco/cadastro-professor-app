
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { ProfessorFormComponent } from './professores-form/professor-form.component';
import { ProfessorListaComponent } from './professores-lista/professores-lista.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfessorFormComponent,
    ProfessorListaComponent,
    RouterModule.forChild(routes)
  ],
  exports:[
    ProfessorFormComponent,
    ProfessorListaComponent,
  ],
  providers:[
    
  ]
})
export class ProfessorModule { }
