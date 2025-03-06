import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Procedimento } from '../../shared/models/procedimento.model';
import { ProcedimentoService } from './procedimento.service';

@Component({
  selector: 'app-procedimentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './procedimentos.component.html',
  styleUrls: ['./procedimentos.component.scss'],
})
export class ProcedimentosComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  loading = true;

  /**
   * Lista de procedimentos com dados profissionais
   * e imagens representativas.
   */
  procedimentos: Procedimento[] = [
    {
      id: 1,
      titulo: 'Botox',
      descricao:
        'Tratamento com toxina botulínica para suavizar rugas e linhas de expressão.',
      imagem: '/assets/imagens/procedimento-botox.jpg',
      valor: 320,
    },
    {
      id: 2,
      titulo: 'Limpeza de Pele',
      descricao:
        'Limpeza profunda e revitalização facial, remove impurezas e células mortas.',
      imagem: '/assets/imagens/procedimento-limpeza.jpg',
      valor: 180,
    },
    {
      id: 3,
      titulo: 'Microagulhamento',
      descricao:
        'Estimula a produção de colágeno através de microperfurações controladas.',
      imagem: '/assets/imagens/procedimento-microagulhamento.jpg',
      valor: 250,
    },
    {
      id: 4,
      titulo: 'Skinbooster',
      descricao:
        'Hidratação profunda e revitalização cutânea com ácido hialurônico.',
      imagem: '/assets/imagens/procedimento-skinbooster.jpg',
      valor: 380,
    },
    {
      id: 5,
      titulo: 'Emagrecimento',
      descricao:
        'Programa personalizado para perda de peso com acompanhamento profissional.',
      imagem: '/assets/imagens/procedimento-emagrecimento.jpg',
      valor: 450,
    },
    {
      id: 6,
      titulo: 'Gordura Localizada',
      descricao:
        'Procedimentos estéticos para redução de gordura em áreas específicas.',
      imagem: '/assets/imagens/procedimento-gordura.jpg',
      valor: 400,
    },
    {
      id: 7,
      titulo: 'Celulites',
      descricao: 'Técnicas avançadas para minimizar a aparência de celulites.',
      imagem: '/assets/imagens/procedimento-celulites.jpg',
      valor: 280,
    },
    {
      id: 8,
      titulo: 'Peim (Varizes)',
      descricao:
        'Tratamento minimamente invasivo para varizes e vasinhos nas pernas.',
      imagem: '/assets/imagens/procedimento-peim.jpg',
      valor: 520,
    },
    {
      id: 9,
      titulo: 'Banho de Lua',
      descricao: 'Bronzeamento gradual e uniforme para realçar o tom de pele.',
      imagem: '/assets/imagens/procedimento-banho-de-lua.jpg',
      valor: 220,
    },
    {
      id: 10,
      titulo: 'Bronze de Cabine',
      descricao:
        'Bronzeamento artificial em cabine para um resultado uniforme e rápido.',
      imagem: '/assets/imagens/procedimento-bronze.jpg',
      valor: 200,
    },
  ];

  private isBrowser: boolean;

  constructor(
    private procedimentoService: ProcedimentoService,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    // Pré-carrega as imagens e inicia o autoSlide no navegador
    this.preloadItems().then(() => {
      if (this.isBrowser) {
        this.procedimentoService.startAutoSlide(5000, () => this.nextSlide());
      }
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    // Para o autoSlide no momento em que o componente é destruído
    if (this.isBrowser) {
      this.procedimentoService.stopAutoSlide();
    }
  }

  /** Carrega todas as imagens no navegador para evitar flash ou erro SSR. */
  async preloadItems(): Promise<void> {
    if (!this.isBrowser) return;
    const promises = this.procedimentos.map((item) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = item.imagem;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    });
    await Promise.all(promises);
  }

  /** Passa para o próximo slide */
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.procedimentos.length;
  }

  /** Volta para o slide anterior */
  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.procedimentos.length) %
      this.procedimentos.length;
  }

  /** Seleciona um slide específico ao clicar em um card */
  setSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  /** Reinicia o autoSlide toda vez que um slide é selecionado manualmente */
  resetAutoSlide(): void {
    this.procedimentoService.stopAutoSlide();
    this.procedimentoService.startAutoSlide(5000, () => this.nextSlide());
  }
}
