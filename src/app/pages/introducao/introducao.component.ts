import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-introducao',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="intro-container">
      <h1>Bem-vindo à Calculadora de Emergia</h1>
      <img src="assets/imagens/emergia.jpg" alt="Cadeia produtiva do papel" class="intro-img">
      <p>
        Esta aplicação permite simular o valor de emergia aplicado à cadeia produtiva do papel, considerando
        consumo energético, materiais e transporte. Insira os dados e descubra o impacto energético!
      </p>
      <button (click)="iniciarSimulacao()">Iniciar Simulação</button>
    </div>
  `,
  styles: [`
    .intro-container {
      padding: 20px;
      text-align: center;
    }

    h1 {
      margin-bottom: 20px;
    }

    .intro-img {
      width: 80%;
      max-width: 600px;
      margin-bottom: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    p {
      margin: 20px 0;
      font-size: 18px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  `]
})
export class IntroducaoComponent {
  constructor(private router: Router) {}

  iniciarSimulacao() {
    this.router.navigate(['/simulacao']);
  }
}
