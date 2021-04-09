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

  readonly ROOT_URL = 'https://backend.yap.dragoncave.dev/security/token';

  packageobject = {
    emailAddress: 'flamion@protonmail.com',
    password: 'stift'
  };

  token!: string;

  doPost() {
    const headers0 = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(this.packageobject);
    this.http.post(this.ROOT_URL, this.packageobject, {headers: headers0, responseType: 'text'})
      .subscribe(
        res => {
          this.token = res;
          console.log(this.token);
        }
      );

    /*
    this.http.get(this.ROOT_URL)
      .toPromise()
      .then((data => {
        console.log(data);
      }));

     */
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
