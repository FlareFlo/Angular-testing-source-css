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

  Object = {
    username: 'foo',
    email: 'loo@gmail.com'
  };

  doPOST() {
    console.log('Posting data...');
    const url = 'testsite.dragoncave.dev/user';
    this.http.post(url, Object).subscribe();
  }

  ngOnInit(): void {
  }

}
