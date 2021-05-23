import {Component, OnInit} from '@angular/core';
import {EntriesComponent} from '../entries/entries.component';
import {BoardsComponent} from '../boards/boards.component';

@Component({
	selector: 'app-dialog-edit-board',
	templateUrl: './dialog-edit-board.component.html',
	styleUrls: ['./dialog-edit-board.component.css']
})
export class DialogEditBoardComponent implements OnInit {

	constructor(public datatabletestComponent: EntriesComponent, public boardsComponent: BoardsComponent) {
	}

	ngOnInit(): void {
	}

}
