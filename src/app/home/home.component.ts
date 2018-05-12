import {Component, OnInit} from '@angular/core';

import {User} from '../models/user';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[];
  user: User;
  isLoaded = false;
  newUser = false;
  isUserVisible = false;
  // userRoleName: string;

  roles = [
    {type: '1', name: 'admin'},
    {type: '2', name: 'editor'}
  ];

  constructor(public userService: UsersService) {
  }

  ngOnInit() {

    this.refresh();
  }

  private toggleUserVisibility(dir: boolean) {
    this.isUserVisible = dir;
  }

  onAdd() {
    this.newUser = true;
    const userTemp = new User('', '');
    this.user = userTemp;
    this.toggleUserVisibility(true);
  }

  refresh() {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
      this.isLoaded = true;
    });
  }

  userDel(user: User) {
    this.isLoaded = false;
    this.userService.delUser(user._id)
      .subscribe(() => {
        this.refresh();
      });
  }

  userChange(user: User) {
    this.user = user;
    this.toggleUserVisibility(true);
  }

  onUserApply(user: User) {
    this.isLoaded = false;
    this.toggleUserVisibility(false);
    if (this.newUser) {
      this.userService.createUser(user).subscribe(() => {
        this.newUser = false;
        this.refresh();
        this.isLoaded = true;
      });
    } else {
      this.userService.changeUser(user).subscribe(() => {
        this.newUser = false;
        this.refresh();
        this.isLoaded = true;
      });
    }

  }

  onUserCancel() {
    this.newUser = false;
    this.toggleUserVisibility(false);
  }

}
