import { Permission } from '@ship-place/types/common';
export declare class LoginDto {
    id: number;
    email: string;
    password: string;
    currentJwtRefreshTokenHashed: string;
    activationToken: string;
    isActive: boolean;
    permissions: Permission[];
}
