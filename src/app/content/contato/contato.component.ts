import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent {
  // Número do WhatsApp completo com código do país (Brasil: 55) e DDD (88)
  whatsappNumber: string = '5588993773126';
  // Mensagem padrão para contato
  mensagemPadrao: string =
    'Olá, gostaria de saber mais sobre os procedimentos da RS Fisio Estética & Saúde.';

  enviarWhatsApp(): void {
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(this.mensagemPadrao);
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    // Abre a URL em uma nova aba
    window.open(url, '_blank');
  }
}
