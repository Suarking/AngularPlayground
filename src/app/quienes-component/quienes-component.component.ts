import { Component, OnInit } from '@angular/core';
import { RickApiConsumerService } from '../rick-api-consumer.service';

@Component({
  selector: 'app-quienes-component',
  templateUrl: './quienes-component.component.html',
  styleUrls: ['./quienes-component.component.css'],
})
export class QuienesComponentComponent implements OnInit {
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
}
