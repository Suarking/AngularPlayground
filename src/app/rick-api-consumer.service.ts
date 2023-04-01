import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickApiConsumerService {
  //Inyectamos HttpClient
  constructor(private http: HttpClient) {}
  //Declaramos url de la API
  private urlApi: string = 'https://rickandmortyapi.com/api/character/';

  //Método que obtiene los datos de la API, pasando 2 valores aleatorios
  public getData(query?: string): Observable<any> {
    //Si no recibe un valor, se asignan dos números aleatorios
    const urlQuery = query
      ? query
      : this.getAnotherTwoNumbers(
          this.randomIntFromInterval(1, 800),
          this.randomIntFromInterval(1, 800)
        );
    const fullUrl = `${this.urlApi}${urlQuery}`;
    return this.http.get<any>(fullUrl);
  }

  //Método que obtiene los datos de la API, pasando los 10 primeros valores
  public getDataFirstTen(): Observable<any> {
    const urlQuery = '1,2,3,4,5,6,7,8,9,10';
    const fullUrl = `${this.urlApi}${urlQuery}`;
    return this.http.get<any>(fullUrl);
  }

  //Métoso que calcula un número entero aleatorio
  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //Método que obtiene 2 números aleatorios, y devuelve la cadena que pasamos a getData
  getAnotherTwoNumbers(number1: number, number2: number): string {
    return `${number1},${number2}`;
  }
}
