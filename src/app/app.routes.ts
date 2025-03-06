import { Routes } from '@angular/router';

// Importação de componentes da LandPage (One Page)
import { HomeComponent } from './home/home.component';

// Importação de Páginas Separadas
import { ProcedimentosComponent } from './content/procedimentos/procedimentos.component';
import { GaleriaComponent } from './content/galeria/galeria.component';
import { LocalizacaoComponent } from './content/localizacao/localizacao.component';
import { ContatoComponent } from './content/contato/contato.component';
import { AboutComponent } from './content/about/about.component';
import { HeroComponent } from './content/hero/hero.component';



export const routes: Routes = [
  // Página Inicial (One Page Layout)
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redireciona para a seção inicial
      { path: 'inicio', component: HeroComponent }, // Hero Banner
      { path: 'procedimentos', component: ProcedimentosComponent }, // Seção dentro da One Page
      { path: 'galeria', component: GaleriaComponent }, // Seção dentro da One Page
      { path: 'localizacao', component: LocalizacaoComponent }, // Seção dentro da One Page
    ],
  },

  // Páginas Separadas
  { path: 'procedimentos-page', component: ProcedimentosComponent }, // Página completa de Procedimentos
  { path: 'galeria-page', component: GaleriaComponent }, // Página completa de Galeria
  { path: 'localizacao-page', component: LocalizacaoComponent }, // Página completa de Localização
  { path: 'contato', component: ContatoComponent }, // Página de Contato
  { path: 'sobre', component: AboutComponent }, // Página Sobre a Clínica

  // Rota Coringa (Redireciona para Home se a URL for inválida)
  { path: '**', redirectTo: '' },
];
