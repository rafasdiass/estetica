import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  isExpanded = false;
  heroTitle = 'Redefina sua Beleza';
  heroText =
    'Descubra os melhores tratamentos estéticos para realçar sua beleza natural.';
  expandedText = `Na nossa clínica de estética, oferecemos tratamentos modernos para realçar a sua beleza natural.
                  Nossa equipe especializada utiliza técnicas avançadas para proporcionar bem-estar e rejuvenescimento.
                  Venha descobrir como podemos transformar sua autoestima!`;
  // Caminho da imagem de fundo
  heroBannerUrl = '/assets/images/teste1.jpg';
  // Propriedade que controla a posição do background para o efeito parallax
  bgPosition = 'center calc(50% + 0px)';

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Atualiza a posição do background conforme o scroll para criar o efeito parallax
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const offset = window.pageYOffset;
    // Ajusta o fator de deslocamento (0.5 = metade da velocidade do scroll)
    this.bgPosition = `center calc(50% + ${offset * 0.5}px)`;
  }
}
