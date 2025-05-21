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

}
