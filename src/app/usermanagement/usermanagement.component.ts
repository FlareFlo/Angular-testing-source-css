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
    this.getStuff();
  }

  readonly ROOT_URL = 'https://backend.yap.dragoncave.dev/user/';


  packageobject = {
    username: '',
    emailAddress: '',
    password: ''
  };

  token!: string;

  response: any; // temporary object for translating response to local object

  doPUT() {
    if (this.packageobject.password !== null) {
      this.token = this.cookieService.get('token');
      let headerS = new HttpHeaders().set('Content-Type', 'application/json');
      headerS = headerS.append('Token', this.token);
      this.http.put<any>(this.ROOT_URL, this.packageobject, {headers: headerS})
        .subscribe();
    } else {
      console.error('no password was provided');
    }
  }

  getStuff() {
    this.token = this.cookieService.get('token'); // get cookie from browser
    let headerS = new HttpHeaders().set('Content-Type', 'application/json'); // define content as JSON
    headerS = headerS.append('Token', this.token); // add token to header
    this.http.get<object>(this.ROOT_URL, {headers: headerS})
      .toPromise()
      .then(
        res => {
          this.response = res;
          this.packageobject = this.response;
        }
      );
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
