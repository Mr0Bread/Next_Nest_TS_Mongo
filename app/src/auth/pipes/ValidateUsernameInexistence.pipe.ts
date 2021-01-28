import {
  Injectable,
  PipeTransform,
  BadRequestException,
  ArgumentMetadata
} from '@nestjs/common';
import { UsersService } from 'App/users/users.service';

@Injectable()
export class ValidateUsernameInexistencePipe implements PipeTransform {
  constructor(private usersService: UsersService) {}

  async transform(value: string, metadata: ArgumentMetadata): Promise<string> {
    if (!(await this.usersService.doesUserExists(value))) {
      throw new BadRequestException(
        "User with provided username doesn't exist"
      );
    }

    return value;
  }
}
