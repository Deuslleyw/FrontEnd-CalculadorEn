import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CalculadoraService {
  private apiUrl = 'http://localhost:8080/api/v1/calcular';

  constructor(private http: HttpClient) {}

  calcularEmergia(dados: any): Observable<number> {
    return this.http.post<any>(this.apiUrl, dados);
  }
}
