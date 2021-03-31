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

  object = {
    username: 'foo',
    email: 'loo@gmail.com'
  };

  doPOST() {
    console.log('Posting data...');
    const url = 'https://backend.yap.dragoncave.dev/user';
    this.http.post(url, this.object).subscribe();
  }

  doUsername(userinput: string) {
    console.log('Writing: ' + userinput + ' over ' + this.object.username);
    this.object.username = userinput;
    console.log(this.object);
  }

  doEmail(emailinput: string) {
    console.log('Writing: ' + emailinput + ' over ' + this.object.email);
    this.object.email = emailinput;
    console.log(this.object);
  }

  ngOnInit(): void {
    console.log(this.object);
  }

}
