import { BaseDto } from './base.dto';

export class SignStatusInDto extends BaseDto {
  public readonly id: number;
  public readonly role: string;
  public readonly token: string;
  public readonly isLeader: boolean;

  constructor() {
    super();
    this._mapper = {
        id: 'id',
        role: 'role.name',
        roleId: 'role.id',
        token: 'token',
        isLeader: 'isLeader',
    };
}
}
