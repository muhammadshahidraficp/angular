import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from 'lodash';

@Pipe({
  name: 'sortObjectArray'
})
export class SortObjectArrayPipe implements PipeTransform {

  transform(value: any, key:string, direction: string): any {
    value = sortBy(value, (item)=>{
      return item[key];
    });
    if(direction == 'dsc'){
      value = value.reverse();
    }
    return value;
  }

}
