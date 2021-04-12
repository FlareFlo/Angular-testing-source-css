import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  constructor(private  http: HttpClient) {
  }

  readonly ROOT_URL = 'https://backend.yap.dragoncave.dev/user/';

  getresponse = {};

  packageobject = {
    userid: 0,
    username: '',
    emailAddress: '',
    password: ''
  };

  idinput!: string;

  doPUT() {
    const headerS = new HttpHeaders().set('Content-Type', 'application/json');
    console.log('Putting data...');
    console.log(this.packageobject);
    this.http.put<any>(this.ROOT_URL + this.idinput, this.packageobject, {headers: headerS})
      .subscribe();
  }

  getStuff(idinput: any) {
    idinput = parseInt(idinput, 10);
    this.getresponse = this.http.get<object>(this.ROOT_URL + idinput)
      .toPromise()
      .then();
  }

  doUID(idinput: string) {
    this.idinput = idinput;
    (this.packageobject.userid) = parseInt(idinput, 10);
    this.getStuff(idinput);
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
