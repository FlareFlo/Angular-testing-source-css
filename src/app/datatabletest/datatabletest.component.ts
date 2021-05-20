import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-datatabletest',
	templateUrl: './datatabletest.component.html',
	styleUrls: ['./datatabletest.component.css']
})
export class DatatabletestComponent implements OnInit {

	constructor(private http: HttpClient, private cookieService: CookieService) {
	}

	readonly ROOT_URL_USR_ENT = 'https://backend.yap.dragoncave.dev/user/entries';
	readonly ROOT_URL_ENT = 'https://backend.yap.dragoncave.dev/entry';


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

	entries = [
		{
			title: 'Entry1',
			description: 'sus3'
		},
		{
			title: 'Entry2',
			description: 'sus2'
		},
		{
			title: 'Entry3',
			description: 'sus1'
		}
	];

	// tslint:enable:max-line-length
	drop(event: CdkDragDrop<{ title: string, description: string }[]>) {
		moveItemInArray(this.entries, event.previousIndex, event.currentIndex);
	}

	testsort() {
		this.entries.sort((a, b) => (a.description > b.description) ? 1 : -1);
	}

	getExistingEntries() {
		let header1 = new HttpHeaders();
		header1 = header1.append('Token', this.cookieService.get('token'));

		this.http.get(this.ROOT_URL_USR_ENT, {headers: header1})
			.subscribe(
				response => {
					console.log(response);
				},
				(error) => {
					console.error(error);
				}
			);
	}

	postEntry() {
		let header2 = new HttpHeaders().set('Content-Type', 'application/json'); // define the sent content to being a Json object
		header2 = header2.append('Token', this.cookieService.get('token'));
		this.http.post<any>(this.ROOT_URL_ENT, this.entry, {headers: header2}) // send the POST to create the user account
			.subscribe(
				(res) => {
					console.log(res);
				},
				(error) => {
					console.error(error);
				});
	}

	ngOnInit(): void {
	}

}
