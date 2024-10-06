import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-last-few-transactions',
  templateUrl: './last-few-transactions.component.html',
  styleUrl: './last-few-transactions.component.scss'
})
export class LastFewTransactionsComponent {
  transactions = [
    {
      id:1,
      title: "Ryzen 5 Processor",
      price: "$299",
      shop: "Tech Pro",
      location: "East Hartford",
      status: "Pending",
      imgSrc: "https://th.bing.com/th/id/OIP.9eNH_bEpi2DN8aB7S-1vIAAAAA?rs=1&pid=ImgDetMain"
    },
    {
      id: 2,
      title: "iPhone 14 Pro Max",
      price: "$1,099",
      shop: "Apple Store",
      location: "San Francisco",
      status: "In Stock",
      imgSrc: "https://th.bing.com/th/id/OIP.sZLhHkjvBc9B8OyoC8f92QHaEK?pid=ImgDet&rs=1"
    },
    {
      id: 3,
      title: "Samsung 65-inch QLED TV",
      price: "$1,299",
      shop: "Best Buy",
      location: "New York",
      status: "In Stock",
      imgSrc: "https://th.bing.com/th/id/OIP.AHRzFztNErYlGAmM7vAnpQHaEK?pid=ImgDet&rs=1"
    },
    {
      id: 4,
      title: "PlayStation 5",
      price: "$499",
      shop: "GameStop",
      location: "Los Angeles",
      status: "Out of Stock",
      imgSrc: "https://th.bing.com/th/id/OIP.GpZJztjDxnM_s7Ev_eXyiAHaE6?pid=ImgDet&rs=1"
    },
    {
      id: 5,
      title: "MacBook Air M2",
      price: "$1,199",
      shop: "Apple Store",
      location: "Boston",
      status: "Pending",
      imgSrc: "https://th.bing.com/th/id/OIP.riDA1m_j1n_hkMckA5rlKAHaEo?pid=ImgDet&rs=1"
    },
    {
      id: 6,
      title: "Bose Noise Cancelling Headphones 700",
      price: "$379",
      shop: "Amazon",
      location: "Seattle",
      status: "In Stock",
      imgSrc: "https://th.bing.com/th/id/OIP.VgnmcS_MisKlyuGDOQvxFwHaFj?pid=ImgDet&rs=1"
    },
    {
      id: 7,
      title: "GoPro Hero 10",
      price: "$499",
      shop: "Walmart",
      location: "Houston",
      status: "In Stock",
      imgSrc: "https://th.bing.com/th/id/OIP.nJNk2ls-oxAa6RXAExO-pwHaD4?pid=ImgDet&rs=1"
    },
    {
      id: 8,
      title: "Dyson V11 Cordless Vacuum",
      price: "$599",
      shop: "Dyson Store",
      location: "Chicago",
      status: "Pending",
      imgSrc: "https://th.bing.com/th/id/OIP.Qgwhb8BrR5UEXDHQXOT8CgHaEK?pid=ImgDet&rs=1"
    },
    {
      id: 9,
      title: "Sony Alpha 7 IV Mirrorless Camera",
      price: "$2,499",
      shop: "B&H Photo",
      location: "New York",
      status: "In Stock",
      imgSrc: "https://th.bing.com/th/id/OIP.sP6zrNSHnlgBrjfmbJpHUAHaE8?pid=ImgDet&rs=1"
    },
    {
      id: 10,
      title: "Logitech MX Master 3S Wireless Mouse",
      price: "$99",
      shop: "Logitech Store",
      location: "San Diego",
      status: "In Stock",
      imgSrc: "https://th.bing.com/th/id/OIP.MOR5MwSi5cr_sJ4FfJUmZAHaHa?pid=ImgDet&rs=1"
    }
  ]

}
