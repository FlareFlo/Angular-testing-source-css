import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';

@Component({
	selector: 'app-datatabletest',
	templateUrl: './datatabletest.component.html',
	styleUrls: ['./datatabletest.component.css']
})
export class DatatabletestComponent implements OnInit {

	constructor(private http: HttpClient, private cookieService: CookieService, public dialog: MatDialog) {
	}

	readonly ROOT_URL_BRD_8_ENT = 'https://backend.yap.dragoncave.dev/boards/8/entries';
	readonly ROOT_URL_ENT = 'https://backend.yap.dragoncave.dev/entry/';


	example = {
		entryID: null,
		creator: {
			userid: null,
			username: null,
			createDate: null,
			lastLogin: null,
			emailAddress: null
		},
		createDate: null,
		dueDate: 0,
		title: '',
		description: ''
	};

	entry = {
		dueDate: 0,
		title: '',
		description: ''
	};

	placeholder: any;
	availableEntries!: [];

	entries = [
		{
			entryID: 0,
			createDate: 0,
			dueDate: 0,
			title: 'No Entries found!',
			description: 'Either the server is offline, or you cant see any entries yet.'
		}
	];

	dragging!: boolean;
	runonce = true;
	clickID: any = 0;
	showEdit: any = true;

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


	getEntryByID(i: number) {
		// tslint:disable-next-line:no-shadowed-variable
		const id = this.availableEntries[i];


		let header0 = new HttpHeaders();
		header0 = header0.append('Token', this.cookieService.get('token'));

		this.http.get(this.ROOT_URL_ENT + id, {headers: header0})
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
		let header1 = new HttpHeaders();
		header1 = header1.append('Token', this.cookieService.get('token'));

		this.http.get(this.ROOT_URL_BRD_8_ENT, {headers: header1})
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

	getAllEntries() {
		for (let i = 0; i < this.availableEntries.length; i++) {
			this.getEntryByID(i);
		}
	}

	putEntry(title: string, description: string) {
		let header2 = new HttpHeaders().set('Content-Type', 'application/json'); // define the sent content to being a Json object
		header2 = header2.append('Token', this.cookieService.get('token'));

		this.entries[this.clickID].title = title;
		this.entries[this.clickID].description = description;
		this.http.put<any>(this.ROOT_URL_ENT, this.entries[this.clickID], {headers: header2}) // send the POST to create the user account
			.subscribe(
				(res) => {
					console.log(res);
					this.showEdit = false;
				},
				(error) => {
					console.error(error);
				});
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


	ngOnInit(): void {
		this.getExistingEntries();
		this.showEdit = false;
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
