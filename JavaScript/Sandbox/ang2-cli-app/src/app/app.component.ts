import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultra Racing';
  carParts = [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5,
    "available": true

  },
  {
    "id": 2,
    "name": "Cool Tires",
    "description": "These tires are the very best",
    "inStock": 2,
    "available": true

  },
  {
    "id": 3,
    "name": "Expensive Tires",
    "description": "These tires are the very best",
    "inStock": 6,
    "available": false

  },
  {
    "id": 4,
    "name": "Mega Tires",
    "description": "These tires are the very best",
    "inStock": 3,
    "available": true

  }
  ]
}
