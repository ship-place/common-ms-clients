import { MsClientService } from '@ship-place/ms-client-module';
import { IMsMessage } from '@ship-place/reqresex';
import { Changes } from './dto/changes.dto';
import { CreateChangesDto } from './dto/create-changes.dto';
import { GetChangesDto } from './dto/get-changes.dto';
export declare class MsChangesClientService {
    private readonly client;
    constructor(client: MsClientService);
    ping(): Promise<'pong'>;
    get(message: IMsMessage<GetChangesDto>): Promise<Changes[]>;
    create(message: IMsMessage<CreateChangesDto>): Promise<Changes>;
}
