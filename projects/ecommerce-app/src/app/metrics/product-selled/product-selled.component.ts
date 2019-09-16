import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecm-product-selled',
  templateUrl: './product-selled.component.html',
  styleUrls: ['./product-selled.component.scss']
})
export class ProductSelledComponent implements OnInit {

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
    "value": 120
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

  public multi = [
  {
    "name": "IPhone X",
    "series": [
      {
        "name": "2019",
        "value": 120
      },
      {
        "name": "2018",
        "value": 100
      }
    ]
  },
  {
    "name": "Samsung S9",
    "series": [
      {
        "name": "2019",
        "value": 200
      },
      {
        "name": "2018",
        "value": 90
      }
    ]
  },
  {
    "name": "Samsung S9 Plus",
    "series": [
      {
        "name": "2019",
        "value": 150
      },
      {
        "name": "2018",
        "value": 110
      }
    ]
  },
  {
    "name": "Samsung S10",
    "series": [
      {
        "name": "2019",
        "value": 100
      },
      {
        "name": "2018",
        "value": 90
      }
    ]
  },
  {
    "name": "Samsung S10 Plus",
    "series": [
      {
        "name": "2019",
        "value": 210
      },
      {
        "name": "2018",
        "value": 100
      }
    ]
  },
  {
    "name": "Samsung Note 10 Plus",
    "series": [
      {
        "name": "2019",
        "value": 100
      },
      {
        "name": "2018",
        "value": 0
      }
    ]
  }
];

  constructor() { }

  ngOnInit() {
  }
}
