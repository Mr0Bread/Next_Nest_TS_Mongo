import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ValidateUserPasswordPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const pattern = new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}');

    if (!pattern.test(value)) {
      throw new BadRequestException(
        "Provided password doesn't satisfy the pattern",
      );
    }

    return value;
  }
}
