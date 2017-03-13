import { Component } from '@angular/core';

@Component({
    selector: 'car-parts',
    template: `<ul>
  <p>There are {{totalCarParts()}} total parts in stock</p>
  <li *ngFor="let carPart of carParts">
    <h2>{{carPart.name}}</h2>
    <p>{{carPart.description}}</p>
    <p>{{carPart.price | currency:'USD':true}}</p>
    <p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock</p>
    <p *ngIf="carPart.inStock === 0">Out of Stock</p>
    

  </li>
</ul>`,
})

export class CarPartsComponent {
    carParts = [{
        "id": 1,
        "name": "Super Tires",
        "description": "These tires are the very best",
        "inStock": 0,
        "price": 4.95

    },
    {
        "id": 2,
        "name": "Cool Tires",
        "description": "These tires are the very best",
        "inStock": 2,
        "price": 6.5

    },
    {
        "id": 3,
        "name": "Expensive Tires",
        "description": "These tires are the very best",
        "inStock": 0,
        "price": 7.95

    },
    {
        "id": 4,
        "name": "Mega Tires",
        "description": "These tires are the very best",
        "inStock": 3,
        "price": 10

    }
    ]
    totalCarParts() {
        let sum = 0;
        for (let carPart of this.carParts) {
            sum += carPart.inStock;
        }
        return sum;
    }
}