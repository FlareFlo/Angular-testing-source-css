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
    if (window.location.pathname === '/login') {

    } else {
      if (this.cookieService.get('token') == null && this.cookieService.get('guest') == null) {

        if (confirm('Do you want to continue as a guest? (no login found)')) {
          this.cookieService.putObject('guest', {value: true});
        } else {
          window.location.href = '/login';
        }
      }

    }
    if (this.cookieService.get('token') !== null){
      this.cookieService.remove('guest');
    }
  }
}



