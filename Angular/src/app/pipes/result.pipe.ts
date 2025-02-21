import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result'
  
})
export class ResultPipe implements PipeTransform {

  transform(value: any, user:string): any {

    if(value < 35)
    {
      return user + ' is failed. Got '+ value+ ' marks.'
    }
    else {
      return user + ' is passed. Got '+ value+ ' marks.'

    }
  }

}
 