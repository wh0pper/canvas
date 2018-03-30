import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, search: string): any[] {
    if (!items) return [];
    if (!search) return items;
    console.log(items[0][field]);
    search = search.toLowerCase();

    return items.filter( item => item[field].toLowerCase().includes(search));
  }

}
