import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByData'
})
export class SortByDataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
