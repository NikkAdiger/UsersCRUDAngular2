import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'roleName'
})

export class RoleNamePipe implements PipeTransform {

  transform(value: string, roles): any {

    return roles.filter((el) => el.type === value)[0].name;
  }

}
