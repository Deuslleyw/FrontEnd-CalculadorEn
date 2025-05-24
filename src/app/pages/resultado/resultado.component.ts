import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxChartsModule],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.scss'
})
export class ResultadoComponent implements OnInit {
  resultado: number = 0;

  chartData: any[] = [];

  view: [number, number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Indicadores';
  showYAxisLabel = true;
  yAxisLabel = 'Emergia (sej)';

  colorScheme: Color = {
  name: 'amarelo-personalizado',
  selectable: true,
  group: ScaleType.Ordinal,
  domain: ['#FFC107']
  }

  ngOnInit() {
    const resultadoStorage = localStorage.getItem('resultado');
    this.resultado = resultadoStorage ? Number(resultadoStorage) : 0;

    this.chartData = [
  { "name": "Valor de Emergia", "value": this.resultado },
  { "name": "Base", "value": 0 }
];

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
