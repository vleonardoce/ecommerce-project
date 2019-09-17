import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'soles' })
export class SolesPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return 'S/ ' + value;
  }
}
