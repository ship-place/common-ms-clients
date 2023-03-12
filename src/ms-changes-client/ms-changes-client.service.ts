import { Inject, Injectable } from '@nestjs/common';
import { MsClientService } from '@ship-place/ms-client-module';
import { IMsMessage } from '@ship-place/reqresex';
import { Changes } from './dto/changes.dto';
import { CreateChangesDto } from './dto/create-changes.dto';
import { GetChangesDto } from './dto/get-changes.dto';
import { MsChangesMessagePatterns as Patterns } from './ms-changes.pattern';

@Injectable()
export class MsChangesClientService {
  constructor(@Inject(MsClientService) private readonly client: MsClientService) {}

  async ping(): Promise<'pong'> {
    return await this.client.send(Patterns.ping);
  }

  async get(message: IMsMessage<GetChangesDto>): Promise<Changes[]> {
    return await this.client.send(Patterns.get, message);
  }

  async create(message: IMsMessage<CreateChangesDto>): Promise<Changes> {
    return await this.client.send(Patterns.create, message);
  }
}
