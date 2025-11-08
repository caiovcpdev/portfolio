import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

declare var bootstrap: any;
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavBarComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const navbarCollapse = this.el.nativeElement.querySelector('#navbarNav');

    document.addEventListener('click', (event: any) => {
      const target = event.target as HTMLElement;
      const isClickInside =
        navbarCollapse?.contains(target) ||
        target.classList.contains('navbar-toggler');

      if (!isClickInside) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse && navbarCollapse?.classList.contains('show')) {
          bsCollapse.hide();
        }
      }
    });
  }
}