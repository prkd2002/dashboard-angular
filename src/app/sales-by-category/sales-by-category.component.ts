import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrl: './sales-by-category.component.scss'
})
export class SalesByCategoryComponent {
  Chart = new Chart({ 
    chart: {
    type: 'pie',
    height: 325
  },
  title: {
    text: 'Category wise sales'
  },
  xAxis: {
    categories: [
      'Electronics', 'Groceries', 'Cosmetics', 'Clothes', 'Appliances'
    ]
  },
  yAxis: {
    title: {
     text: 'Revenue in %'
    }

  },
  series: [
    {
      type: 'pie',
      data: [
        {
          name:'Electronics',
          y: 41.0,
          color: '#044242'
        },
        {
          name: 'Groceries',
          y: 35.5,
          color: '#FF5733'
      },
      {
          name: 'Cosmetics',
          y: 25.0,
          color: '#C70039'
      },
      {
          name: 'Clothes',
          y: 30.0,
          color: '#900C3F'
      },
      {
          name: 'Appliances',
          y: 18.5,
          color: '#581845'
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
