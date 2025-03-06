import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  Inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { computed } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

import { NavigationService } from '../../services/navigation.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // Ajustamos as rotas do menu:
  // - Home: trata-se de uma página (/home)
  // - Os demais são seções (sem barra), que serão roladas na HomeComponent.
  menuRoutes = [
    { route: '/home', label: 'Home', icon: 'home', type: 'page' },
    {
      route: 'procedimentos',
      label: 'Procedimentos',
      icon: 'content_cut',
      type: 'section',
    },
    {
      route: 'galeria',
      label: 'Galeria',
      icon: 'photo_library',
      type: 'section',
    },
    {
      route: 'localizacao',
      label: 'Localização',
      icon: 'place',
      type: 'section',
    },
    { route: 'contato', label: 'Contato', icon: 'mail', type: 'section' },
  ];

  // Signals para monitorar a página e a seção ativas
  activePage = computed(() => this.navigationService.currentPage());
  activeSection = computed(() => this.navigationService.currentSection());

  // Signal para o estado do Navbar (aberto ou fechado)
  isNavbarOpen = computed(() => this.navbarService.isNavbarOpen);

  constructor(
    private navigationService: NavigationService,
    private navbarService: NavbarService,
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkIfMobile();
    }
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkIfMobile();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const target = event.target as HTMLElement;
    if (
      window.innerWidth <= 991 &&
      this.navbarService.getNavbarStateValue() &&
      !this.elementRef.nativeElement.contains(target)
    ) {
      this.navbarService.closeNavbar();
    }
  }

  /**
   * Verifica se estamos em dispositivo móvel e, se não, fecha o menu.
   */
  checkIfMobile(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const isMobile = window.innerWidth <= 991;
    if (!isMobile) {
      this.navbarService.closeNavbar();
    }
  }

  /**
   * Navega para uma página ou seção.
   * Se a rota começar com '/', navega para página; senão, para uma seção da home.
   */
  navegarPara(rotaOuSecao: string, event: Event): void {
    event.preventDefault();
    if (rotaOuSecao.startsWith('/')) {
      this.navigationService.navigateToPage(rotaOuSecao);
    } else {
      this.navigationService.navigateToSection(rotaOuSecao);
    }
    if (isPlatformBrowser(this.platformId) && window.innerWidth <= 991) {
      this.navbarService.closeNavbar();
    }
  }

  toggleNavbar(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.innerWidth <= 991) {
      this.navbarService.toggleNavbar();
    }
  }
}
