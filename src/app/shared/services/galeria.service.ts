import { Injectable } from '@angular/core';
import { Galeria } from '../models/galeria.model';

@Injectable({
  providedIn: 'root',
})
export class GaleriaService {
  constructor() {}

  /**
   * Retorna 16 itens de galeria, cada um apontando para
   * /assets/imagens/comparativos/[1-16].jpeg
   * Todos são do tipo 'antesDepois', mas usam uma única imagem.
   */
  carregarGaleria(): Galeria[] {
    return [
      {
        id: 1,
        tipo: 'antesDepois',
        titulo: 'Comparativo 1',
        imagem: '/assets/images/comparativos/1.jpeg',
        descricao: 'Antes e depois juntos na mesma foto (1).',
      },
      {
        id: 2,
        tipo: 'antesDepois',
        titulo: 'Comparativo 2',
        imagem: '/assets/images/comparativos/2.jpeg',
        descricao: 'Antes e depois juntos na mesma foto (2).',
      },
      {
        id: 3,
        tipo: 'antesDepois',
        titulo: 'Comparativo 3',
        imagem: '/assets/images/comparativos/3.jpeg',
      },
      {
        id: 4,
        tipo: 'antesDepois',
        titulo: 'Comparativo 4',
        imagem: '/assets/images/comparativos/4.jpeg',
      },
      {
        id: 5,
        tipo: 'antesDepois',
        titulo: 'Comparativo 5',
        imagem: '/assets/images/comparativos/5.jpeg',
      },
      {
        id: 6,
        tipo: 'antesDepois',
        titulo: 'Comparativo 6',
        imagem: '/assets/images/comparativos/6.jpeg',
      },
      {
        id: 7,
        tipo: 'antesDepois',
        titulo: 'Comparativo 7',
        imagem: '/assets/images/comparativos/7.jpeg',
      },
      {
        id: 8,
        tipo: 'antesDepois',
        titulo: 'Comparativo 8',
        imagem: '/assets/images/comparativos/8.jpeg',
      },
      {
        id: 9,
        tipo: 'antesDepois',
        titulo: 'Comparativo 9',
        imagem: '/assets/images/comparativos/9.jpeg',
      },
      {
        id: 10,
        tipo: 'antesDepois',
        titulo: 'Comparativo 10',
        imagem: '/assets/images/comparativos/10.jpeg',
      },
      {
        id: 11,
        tipo: 'antesDepois',
        titulo: 'Comparativo 11',
        imagem: '/assets/images/comparativos/11.jpeg',
      },
      {
        id: 12,
        tipo: 'antesDepois',
        titulo: 'Comparativo 12',
        imagem: '/assets/images/comparativos/12.jpeg',
      },
      {
        id: 13,
        tipo: 'antesDepois',
        titulo: 'Comparativo 13',
        imagem: '/assets/images/comparativos/13.jpeg',
      },
      {
        id: 14,
        tipo: 'antesDepois',
        titulo: 'Comparativo 14',
        imagem: '/assets/images/comparativos/14.jpeg',
      },
      {
        id: 15,
        tipo: 'antesDepois',
        titulo: 'Comparativo 15',
        imagem: '/assets/images/comparativos/15.jpeg',
      },
      {
        id: 16,
        tipo: 'antesDepois',
        titulo: 'Comparativo 16',
        imagem: '/assets/images/comparativos/16.jpeg',
      },
    ];
  }
}
