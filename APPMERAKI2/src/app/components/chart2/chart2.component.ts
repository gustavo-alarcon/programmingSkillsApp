import { Component, OnInit } from '@angular/core';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,

  };
  public radarChartLabels: Label[] = ['BackEnd', 'FrontEnd', 'Cloud', 'Frameworks'];

  public radarChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Seria A' },
    { data: [0, 0, 0, 0], label: 'Seria B' }
  ];

  public radarChartType: ChartType = 'radar';

  dataFormGroup: FormGroup;
  showMainContent: Boolean = true;

  constructor(
    public fb: FormBuilder,
    public data: DataService) {
      this.radarChartData[0] = this.data.dataChart;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.dataFormGroup = this.fb.group({
      input1: [0, [Validators.required]],
      input2: [0, [Validators.required]],
      input3: [0, [Validators.required]],
      input4: [0, [Validators.required]]
    });
  }

  guardar() {
    this.radarChartData[1].data = [
      this.dataFormGroup.value['input1'],
      this.dataFormGroup.value['input2'],
      this.dataFormGroup.value['input3'],
      this.dataFormGroup.value['input4']
    ];
  }
  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;

  }
}
