import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navbarOpen = false;
  activeLink: string = 'home';

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
