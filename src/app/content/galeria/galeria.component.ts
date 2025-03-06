import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Galeria } from '../../shared/models/galeria.model';
import { GaleriaService } from '../../shared/services/galeria.service';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
  itensGaleria: Galeria[] = [];
  itemSelecionado: Galeria | null = null;
  modalVisivel = false;

  constructor(private galeriaService: GaleriaService) {}

  ngOnInit(): void {
    // Carrega os itens do serviço
    this.itensGaleria = this.galeriaService.carregarGaleria();
  }

  abrirModal(item: Galeria): void {
    this.itemSelecionado = item;
    this.modalVisivel = true;
  }

  fecharModal(): void {
    this.itemSelecionado = null;
    this.modalVisivel = false;
  }

  isAntesDepois(item: Galeria): boolean {
    return item.tipo === 'antesDepois';
  }

  isProcedimento(item: Galeria): boolean {
    return item.tipo === 'procedimento';
  }

  isPromocional(item: Galeria): boolean {
    return item.tipo === 'promocional';
  }
}
