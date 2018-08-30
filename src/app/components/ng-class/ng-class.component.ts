import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  alert: string ="succes";
  loading:boolean = false;
  icon:string = 'save';

  constructor() { }

  ngOnInit() {
  }

  execute(){
  	this.loading = true;
  	this.icon = 'refresh';

  	setTimeout(()=>{this.loading = false; this.icon = 'done'}, 3000);
  }

}
