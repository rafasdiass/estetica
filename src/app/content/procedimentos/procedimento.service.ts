import { Injectable } from '@angular/core';
import { Procedimento } from '../../shared/models/procedimento.model';

@Injectable({
  providedIn: 'root',
})
export class ProcedimentoService {
  private autoSlideInterval: ReturnType<typeof setInterval> | null = null;

  constructor() {}

  startAutoSlide(intervalTime: number, nextSlideCallback: () => void): void {
    this.autoSlideInterval = setInterval(() => {
      nextSlideCallback();
    }, intervalTime);
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }
}
