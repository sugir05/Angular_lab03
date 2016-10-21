import { Component, Input } from '@angular/core';
import { Product } from './Product';
import { CalculateTotalPricePipe } from './calculate-total-price.pipe';
@Component({
    selector: 'my-product-detail',
    template: `
    <div *ngIf="product">
      <h2>{{product.name}} details!</h2>
      <div><label>id: </label>{{product.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="product.name" placeholder="name"/>
      </div>
      <div>
        <label>price: </label>
        <input [(ngModel)]="product.price" placeholder="price"/>
      </div>
      <div>
        <label>quatity: </label>
        <input [(ngModel)]="quantity" placeholder="quantity"/>
      </div>
      <div>
        <p>Toatl Price: {{product.price | calculatePrice: quantity}}</p>
      </div>
    </div>
  `
})


export class ProductDetailComponent {
    @Input()
    product: Product;
    quantity=1;
}
