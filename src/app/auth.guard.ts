import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    // Verifica se localStorage está disponível
    if (typeof localStorage !== 'undefined') {
      const tokenString = localStorage.getItem('access_token');
      const isAuthenticated: boolean = !!tokenString; // Convertendo para booleano usando !!

      if (!isAuthenticated) {
        this.router.navigate(['/login']); // Redireciona para a página de login se não estiver autenticado
        return false; // Retorna false para impedir a navegação
      }
    } else {
      this.router.navigate(['/login']); // Redireciona para a página de login se localStorage não estiver disponível
      return false; // Retorna false para impedir a navegação
    }

    return true; // Permite a navegação se estiver autenticado ou se localStorage não estiver disponível
  }
}
