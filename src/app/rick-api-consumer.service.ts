import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickApiConsumerService implements OnInit {
  //Seteamos la url y la query
  private urlApi: string = 'https://rickandmortyapi.com/api/character/';
  private urlQuery: string = '';
  private urlFullURL: string = this.urlApi + this.urlQuery;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public getData(): Observable<any> {
    this.urlQuery = this.getAnotherTwoNumbers(
      this.randomIntFromInterval(1, 800),
      this.randomIntFromInterval(1, 800)
    );
    this.urlFullURL = this.urlApi + this.urlQuery;
    return this.http.get<any>(this.urlFullURL);
  }
  public getDataFirstTen(): Observable<any> {
    this.urlQuery = '1,2,3,4,5,6,7,8,9,10';
    this.urlFullURL = this.urlApi + this.urlQuery;
    return this.http.get<any>(this.urlFullURL);
  }

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //Construye la query con 2 números random
  getAnotherTwoNumbers(number1: number, number2: number): string {
    return number1.toString() + ',' + number2.toString();
  }
}
