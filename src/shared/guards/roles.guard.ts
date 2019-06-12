import * as Nest from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Nest.Injectable()
export class RolesGuard implements Nest.CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: Nest.ExecutionContext)
            : boolean | Promise<boolean> | Observable<boolean> {
        const classRoles = this.reflector.get<string[]>('roles', context.getClass()) || [];
        const methodRoles = this.reflector.get<string[]>('roles', context.getHandler()) || [];

        const roles = _.uniq<string>([ ...classRoles, ...methodRoles ]);
        if (!_.isArray(roles) || !roles.length) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!_.has(user, 'roles')) {
            return false;
        }

        const hasRole = _.some(user.roles, (role) => _.includes(roles, role));
        return hasRole;
    }
}
