import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CalculadoraService } from '../../services/calculadora.service';

@Component({
  selector: 'app-simulacao',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.scss']
})
export class SimulacaoComponent {
  simulacao = {
    consumoEnergetico: 0,
    quantidadeMaterial: 0,
    distanciaTransporte: 0
  };

  constructor(
    private calculadoraService: CalculadoraService,
    private router: Router
  ) {}

  calcularEmergia() {
  this.calculadoraService.calcularEmergia(this.simulacao).subscribe(
    (result) => {
      localStorage.setItem('resultado', result.toString());
      localStorage.setItem('simulacao', JSON.stringify(this.simulacao));
      this.router.navigate(['/resultado']);
    },
    (error) => {
      console.error('Erro ao calcular emergia:', error);
    }
  );
}

  }
