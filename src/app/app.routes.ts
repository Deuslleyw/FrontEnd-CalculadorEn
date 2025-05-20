import { Routes } from '@angular/router';
import { IntroducaoComponent } from './pages/introducao/introducao.component';
import { SimulacaoComponent } from './pages/simulacao/simulacao.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';

export const routes: Routes = [
  { path: '', component: IntroducaoComponent },
  { path: 'simulacao', component: SimulacaoComponent },
  { path: 'resultado', component: ResultadoComponent },
];
