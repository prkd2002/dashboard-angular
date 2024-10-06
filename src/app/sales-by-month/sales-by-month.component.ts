import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.scss'
})
export class SalesByMonthComponent {
  Chart = new Chart({ 
    chart: {
    type: 'line',
    height: 325
  },
  title: {
    text: 'Month wise sales'
  },
  xAxis: {
    categories: [
      'jan',
      'Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'
    ]
  },
  yAxis: {
    title: {
     text: 'Revenue in $'
    }

  },
  series: [
    {
      name: "Arizona",
      type: "line",
      data: [70, 69,95,145,182,215,252,265,233,183,142,190],
      color: '#044342'


    },
    {
      name: "California",
      type: "line",
      data: [85, 78, 110, 160, 200, 240, 20, 290, 250, 210, 160, 210],
      color: '#ed9e20' 
  },
  {
      name: "Nevada",
      type: "line",
      data: [65, 72, 90, 10, 170, 205, 240, 255, 220, 180, 140, 195],
      color: '#7e0505'
  }
  ],
  credits: {
    enabled: false
  }


}
   

  );

}
