import { Component, OnInit } from '@angular/core';
import { RickApiConsumerService } from '../rick-api-consumer.service';

@Component({
  selector: 'app-api-consume-component',
  templateUrl: './api-consume-component.component.html',
  styleUrls: ['./api-consume-component.component.css'],
})
export class ApiConsumeComponentComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: RickApiConsumerService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  fetchDataFirstTen() {
    this.apiService.getDataFirstTen().subscribe((data) => {
      this.data = data;
    });
  }
}
