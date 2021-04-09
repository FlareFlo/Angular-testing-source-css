import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    console.log('Posting email: ' + this.packageobject.emailAddress + ' and password: ' + this.packageobject.password);
    this.http.post<string>(this.ROOT_URL, this.packageobject)
      .subscribe(data => {
        console.log(data);
      });
    // console.log('Printing token:');
    // console.log(this.token);
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
