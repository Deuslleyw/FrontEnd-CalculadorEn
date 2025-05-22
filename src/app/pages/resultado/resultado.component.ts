import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.scss'
})
export class ResultadoComponent {
  resultado: string | null = '0';

  ngOnInit(){
    this.resultado = localStorage.getItem('resultado');
  }

  baixarRelatorio() {
  const simulacao = localStorage.getItem('simulacao');
  if (simulacao) {
    fetch('http://localhost:8080/api/v1/relatorio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: simulacao
    })
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'relatorio.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}


}
