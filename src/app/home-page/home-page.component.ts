import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserData } from '../model/UserData';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userDataArr: UserData[] = new Array<UserData>();
  constructor(private _user: UserService) {
  }

  ngOnInit() {
    this._user.downloadUserData().subscribe(data => {
      this.userDataArr = data;
      console.log('hello');
      console.log(this.userDataArr[0]);
    });
  }

  onEdit(id){
    window.alert('You Have Clicked To Edit on id ' +id );
  }
  onDelete(id){
    window.alert('You Have Clicked To Delete on id ' + id);
  }

}
