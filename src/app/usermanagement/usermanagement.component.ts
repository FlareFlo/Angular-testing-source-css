import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  doPUT(idinput: any) {
    idinput = parseInt(idinput, 10);
    console.log('Putting data...');
    console.log(this.packageobject);
    this.http.put<any>(this.ROOT_URL + idinput, this.packageobject)
      .subscribe();
  }

  getStuff(idinput: any) {
    idinput = parseInt(idinput, 10);
    this.getresponse = this.http.get<object>(this.ROOT_URL + idinput)
      .toPromise()
      .then();
  }

  doTest(){
    //this.packageobject = this.getresponse;
  }

  doUID(idinput: string) {
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
