import { Injectable } from '@angular/core';
import { Galeria } from '../models/galeria.model'; // Ajuste caminho conforme seu projeto

@Injectable({
  providedIn: 'root', // Faz com que esse serviço seja injetável globalmente
})
export class GaleriaService {
  constructor() {}

  /**
   * Retorna um array de itens de galeria.
   * Em um projeto real, poderia usar HttpClient para buscar dados de uma API.
   */
  carregarGaleria(): Galeria[] {
    return [
      {
        id: 1,
        tipo: 'antesDepois',
        titulo: 'Antes e Depois - Botox',
        imagem: '/assets/imagens/botox-base.jpg',
        imagemAntes: '/assets/imagens/botox-antes.jpg',
        imagemDepois: '/assets/imagens/botox-depois.jpg',
        descricao: 'Exemplo de botox antes e depois',
      },
      {
        id: 2,
        tipo: 'procedimento',
        titulo: 'Limpeza de Pele Profissional',
        imagem: '/assets/imagens/limpeza-pele.jpg',
        descricao: 'Remoção de impurezas e hidratação profunda',
      },
      {
        id: 3,
        tipo: 'promocional',
        titulo: 'Pacote de Verão',
        imagem: '/assets/imagens/pacote-verao.jpg',
        descricao: 'Pacote promocional para ficar radiante no verão',
      },
      // ...adicione quantos quiser
    ];
  }
}
