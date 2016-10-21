import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'calculatePrice'})
export class CalculateTotalPricePipe implements PipeTransform {

    transform(price: number, quantity: number): number {
        return price*quantity;
    }
}
