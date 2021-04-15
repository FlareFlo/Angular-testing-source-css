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

  packageobject = {
    emailAddress: '',
    password: ''
  };

  token!: string;

  doPost() {
    if (this.packageobject.emailAddress != '' && this.packageobject.password != '') {
      const headerS = new HttpHeaders().set('Content-Type', 'application/json');
      console.log(this.packageobject);
      this.http.post(this.URLgettoken, this.packageobject, {headers: headerS, responseType: 'text'})
        .subscribe(
          res => {
            this.token = res;
            console.log(this.token);
            this.cookieService.put('token', this.token);
          }
        );
    } else {
      console.error("One or more input fields were left empty");
    }
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
