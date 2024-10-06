import { Component } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrl: './top-three-products.component.scss'
})
export class TopThreeProductsComponent {
  Chart = new Chart({ 
    chart: {
    type: 'bar',
    height: 225
  },
  title: {
    text: 'Month wise sales'
  },
  xAxis: {
    categories: [
        'Lenova ThinkPas E15', 'PS5', 'Mac Book Pro Air'
    ]
  },
  yAxis: {
    title: {
     text: ''
    }

  },
  series: [
   {
    type: 'bar',
    showInLegend: false,
    data:[ {
      name: 'Lenova ThinkPad E15',
      y: 45.0,
      color: '#1F618D'
  },
  {
      name: 'PS5',
      y: 55.0,
      color: '#F39C12'
  },
  {
      name: 'MacBook Pro Air',
      y: 65.0,
      color: '#28B463'
  }

    ]
   }
  ],
  credits: {
    enabled: false
  }


}
   

  );

}
