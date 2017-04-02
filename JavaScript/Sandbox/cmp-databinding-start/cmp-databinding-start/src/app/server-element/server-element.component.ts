import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { 
    console.log("constructor called!");
  }

  ngOnChanges(cnahges: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(cnahges);
  }

  ngOnInit() {
    console.log("ngOnInit called!");
  }

}