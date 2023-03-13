import { MsClientService } from '@ship-place/ms-client-module';
import { IMsMessage } from '@ship-place/reqresex';
import { JwtPayload, Tokens } from '@ship-place/types/backend';
import { GetMyDataDto } from './dto/get-my-data.dto';
import { LoginDto } from './dto/login.dto';
export declare class MsAuthClientService {
    private readonly client;
    constructor(client: MsClientService);
    ping(): Promise<'pong'>;
    login(message: IMsMessage<LoginDto>): Promise<IMsMessage<Tokens>>;
    refresh(message: IMsMessage<any>): Promise<IMsMessage<Tokens>>;
    logout(message: IMsMessage<any>): Promise<IMsMessage<boolean>>;
    validateAccessToken(message: IMsMessage<any>): Promise<IMsMessage<JwtPayload>>;
    getMyData(message: IMsMessage<any>): Promise<IMsMessage<GetMyDataDto>>;
}
