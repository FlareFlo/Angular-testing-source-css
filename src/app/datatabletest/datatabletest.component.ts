import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import {BoardsComponent} from '../boards/boards.component';

@Component({
	selector: 'app-datatabletest',
	templateUrl: './datatabletest.component.html',
	styleUrls: ['./datatabletest.component.css']
})
export class DatatabletestComponent implements OnInit {

	constructor(
		private http: HttpClient, private cookieService: CookieService, public dialog: MatDialog, public boardsComponent: BoardsComponent) {
	}

	readonly ROOT_URL_ENTRY = 'https://backend.yap.dragoncave.dev/entry';
	readonly ROOT_URL_BOARDS_ = 'https://backend.yap.dragoncave.dev/boards/';


	entry = {
		dueDate: 0,
		title: '',
		description: '',
		createDate: 0,
		entryID: 0,
	};

	entries = [
		{
			entryID: 0,
			createDate: 0,
			dueDate: 0,
			title: 'No Entries found!',
			description: 'Either the server is offline, or you cant see any entries yet.'
		}
	];

	placeholder: any;
	availableEntries!: [];
	dragging!: boolean;
	runonce = true;
	clickID: any = 0;
	showEdit: any = false;
	showCreate: any = false;
	boardSelect!: string;

	// tslint:enable:max-line-length
	drop(event: CdkDragDrop<{ title: string, description: string }[]>) {
		moveItemInArray(this.entries, event.previousIndex, event.currentIndex);
		this.showEdit = false;
	}

	sortByDueDate() {
		this.entries.sort((a, b) => (a.dueDate > b.dueDate) ? 1 : -1);
	}

	sortByTitle() {
		this.entries.sort((a, b) => (a.title > b.title) ? 1 : -1);
	}

	sortByDescription() {
		this.entries.sort((a, b) => (a.description > b.description) ? 1 : -1);
	}

	sortByID() {
		this.entries.sort((a, b) => (a.entryID > b.entryID) ? 1 : -1);
	}

	toggleCreate() {
		this.showCreate = !this.showCreate;
	}

	toggleEdit() {
		this.showCreate = !this.showCreate;
	}

	closeEdit() {
		this.showEdit = false;
	}

	closeCreate() {
		this.showCreate = false;
	}

	getEntryByID(i: number) {
		// tslint:disable-next-line:no-shadowed-variable
		const id = this.availableEntries[i];


		let header0 = new HttpHeaders();
		header0 = header0.append('Token', this.cookieService.get('token'));

		this.http.get(this.ROOT_URL_ENTRY + '/' + id, {headers: header0})
			.subscribe(
				response => {
					let pos: number;

					if (this.runonce) {
						pos = 0;
						this.runonce = false;
					} else {
						pos = this.entries.length;
					}

					this.placeholder = response;
					this.entries[pos] = {
						entryID: this.placeholder.entryID,
						createDate: this.placeholder.createDate,
						dueDate: this.placeholder.dueDate,
						title: this.placeholder.title,
						description: this.placeholder.description
					};
				},
				(error) => {
					console.error(error);
				}
			);
	}

	getExistingEntries() {
		if (this.boardSelect !== undefined && this.boardSelect !== '') {
			let header1 = new HttpHeaders();
			header1 = header1.append('Token', this.cookieService.get('token'));

			this.http.get(this.ROOT_URL_BOARDS_ + this.boardSelect + '/entries', {headers: header1})
				.subscribe(
					response => {
						// @ts-ignore
						this.availableEntries = response;
						this.getAllEntries();
					},
					(error) => {
						console.error(error);
					}
				);
		}
	}

	getAllEntries() {
		for (let i = 0; i < this.availableEntries.length; i++) {
			this.getEntryByID(i);
		}
	}

	putEntry(title: string, description: string) {
		let header2 = new HttpHeaders().set('Content-Type', 'application/json'); // define the sent content to being a Json object
		header2 = header2.append('Token', this.cookieService.get('token'));

		if (title !== '') {
			this.entries[this.clickID].title = title;
		}
		if (description !== '') {
			this.entries[this.clickID].description = description;
		}

		this.http.put<any>(this.ROOT_URL_ENTRY, this.entries[this.clickID], {headers: header2}) // send the POST to create the user account
			.subscribe(
				(res) => {
					console.log(res);
					this.showEdit = false;
				},
				(error) => {
					console.error(error);
				});
	}

	postEntry(title: string, description: string, dueDate: string) {
		let header2 = new HttpHeaders().set('Content-Type', 'application/json'); // define the sent content to being a Json object
		header2 = header2.append('Token', this.cookieService.get('token'));

		this.entry.title = title;
		this.entry.description = description;
		dueDate = dueDate.substr(3, 2) + '/' + dueDate.substr(0, 2) + '/' + dueDate.substr(6, 4);
		this.entry.dueDate = new Date(dueDate).getTime() / 1000;
		this.http.post<any>(this.ROOT_URL_BOARDS_ + this.boardSelect + '/entry', this.entry, {headers: header2})
			.subscribe(
				(res) => {
					console.log(res);
					this.showCreate = false;
					this.entries[this.entries.length] = this.entry;
				},
				(error) => {
					console.error(error);
				});
	}

	deleteEntry() {
		let header = new HttpHeaders().set('Content-Type', 'application/json'); // define the sent content to being a Json object
		header = header.append('Token', this.cookieService.get('token'));
		this.http.delete(this.ROOT_URL_ENTRY + '/' + this.entries[this.clickID].entryID, {headers: header})
			.subscribe(
				(res) => {
					console.log(res);
					location.reload();
				}
			);
	}


	handleClick($event: MouseEvent) {
		// @ts-ignore
		// tslint:disable-next-line:radix
		const locale = $event.target.id;
		// tslint:disable-next-line:triple-equals
		this.clickID = (this.entries.findIndex(x => x.entryID == locale));
		this.showEdit = true;
		if (this.dragging) {
			this.dragging = false;
			return;
		}
	}

	localizer(data: any) {
		return new Date(data).toLocaleDateString('de-DE');
	}

	doBoard(input: string) {
		this.boardSelect = input;
	}


	ngOnInit(): void {
		this.getExistingEntries();
		this.boardSelect = this.boardsComponent.clickID;
	}

}

/*
		openDialog(): void {
			this.dialog.open(DialogEditEntryComponent);
		}

		getReload() {
			console.log(this.clickID);
			// @ts-ignore
			return this.entries[this.clickID];
		}
	 */
