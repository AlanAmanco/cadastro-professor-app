import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfessorFormComponent } from './professores/professores-form/professor-form.component';
import { ProfessorListaComponent } from './professores/professores-lista/professores-lista.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {path: 'login',component: LoginComponent},
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
    children:[
        {path: 'home',component: HomeComponent },
        {path: 'professor-form',component :ProfessorFormComponent},
        {path: 'professor-form/:id',component :ProfessorFormComponent},
        {path: 'professor-lista',component:ProfessorListaComponent}
    ]},
];
