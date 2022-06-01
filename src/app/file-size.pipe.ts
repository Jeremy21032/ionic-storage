import { Pipe, PipeTransform } from '@angular/core';

let SIZE_UNITS = ['B', 'KB', 'MB'];
let SIZE_UNITS_LARGE = ['Bytes', 'KiloBytes', 'MegaBytes'];
@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(sizeBytes: number, sizeForm: boolean): string {
    let sizeUnits = sizeForm ? SIZE_UNITS_LARGE : SIZE_UNITS;
    let sizeRounVal = Math.round(Math.log(sizeBytes) / Math.log(1024));
    sizeRounVal = Math.min(sizeRounVal, sizeUnits.length - 1);
    let size=sizeBytes/Math.pow(1024,sizeRounVal);
    let sizeFormat= Math.round(size*100)/100;
    let sizeUnit=sizeUnits[sizeRounVal]

    return `${sizeFormat} ${sizeUnit}`;
  }

}
