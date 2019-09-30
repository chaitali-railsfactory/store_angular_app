import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        name: "Hi",
        description: "Hi1",
        price: 500
      },
      {
        name: "Hi1",
        description: "Hi12",
        price: 800
      },
      {
        name: "Hi2",
        description: "Hi22",
        price: 700
      }
    ]
  }

  share(){
    window.alert('The product has been shared!');
  }
  onNotify(){
    window.alert('The product has been notified!');
  }

}
