import { Component,ElementRef,OnInit } from '@angular/core';
declare var $:JQueryStatic;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  treedata:any[];

  constructor(private el: ElementRef){

  }

  ngOnInit() {
    this.treedata = [
      {
        seq:'100',
        name:'A',
        submenu:[
          {
            name:'A-1',
            seq:'110',
            submenu:[{
              name:'A-1-1',
              seq:'111',
              submenu:[]
            }]
          },
          {name:'A-2',seq:'120',submenu:[]},
          {name:'A-3',seq:'130',submenu:[]}
        ]
      },
      {
        seq:'200',
        name:'B',
        submenu:[
          {
            name:'B-1',
            seq:'210',
            submenu:[{
              name:'B-1-1',
              seq:'211',
              submenu:[]
            }]
          },
          {name:'B-2',seq:'220',submenu:[]},
          {name:'B-3',seq:'230',submenu:[]}
        ]
      }
    ];
  }
  ngAfterViewInit() {
    $(this.el.nativeElement).find(".tbrow:even").addClass("tbrow-even");
  }
}
