import { Pipe, PipeTransform } from '@angular/core';
import { User } from './interfaces/users';
import { filter } from 'rxjs';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(userList:User[],term:string): User[] {
    return userList.filter( u => u.id.toString().includes(term));
  }

}
