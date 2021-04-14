import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  constructor(private  http: HttpClient, private cookieService: CookieService) {
  }

  readonly ROOT_URL = 'https://backend.yap.dragoncave.dev/user/';

  getresponse = {};

  packageobject = {
    username: 'testuser1',
    emailAddress: 'test1@mail.com',
    password: 'testpassword1'
  };

  idinput!: string;

  token!: string;

  doPUT() {
    this.token = this.cookieService.get('token');
    let headerS = new HttpHeaders().set('Content-Type', 'application/json');
    headerS = headerS.append('Token', this.token);
    this.http.put<any>(this.ROOT_URL, this.packageobject, {headers: headerS})
      .subscribe();
  }

  getStuff() {
    this.token = this.cookieService.get('token');
    let headerS = new HttpHeaders().set('Content-Type', 'application/json');
    headerS = headerS.append('Token', this.token);
    this.getresponse = this.http.get<object>(this.ROOT_URL, {headers: headerS})
      .toPromise()
      .then();
  }


  doUsername(userinput: string) {
    this.packageobject.username = userinput;
  }

  doEmail(emailinput: string) {
    this.packageobject.emailAddress = emailinput;
  }

  doPassword(passwordinput: string) {
    this.packageobject.password = passwordinput;
  }

  ngOnInit(): void {
  }
}
