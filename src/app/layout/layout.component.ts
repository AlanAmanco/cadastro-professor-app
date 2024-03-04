import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../template/sidebar/sidebar.component';
import { NavbarComponent } from '../template/navbar/navbar.component';
import { isPlatformBrowser } from '@angular/common';
import jQuery from 'jquery';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, HomeComponent,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent  implements  AfterViewInit{

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute ,@Inject(PLATFORM_ID) private platformId: Object){

  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
        this.setupSidebarToggle();
    }
}

setupSidebarToggle() {
    (function($) {
        "use strict";

        var path = window.location.href; // Esta linha é segura pois está dentro do bloco if
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            let anchorElement = this as HTMLAnchorElement;
            if (anchorElement.href === path) {
                $(this).addClass("active");
            }
        });

        $("#sidebarToggle").on("click", function(e) {
            e.preventDefault();
            $("body").toggleClass("sb-sidenav-toggled");
        });
    })(jQuery);
}

}
