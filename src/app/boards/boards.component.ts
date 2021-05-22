import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

	readonly ROOT_URL_BOARDS_USER = 'https://backend.yap.dragoncave.dev/boards/user';
	readonly ROOT_URL_BOARD_ = 'https://backend.yap.dragoncave.dev/boards/';

	boards = [
		{
			boardID: 0,
			name: '',
			createDate: 0
		}
	];

	dragging!: boolean;
	availableBoards!: [];
	runonce = true;
	placeholder: any;

	drop(event: CdkDragDrop<{ title: string, description: string }[]>) {
		moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
	}

	handleClick($event: MouseEvent) {
		if (this.dragging) {
			this.dragging = false;
			return;
		}
	}

	getExistingBoards() {
		let header1 = new HttpHeaders();
		header1 = header1.append('Token', this.cookieService.get('token'));

		this.http.get(this.ROOT_URL_BOARDS_USER, {headers: header1})
			.subscribe(
				response => {
					// @ts-ignore
					this.availableBoards = response;
					this.getAllBoards();
				},
				(error) => {
					console.error(error);
				}
			);
	}

	getAllBoards() {
		for (let i = 0; i < this.boards.length + 1; i++) {
			this.getBoardByID(i);
		}
	}

	getBoardByID(i: number) {
		// tslint:disable-next-line:no-shadowed-variable
		const id = this.availableBoards[i];
		let header0 = new HttpHeaders();
		header0 = header0.append('Token', this.cookieService.get('token'));
		this.http.get(this.ROOT_URL_BOARD_ + id, {headers: header0})
			.subscribe(
				response => {
					let pos: number;

					if (this.runonce) {
						pos = 0;
						this.runonce = false;
					} else {
						pos = this.boards.length;
					}
					this.placeholder = response;
					this.boards[pos] = {
						boardID: this.placeholder.boardID,
						name: this.placeholder.name,
						createDate: this.placeholder.createDate
					};
				},
				(error) => {
					console.error(error);
				}
			);
	}

	sortByName() {
		this.boards.sort((a, b) => (a.name > b.name) ? 1 : -1);
	}

	sortById() {
		this.boards.sort((a, b) => (a.boardID > b.boardID) ? 1 : -1);
	}

	sortByCreateDate() {
		this.boards.sort((a, b) => (a.createDate > b.createDate) ? 1 : -1);
	}


	ngOnInit(): void {
		this.getExistingBoards();
	}
}
