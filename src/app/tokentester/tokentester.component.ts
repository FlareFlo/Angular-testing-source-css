import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tokentester',
  templateUrl: './tokentester.component.html',
  styleUrls: ['./tokentester.component.css']
})
export class TokentesterComponent implements OnInit {

  constructor(private  http: HttpClient) { }


  ngOnInit(): void {
  }

}
