import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any = []
  userData : any = []
  id:any

  constructor(private api: ApiService, private _route: ActivatedRoute ) { }

  ngOnInit() {
  this.id =  this._route.snapshot.paramMap.get('id');
    this.api.get('users').subscribe(res => {
      this.users = res.data;
      this.userData =this.users.filter(x => x.id === Number(this.id))      
    });

    this.getUserDetails(this.id)
  }

  getUserDetails(id){
   
  }

}
