import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  readonly ROOT_URL = 'https://backend.yap.dragoncave.dev/user';
  readonly URLgettoken = 'https://backend.yap.dragoncave.dev/security/token';

  packageobject = {
    username: '',
    emailAddress: '',
    password: ''
  };

  token!: string;


  doPost() {
    if (
      this.packageobject.username !== ''
      && this.packageobject.emailAddress !== ''
      && this.packageobject.password !== ''
    ) {
      const headerS = new HttpHeaders().set('Content-Type', 'application/json'); // define the sent content to being a Json object
      this.http.post<any>(this.ROOT_URL, this.packageobject, {headers: headerS}) // send the POST to create the user account
        .subscribe(res => {
          console.log('User successfully created under UID:' + res);
          this.cookieService.put('uid', res); // store UID for later use
          if (res !== '') { // verify if user creation was successful
            const headerS1 = new HttpHeaders().set('Content-Type', 'application/json'); // define the sent content to being a Json object
            // tslint:disable-next-line:max-line-length
            this.http.post(this.URLgettoken, this.packageobject, {headers: headerS1, responseType: 'text'}) // send user data to generate token
              .subscribe(
                res1 => {
                  this.cookieService.put('token', res1);
                }
              );
          }
        });
    } else {
      console.error('Input field(s) were left empty');
    }
  }


  doUsername(input: string) {
    this.packageobject.username = input;
  }

  doEmail(input: string) {
    this.packageobject.emailAddress = input;
  }

  doPassword(input: string) {
    this.packageobject.password = input;
  }

  ngOnInit(): void {
  }

}
