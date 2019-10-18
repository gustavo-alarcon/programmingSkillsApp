import { Component, OnInit, Input } from '@angular/core';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };

  public radarChartLabels: Label[] = ['BackEnd', 'FrontEnd', 'Cloud', 'Frameworks',];

  public radarChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Seria A' }
  ];

  public radarChartType: ChartType = 'radar';

  dataFormGroup: FormGroup;
  showMainContent: Boolean = true;

  constructor(
    public fb: FormBuilder,
    public data: DataService) {

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

  guardar(): void {
    this.data.guardarChart1(
      this.dataFormGroup.value['input1'],
      this.dataFormGroup.value['input2'],
      this.dataFormGroup.value['input3'],
      this.dataFormGroup.value['input4'],
    )
  }

  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
  }

}
