import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-localizacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.scss'],
})
export class LocalizacaoComponent implements OnInit {
  address: string = 'Rua 108, n 54, Bairro Conjunto Cohab, ITAIÇABA, Ceará';
  mapUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const url =
      'https://www.google.com/maps?q=' +
      encodeURIComponent(this.address) +
      '&output=embed';
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
