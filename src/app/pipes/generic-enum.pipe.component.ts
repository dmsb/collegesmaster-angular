import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'genericEnum'})
export class GenericEnumPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let enums = [];
    for (var enumMember in value) {
      enums.push({key: enumMember, value: value[enumMember]}); 
    }
    return enums;
  }
}