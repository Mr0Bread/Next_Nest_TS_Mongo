import IUser from 'App/users/interfaces/user.interface';

export default class UserDto implements IUser {
  readonly username: string;
  readonly password: string;
}
