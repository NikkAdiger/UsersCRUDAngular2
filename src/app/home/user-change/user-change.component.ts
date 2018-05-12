import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {User} from '../../models/user';
import {Message} from '../../models/message';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.css']
})
export class UserChangeComponent implements OnInit {

  @Output() userApply = new EventEmitter<User>();
  @Output() userCancel = new EventEmitter<User>();

  @Input() user: User;
  @Input() roles;

  userTmp: User;

  form: FormGroup;
  message: Message;

  constructor() {
  }

  ngOnInit() {
    this.userTmp = new User(this.user.name, this.user.role, this.user._id);

    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'role': new FormControl(null, [Validators.required])
    });
  }

  closeUser() {
    this.userCancel.emit(this.user);
  }

  onSubmit() {
    if (this.user.name === this.userTmp.name && this.user.role === this.userTmp.role) {
      this.closeUser();
    } else {
      this.userApply.emit(this.userTmp);
    }
  }

  // isBusyTittle(control: FormControl): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.booksService.getBookByTittle(control.value)
  //       .subscribe((book: Book) => {
  //         if (book && book.id !== this.book.id) {
  //           return resolve({isBusy: true});
  //         } else {
  //           return resolve(null);
  //         }
  //       });
  //   });
  // }
}
