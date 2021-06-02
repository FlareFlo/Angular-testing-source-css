import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private http: HttpClient, private cookieService: CookieService) {
	}

	redirectWhenLogged(input: string) {
		if (this.cookieService.get('token')) {
			window.location.href = input;
		} else {
			window.location.href = '/login';
		}
	}

	ngOnInit(): void {
		/*
		if (window.location.pathname !== '/login'
			&& window.location.pathname !== '/forgot'
			&& window.location.pathname !== '/reset'
			&& window.location.pathname !== ''
			&& this.cookieService.get('token') === undefined) {
			window.location.href = '/login';
		}
		 */
	}
}
