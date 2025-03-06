import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  // Signal que armazena a rota ativa (página)
  private activePage = signal<string>('/home');
  // Signal que armazena a seção ativa (dentro da página home)
  private activeSection = signal<string>('');

  constructor(private router: Router) {}

  // Getter para o Signal da página ativa
  get currentPage() {
    return this.activePage;
  }

  // Getter para o Signal da seção ativa
  get currentSection() {
    return this.activeSection;
  }

  /**
   * Navega para uma nova página e atualiza o Signal da página ativa.
   */
  navigateToPage(page: string): void {
    this.router.navigate([page]);
    this.activePage.set(page);
    this.activeSection.set(''); // Reseta a seção ativa ao mudar de página
  }

  /**
   * Navega para uma seção específica dentro da mesma página.
   * Se a página ativa não for a home, navega para a home primeiro.
   */
  navigateToSection(section: string): void {
    this.activeSection.set(section);
    if (this.activePage() === '/home') {
      this.scrollToSection(section);
    } else {
      this.router.navigate(['/home']).then(() => {
        this.scrollToSection(section);
      });
    }
  }

  /**
   * Rola suavemente até a seção especificada.
   */
  private scrollToSection(section: string): void {
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  /**
   * Verifica se a página ativa corresponde à informada.
   */
  isPageActive(page: string): boolean {
    return this.activePage() === page;
  }

  /**
   * Verifica se a seção ativa corresponde à informada.
   */
  isSectionActive(section: string): boolean {
    return this.activeSection() === section;
  }

  /**
   * Navega para uma rota genérica, sem lógica de página ou seção.
   */
  navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
