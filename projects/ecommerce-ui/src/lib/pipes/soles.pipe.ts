import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'soles' })
export class SolesPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      return '';
    }
    return 'S/ ' + String(value);
  }
}
