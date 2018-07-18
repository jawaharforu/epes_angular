import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const arrayValue = [];
    for (let i = 0; i < value.length; i++ ) {
      arrayValue.push(value[i].itemname);
    }
    return arrayValue.join(args);
  }

}
