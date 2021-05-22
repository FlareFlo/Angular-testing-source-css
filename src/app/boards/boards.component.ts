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
	readonly ROOT_URL_BOARD = 'https://backend.yap.dragoncave.dev/boards';

	boards = [
		{
			boardID: 0,
			name: '',
			createDate: 0
		}
	];

	board = {
		boardID: 0,
		name: '',
		createDate: 0
	};

	availableBoards!: [];
	runonce = true;
	placeholder: any;
	clickID: any = 0;
	showEdit: any = false;
	showCreate: any = false;
	locale = 0;

	drop(event: CdkDragDrop<{ title: string, description: string }[]>) {
		moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
	}

	handleClick($event: MouseEvent) {
		// @ts-ignore
		this.locale = $event.target.id;
		// tslint:disable-next-line:triple-equals
		this.clickID = (this.boards.findIndex(x => x.boardID == this.locale));
		this.showEdit = true;
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
		for (let i = 0; i < this.availableBoards.length; i++) {
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

	postBoard(name: string) {
		if (name !== '' && name !== undefined) {
			let header2 = new HttpHeaders().set('Content-Type', 'application/json'); // define the sent content to being a Json object
			header2 = header2.append('Token', this.cookieService.get('token'));

			this.board.name = name;
			this.http.post<any>(this.ROOT_URL_BOARD, this.board, {headers: header2})
				.subscribe(
					(res) => {
						console.log(res);
						this.boards[this.boards.length] = this.board;
					},
					(error) => {
						console.error(error);
					});
		}
	}

	/*
	putBoard(name: string) {
		let header2 = new HttpHeaders().set('Content-Type', 'application/json'); // define the sent content to being a Json object
		header2 = header2.append('Token', this.cookieService.get('token'));

		if (name !== '') {
			this.boards[this.clickID].name = name;
		}

		this.http.put<any>(this.ROOT_URL_ENTRY, this.boards[this.clickID], {headers: header2}) // send the POST to create the user account
			.subscribe(
				(res) => {
					console.log(res);
				},
				(error) => {
					console.error(error);
				});
	}
	 */

	goToBoard() {
		this.cookieService.put('activeBoard', this.locale.toString());
		location.href = '/entries';
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

	toggleCreate() {
		this.showCreate = !this.showCreate;
	}

	toggleEdit() {
		this.showEdit = !this.showEdit;
	}

	localizer(data: any) {
		return new Date(data).toLocaleDateString('de-DE');
	}


	ngOnInit(): void {
		this.getExistingBoards();
	}
}
