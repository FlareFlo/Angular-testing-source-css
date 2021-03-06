import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-datatabletest',
	templateUrl: './entries.component.html',
	styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

	constructor(
		private http: HttpClient, private cookieService: CookieService) {
	}

	readonly ROOT_URL_ENTRY = 'https://backend.yap.dragoncave.dev/entry';
	readonly ROOT_URL_ENTRY_ = 'https://backend.yap.dragoncave.dev/entry/';
	readonly ROOT_URL_BOARDS_ = 'https://backend.yap.dragoncave.dev/boards/';


	entry = {
		dueDate: 0,
		title: 'No boards available or the server is offline',
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
	boardSelect: string = this.cookieService.get('activeBoard');
	locale = 0;
	timeleft: any;
	toggleSort = true;

	// tslint:enable:max-line-length
	drop(event: CdkDragDrop<{ title: string, description: string }[]>) {
			moveItemInArray(this.entries, event.previousIndex, event.currentIndex);
			this.showEdit = false;
	}

	sortByDueDate() {
		if (this.toggleSort) {
			this.entries.sort((a, b) => (b.dueDate > a.dueDate) ? 1 : -1);
		} else {
			this.entries.sort((a, b) => (a.dueDate > b.dueDate) ? 1 : -1);
		}
		this.toggleSort = !this.toggleSort;
	}

	sortByTitle() {
		if (this.toggleSort) {
			this.entries.sort((a, b) => (b.title > a.title) ? 1 : -1);
		} else {
			this.entries.sort((a, b) => (a.title > b.title) ? 1 : -1);
		}
		this.toggleSort = !this.toggleSort;
	}

	sortByCreateDate() {
		if (this.toggleSort) {
			this.entries.sort((a, b) => (b.createDate > a.createDate) ? 1 : -1);
		} else {
			this.entries.sort((a, b) => (a.createDate > b.createDate) ? 1 : -1);
		}
		this.toggleSort = !this.toggleSort;
	}

	toggleCreate() {
		this.showCreate = !this.showCreate;
	}

	toggleEdit() {
		this.showEdit = !this.showEdit;
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
					this.sortByTitle();
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

	putEntry(title: string, description: string, dueDate: string) {
		let header2 = new HttpHeaders().set('Content-Type', 'application/json'); // define the sent content to being a Json object
		header2 = header2.append('Token', this.cookieService.get('token'));

		this.entries[this.clickID].dueDate = +new Date(dueDate);
		if (title !== '') {
			this.entries[this.clickID].title = title;
		}
		if (description !== '') {
			this.entries[this.clickID].description = description;
		}

		// tslint:disable-next-line:max-line-length
		this.http.put<any>(this.ROOT_URL_ENTRY_ + this.entries[this.clickID].entryID, this.entries[this.clickID], {headers: header2}) // send the POST to create the user account
			.subscribe(
				(res) => {
					console.log(res);
					this.showEdit = false;
					window.location.reload();
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
		// tslint:disable-next-line:radix
		this.entry.dueDate = +new Date(dueDate);
		this.http.post<any>(this.ROOT_URL_BOARDS_ + this.boardSelect + '/entry', this.entry, {headers: header2})
			.subscribe(
				(res) => {
					console.log(res);
					this.showCreate = false;
					this.entries[this.entries.length] = this.entry;
					window.location.reload();
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

	handleClickCreate($event: MouseEvent) {
		// @ts-ignore
		this.locale = $event.target.id;
		// tslint:disable-next-line:triple-equals
		this.clickID = (this.entries.findIndex(x => x.entryID == this.locale));
		this.showCreate = true;
	}

	handleClickEdit($event: MouseEvent) {
		if (this.entries[0].entryID !== 0) {
			// @ts-ignore
			// tslint:disable-next-line:radix
			const locale = $event.target.id;
			this.locale = locale;
			// tslint:disable-next-line:triple-equals
			this.clickID = (this.entries.findIndex(x => x.entryID == locale));

			if (this.entries[this.clickID].dueDate > new Date().getTime()) {
				this.timeleft = new Date(this.entries[this.clickID].dueDate - new Date().getTime()).getDate() - 1;
			} else {
				this.timeleft = '0';
			}
			// @ts-ignore
			this.showEdit = true;
			if (this.dragging) {
				this.dragging = false;
				return;
			}
		}
	}

	convertToLocal() {
		const input = this.entries[this.clickID].dueDate;
		if (input === 0) {
			return 'No due date';
		}
		return new Date(input);
	}

	ngOnInit(): void {
		this.getExistingEntries();
	}

}
