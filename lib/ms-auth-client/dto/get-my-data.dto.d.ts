import { JwtPayload } from '@ship-place/types/backend';
import { LoginDto } from './login.dto';
export declare class GetMyDataDto {
    jwtPayload: JwtPayload;
    user: LoginDto;
}
