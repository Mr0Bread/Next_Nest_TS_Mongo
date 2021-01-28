import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException
} from '@nestjs/common';

@Injectable()
export class ValidateUsernamePipe implements PipeTransform {
  async transform(value: string, metadata: ArgumentMetadata) {
    if (value.length < 6) {
      throw new BadRequestException('Login has to contain at least 6 symbols');
    }

    return value;
  }
}
