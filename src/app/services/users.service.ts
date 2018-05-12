import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {BasicApi} from '../core/basic-api';
import {User} from '../models/user';

@Injectable()

export class UsersService extends BasicApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getAllUsers(): Observable<User[]> {

    return this.getBasicApi('users');
  }

  changeUser(user: User): Observable<User> {

    return this.putBasicApi('users/' + user._id, user);
  }

  delUser(id: string): Observable<any> {

    return this.deleteBasicApi('users',  id);
  }

  createUser(user: User): Observable<User> {
    return this.postBasicApi('users', user);
  }

}
