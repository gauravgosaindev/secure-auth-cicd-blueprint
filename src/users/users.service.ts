import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'admin',
      password: 'hashed_password_placeholder',
      roles: ['admin'],
    },
    {
      userId: 2,
      username: 'developer',
      password: 'hashed_password_placeholder',
      roles: ['user'],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async checkPermissions(user: User, requiredRole: string): Promise<boolean> {
    return user.roles?.includes(requiredRole);
  }
}