import { Component } from '@angular/core';
import { HeroComponent } from "../content/hero/hero.component";
import { ProcedimentosComponent } from "../content/procedimentos/procedimentos.component";
import { GaleriaComponent } from "../content/galeria/galeria.component";
import { LocalizacaoComponent } from "../content/localizacao/localizacao.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProcedimentosComponent, GaleriaComponent, LocalizacaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
