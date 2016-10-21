import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { CalculateTotalPricePipe } from './calculate-total-price.pipe';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,CalculateTotalPricePipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
