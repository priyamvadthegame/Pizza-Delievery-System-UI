import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'safe'}) export class FilterDetails implements PipeTransform
{ 
    transform(value: string): string
    {       let substr=String(value).substr(0,4);
            return `${substr}************`;
    }   
}
