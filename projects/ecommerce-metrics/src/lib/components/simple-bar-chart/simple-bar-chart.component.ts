import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-simple-bar-chart',
  templateUrl: './simple-bar-chart.component.html',
  styleUrls: ['./simple-bar-chart.component.css']
})
export class SimpleBarChartComponent implements OnInit {

  view: any[] = [600, 400];
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Product';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  //pie
  showLabels = true;
  // data goes here
  public single = [
    {
      "name": "IPhone X",
      "value": 150
    },
    {
      "name": "Samsung S9",
      "value": 200
    },
    {
      "name": "Samsung S9 Plus",
      "value": 150
    },
    {
      "name": "Samsung S10",
      "value": 100
    },
    {
      "name": "Samsung S10 Plus",
      "value": 210
    },
    {
      "name": "Samsung Note 10 Plus",
      "value": 100
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {

  }
}
