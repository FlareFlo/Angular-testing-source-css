import {Component, OnInit} from '@angular/core';
import {DatatabletestComponent} from '../entries/datatabletest.component';
import {BoardsComponent} from '../boards/boards.component';

@Component({
	selector: 'app-dialog-edit-entry',
	templateUrl: './dialog-edit-entry.component.html',
	styleUrls: ['./dialog-edit-entry.component.css']
})
export class DialogEditEntryComponent implements OnInit {

	constructor(public datatabletestComponent: DatatabletestComponent, public boardsComponent: BoardsComponent) {
	}


	ngOnInit(): void {

	}


}
