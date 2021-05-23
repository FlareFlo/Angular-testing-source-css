import {Component, OnInit} from '@angular/core';
import {EntriesComponent} from '../entries/entries.component';
import {BoardsComponent} from '../boards/boards.component';
import {Subject} from 'rxjs';

@Component({
	selector: 'app-dialog-edit-board',
	templateUrl: './dialog-edit-board.component.html',
	styleUrls: ['./dialog-edit-board.component.css']
})
export class DialogEditBoardComponent implements OnInit {

	constructor(public entriesComponent: EntriesComponent, public boardsComponent: BoardsComponent) {

	}


	ngOnInit(): void {
	}

}
