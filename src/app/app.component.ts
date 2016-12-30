import { Component,ElementRef,OnInit,AfterViewInit,AfterViewChecked } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
declare var $:JQueryStatic;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked {

  treedata:any[];

  constructor(private http: Http,private elementRef: ElementRef){

  }

  ngOnInit() {
    let url = "http://beta.json-generator.com/api/json/get/NJAMxaRNz";
    this.http
      .get(url)
      .map((res:Response) => res.json())
      .subscribe((res) => {
        this.treedata = res;
        console.log("Receive Treedata !!!!!")
      });
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    let $tbrowEven = $(this.elementRef.nativeElement).find(".tbrow:even");
    console.log(".tbrow:even length => ",$tbrowEven.length);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
    let $tbrowEven = $(this.elementRef.nativeElement).find(".tbrow:even");
    console.log(".tbrow:even length => ",$tbrowEven.length);
    $tbrowEven.addClass("tbrow-even");
  }

}
