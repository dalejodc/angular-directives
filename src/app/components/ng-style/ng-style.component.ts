import { Component, OnInit } from '@angular/core';
import { toast } from 'angular2-materialize';

@Component({
	selector: 'app-ng-style',
	templateUrl: './ng-style.component.html',
	styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

	size:number = 30;
	hexa:string ='#ffa726 ';

	constructor() { }

	ngOnInit() {
	}

	increaseSize(){
		this.size = this.size + 1;
	}

	decreaseSize(){
		if(this.size >20 && this.size <100){
			toast("Be careful, It could disappear!", 1000);
			this.size = this.size - 3;
		}
		if(this.size >10 && this.size <20){
			toast("Are you sure?", 1000);
			this.size = this.size - 3;
		}
		if(this.size >0 && this.size <10){
			toast("It is enough!", 1000);
		}
	}

}
