import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-tokentester',
  templateUrl: './tokentester.component.html',
  styleUrls: ['./tokentester.component.css']
})
export class TokentesterComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  readonly URLgettoken = 'https://backend.yap.dragoncave.dev/security/token';
  readonly URLvalidatetoken = 'https://backend.yap.dragoncave.dev/security/token/checkValid ';

  packageobject = {
    emailAddress: '',
    password: ''
  };

  token!: string;


  doPost() {
    const headerS = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(this.packageobject);
    this.http.post(this.URLgettoken, this.packageobject, {headers: headerS, responseType: 'text'})
      .subscribe(
        res => {
          this.token = res;
          console.log(this.token);
        }
      );


  }

  doCheck() {
    let headerS = new HttpHeaders();
    headerS = headerS.append('Token', this.token);
    console.log(headerS);
    this.http.get(this.URLvalidatetoken, {headers: headerS})
      .subscribe((data => {
        console.log(data);
      }));
  }

  doPassword(passwordinput: string) {
    this.packageobject.password = passwordinput;
  }

  doEmail(emailinput: string) {
    this.packageobject.emailAddress = emailinput;
  }

  ngOnInit(): void {
  }

}
