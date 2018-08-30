import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ng-style',
	templateUrl: './ng-style.component.html',
	styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

	size:number = 30;

	constructor() { }

	ngOnInit() {
	}

	increaseSize(){
		this.size = this.size + 3;
	}

	decreaseSize(){
		this.size = this.size - 3;
	}

}
