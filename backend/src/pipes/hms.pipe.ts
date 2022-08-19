import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class HMSPipe implements PipeTransform {
  transform(seconds: any, metadata: ArgumentMetadata) {
    console.log({ seconds, metadata })

    let h = Math.floor(seconds / 3600)
    seconds = seconds % 3600
    let m = Math.floor(seconds / 60)
    seconds = seconds % 60
    return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${seconds < 10 ? '0' : ''}${seconds}`
  }
}
