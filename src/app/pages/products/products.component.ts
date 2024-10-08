import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Productos } from '../../models/test';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {  
  productos:Productos[] = [
  {
    name:'Producto 1',
    desc:'',
    price:0.0,
    img:'assets/img/producto1.jpg'
},
  {
    name:'Producto 2',
    desc:'',
    price:0.0,
    img:'assets/img/producto2.jpg'
},
  {
    name:'Producto 3',
    desc:'',
    price:0.0,
    img:'assets/img/producto3.jpg'
},
];
}
