import {Component, OnInit} from '@angular/core';
import {EntriesComponent} from '../entries/entries.component';
import {BoardsComponent} from '../boards/boards.component';

@Component({
	selector: 'app-dialog-create-entry',
	templateUrl: './dialog-create-entry.component.html',
	styleUrls: ['./dialog-create-entry.component.css']
})
export class DialogCreateEntryComponent implements OnInit {

	constructor(public entriesComponent: EntriesComponent, public boardsComponent: BoardsComponent) {
	}

	ngOnInit(): void {
	}

}
