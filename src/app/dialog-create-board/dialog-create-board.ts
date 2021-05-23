import {Component, OnInit} from '@angular/core';
import {DatatabletestComponent} from '../entries/datatabletest.component';
import {BoardsComponent} from '../boards/boards.component';

@Component({
	selector: 'app-dialog-edit-entry',
	templateUrl: './dialog-create-broad.html',
	styleUrls: ['./dialog-create-board.css']
})
export class DialogCreateBoardComponent implements OnInit {

	constructor(public datatabletestComponent: DatatabletestComponent, public boardsComponent: BoardsComponent) {
	}


	ngOnInit(): void {

	}


}
