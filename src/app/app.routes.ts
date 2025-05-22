import { Routes } from '@angular/router';
import { IntroducaoComponent } from './pages/introducao/introducao.component';
import { SimulacaoComponent } from './pages/simulacao/simulacao.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { SaibaMaisComponent } from './pages/saiba-mais/saiba-mais.component';

export const routes: Routes = [
  { path: '', component: IntroducaoComponent },
  { path: 'simulacao', component: SimulacaoComponent },
  { path: 'resultado', component: ResultadoComponent },
  { path: 'saibaMais', component: SaibaMaisComponent},
  { path: '**', redirectTo: '' }
];
