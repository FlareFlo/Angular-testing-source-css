import {Component, OnInit} from '@angular/core';
import {DatatabletestComponent} from '../datatabletest/datatabletest.component';

@Component({
	selector: 'app-dialog-edit-entry',
	templateUrl: './dialog-edit-entry.component.html',
	styleUrls: ['./dialog-edit-entry.component.css']
})
export class DialogEditEntryComponent implements OnInit {

	constructor(public datatabletestComponent: DatatabletestComponent) {
	}



	ngOnInit(): void {
	}

}