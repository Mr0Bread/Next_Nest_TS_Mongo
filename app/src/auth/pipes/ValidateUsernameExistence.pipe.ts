import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException
} from '@nestjs/common';
import { UsersService } from 'App/users/users.service';

@Injectable()
export class ValidateUsernameExistencePipe implements PipeTransform {
  constructor(private userService: UsersService) {}

  async transform(value: string, metadata: ArgumentMetadata): Promise<string> {
    if (await this.userService.doesUserExists(value)) {
      throw new BadRequestException(
        'User with provided username already exists'
      );
    }

    return value;
  }
}
