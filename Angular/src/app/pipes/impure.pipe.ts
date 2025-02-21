import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(value: any,searchTxt: string): any{ 
    if(searchTxt==='')
    {
      return value;
    }
    return value.filter((item:string)=> item.startsWith(searchTxt));
  }

}
