import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private navbarOpen = signal<boolean>(false);

  // Getter que retorna o estado atual do menu (booleano)
  get isNavbarOpen(): boolean {
    return this.navbarOpen();
  }

  // Alterna o estado do menu (abre se estiver fechado e vice-versa)
  toggleNavbar(): void {
    this.navbarOpen.set(!this.navbarOpen());
  }

  // Fecha o menu (define estado como false)
  closeNavbar(): void {
    this.navbarOpen.set(false);
  }

  // Método para obter o valor atual do estado do menu (caso necessário)
  getNavbarStateValue(): boolean {
    return this.navbarOpen();
  }
}
