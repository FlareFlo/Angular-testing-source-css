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

	ngOnInit(): void {
		if (window.location.pathname !== '/login'
			&& window.location.pathname !== '/forgot'
			&& window.location.pathname !== '/reset'
			&& this.cookieService.get('token') === undefined) {
			window.location.href = '/login';
		}
	}
}
