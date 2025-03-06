import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  instagramUrl: string = 'https://www.instagram.com/rafaellasolheirofisio/';
  facebookUrl: string = 'https://www.facebook.com/rafaella.solheiro/';
  email: string = 'rafaella.solheiro@hotmail.com';
  // WhatsApp: URL com código do país (55) e DDD (88)
  whatsappUrl: string = 'https://wa.me/5588993773126';
  currentYear: number = new Date().getFullYear();
}
