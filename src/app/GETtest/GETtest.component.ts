import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'app-GETtest',
	templateUrl: './GETtest.component.html',
	styleUrls: ['./GETtest.component.css']
})
export class GETtestComponent {

	readonly ROOT_URL = 'https://backend.yap.dragoncave.dev';

	returnvalue: any;

	constructor(private http: HttpClient, private cookieService: CookieService) {
	}

	token!: string;

	getStuff(input: string) {
		this.token = this.cookieService.get('token');

		let headerS = new HttpHeaders().set('Content-Type', 'application/json');
		headerS = headerS.append('Token', this.token);

		this.returnvalue = this.http.get(this.ROOT_URL + input, {headers: headerS})
			.toPromise()
			.then(data => {
					this.returnvalue = data;
				},
				(error) => {
					console.error(error);
				}
			);
	}

	// tslint:disable-next-line:use-lifecycle-interface
	ngOnInit(): void {
	}

}
