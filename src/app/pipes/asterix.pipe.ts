import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  //ch = "LOGin"
  transform(ch: string) {
    let voyels = ["a", "e", "i", "u", "o", "y"];
    let result = "";
    let x = "";
    for (let i = 0; i < ch.length; i++) {
      x = ch[i];
      for (let j = 0; j < voyels.length; j++) {
        if (ch[i].toLowerCase() == voyels[j]) {
          x = "*";
          break;
        }
      }
      result = result + x;
    }
    return result;
  }

}
