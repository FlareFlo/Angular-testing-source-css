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
    emailAddress: '',
    password: ''
  };


  doPUT() {
    console.log('Putting data...');
    console.log(this.packageobject);
    this.http.put<any>(this.ROOT_URL, this.packageobject)
      .subscribe();
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
