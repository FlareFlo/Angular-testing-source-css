import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  readonly URLgettoken = 'https://backend.yap.dragoncave.dev/security/token';
  readonly ROOT_URL = 'https://backend.yap.dragoncave.dev/user';

  packageobject = {
    emailAddress: '',
    password: ''
  };

  token!: string;
  returnvalue: any;
  message = 'Welcome';
  // loginmessage = 'Login';


  doPost() {
    if (this.packageobject.emailAddress !== '' && this.packageobject.password !== '') {
      this.cookieService.removeAll();
      const header0 = new HttpHeaders().set('Content-Type', 'application/json'); // define sent data to be JSON object
      this.http.post(this.URLgettoken, this.packageobject, {headers: header0, responseType: 'text'}) // getting login token
        .subscribe(
          res => {
            this.cookieService.put('token', res);
            this.getUdata();
          }
        );

      this.cookieService.remove('guest');


    } else {
      console.error('One or more input fields were left empty');
    }
  }

  getUdata() {
    // tslint:disable-next-line:prefer-const
    let header1 = new HttpHeaders();
    header1 = header1.append('Token', this.cookieService.get('token'));

    this.http.get(this.ROOT_URL, {headers: header1})
      .subscribe(
        response => {
          this.returnvalue = response;
          this.cookieService.putObject('Udata', this.returnvalue);
        }
      );
  }

  doEmail(input: string) {
    this.packageobject.emailAddress = input;
  }

  doPassword(input: string) {
    this.packageobject.password = input;
  }

  welcomebackmessage() {
    if (this.cookieService.getObject('Udata') !== null) {
      let tempmsg: any;
      tempmsg = this.cookieService.getObject('Udata');
      this.message = 'Welcome back ' + tempmsg.username;
    }
  }

  /*
  logoutkey() {
    if (this.cookieService.getObject('Udata') !== null) {
      this.loginmessage = 'Logout and Change user';
    }
  }
  */

  ngOnInit(): void {

    // this.welcomebackmessage();
    // NEEDS FIXING, DOESNT WORK! (default values for variables not registered)

    // this.logoutkey();

  }

}
