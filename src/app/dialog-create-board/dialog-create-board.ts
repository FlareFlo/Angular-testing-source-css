import {Component, OnInit} from '@angular/core';
import {EntriesComponent} from '../entries/entries.component';
import {BoardsComponent} from '../boards/boards.component';

@Component({
	selector: 'app-dialog-edit-entry',
	templateUrl: './dialog-create-broad.html',
	styleUrls: ['./dialog-create-board.css']
})
export class DialogCreateBoardComponent implements OnInit {

	constructor(public datatabletestComponent: EntriesComponent, public boardsComponent: BoardsComponent) {
	}


	ngOnInit(): void {

	}


}
