import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'tree-table',
  styleUrls:["./tree-table.component.css"],
  templateUrl:"./tree-table.component.html"
})
export class TreeTableComponent implements OnInit {
  @Input() data:any[];
  @Input() level:number;

  constructor(){
  }

  ngOnInit() {
    this.level = this.level + 1;
  }
}
