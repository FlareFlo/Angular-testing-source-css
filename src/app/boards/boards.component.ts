import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';
import {MatDialog} from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-boards',
	templateUrl: './boards.component.html',
	styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

	constructor(private http: HttpClient, private cookieService: CookieService, public dialog: MatDialog) {
	}

	boards = [
		{
			boardID: 0,
			name: '',
			createDate: 0
		}
	];

	dragging!: boolean;

	drop(event: CdkDragDrop<{ title: string, description: string }[]>) {
		moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
	}

	handleClick($event: MouseEvent) {
		if (this.dragging) {
			this.dragging = false;
			return;
		}
	}

	ngOnInit(): void {
	}
}
