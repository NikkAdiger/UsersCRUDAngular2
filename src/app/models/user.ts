export class User {

  public name: string;
  public role: string;
  public _id:  string;

  constructor(name: string,
              role: string,
              _id?: string) {
    this.name = name;
    this.role = role;
    this._id = _id;
  }
}
