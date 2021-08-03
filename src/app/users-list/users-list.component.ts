import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any = []
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('users').subscribe(res => {
      this.users = res.data;
    });
  }


  deleteUser(i){
    this.users.splice(i, 1)
  }
  

}
