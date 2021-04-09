import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  constructor(private  http: HttpClient) {
  }

  topostobject = {
    username: '',
    emailAddress: '',
    password: ''
  };

  doPOST() {
    console.log('Posting data...');
    const url = 'https://backend.yap.dragoncave.dev/user';
    this.http.post(url, this.topostobject).subscribe();
  }

  doUsername(userinput: string) {
    console.log('Writing: ' + userinput + ' over ' + this.topostobject.username);
    this.topostobject.username = userinput;
    console.log(this.topostobject);
  }

  doEmail(emailinput: string) {
    console.log('Writing: ' + emailinput + ' over ' + this.topostobject.emailAddress);
    this.topostobject.emailAddress = emailinput;
    console.log(this.topostobject);
  }

  doPassword(passwordinput: string) {
    console.log('Writing: ' + passwordinput + ' over ' + this.topostobject.password);
    this.topostobject.password = passwordinput;
    console.log(this.topostobject);
  }

  ngOnInit(): void {
    console.log(this.topostobject);
  }

}
