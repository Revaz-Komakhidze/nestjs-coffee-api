// import { Role } from '../../users/enums/role.enum';
// import { PermissionType } from '../authorization/permission.type';

import { Role } from 'src/users/enums/role.enum';

export interface ActiveUserData {
  sub: number;
  email: string;
  role: Role;
}
