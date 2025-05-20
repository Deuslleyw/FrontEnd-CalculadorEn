import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-introducao',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.scss']
})
export class IntroducaoComponent {}
