import { Component, OnInit } from '@angular/core';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  backend:number = 0;
  frontend:number = 0;
  cloud:number = 0;
  frame:number = 0;
  sumar:number = 0;
  resultado:number = 0;

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['BackEnd', 'FrontEnd', 'Clouds', 'Frameworks'];

  public radarChartData: ChartDataSets[] = [
    { data: [this.frontend,this.backend,this.cloud,this.frame], label: 'Intento A' },
    { data: [this.frontend,this.backend,this.cloud,this.frame], label: 'Intento B' },
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  resultadoDatos(){
    this.sumar = this.backend + this.frontend + this.cloud + this.frame;
    this.resultado = this.sumar/2;
    console.log(`El resultado es ${this.sumar/2}`);
    

  }

}
