import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./template/navbar/navbar.component";
import { SidebarComponent } from "./template/sidebar/sidebar.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, SidebarComponent, HomeComponent,FormsModule]
})
export class AppComponent {
  title = 'professores-app';

  constructor() {}
   
}
