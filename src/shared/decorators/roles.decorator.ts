import * as Nest from '@nestjs/common';

export const Roles = (...roles: string[]) => {
    return Nest.SetMetadata('roles', roles);
};

