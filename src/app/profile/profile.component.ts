import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private  http: HttpClient, public cookieService: CookieService) {}
  Udata!: any;

  ngOnInit(): void {
    this.Udata = this.cookieService.getObject('Udata');
  }

}
