import { Component,ElementRef,OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
declare var $:JQueryStatic;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  treedata:any[];

  constructor(private http: Http,private el: ElementRef){

  }

  ngOnInit() {
    let url = "http://www.json-generator.com/api/json/get/bMsUjDxRaq?indent=2";
    this.http
      .get(url)
      .map((res:Response) => res.json())
      .subscribe((res) => {
        this.treedata = res;
      });
  }
  ngAfterViewInit() {
    console.log("$(this.el.nativeElement).find('.tbrow:even').length => ",$(this.el.nativeElement).find(".tbrow:even").length);
    $(this.el.nativeElement).find(".tbrow:even").addClass("tbrow-even");
  }
}
