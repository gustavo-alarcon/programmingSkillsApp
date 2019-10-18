import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataChart = { data: [0, 0, 0, 0], label: ' Serie A' }

  dataChart2 = { data: [0, 0, 0, 0], label: 'Serie B' }

  constructor(public data: DataService,
    private router: Router) {
  }

  guardarChart1(input1, input2, input3, input4): void {
    this.dataChart.data = [
      input1,
      input2,
      input3,
      input4
    ];
    console.log(this.dataChart);

    this.router.navigate(['chart2']);
  }
}
