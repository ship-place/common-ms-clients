import { Inject, Injectable } from '@nestjs/common';
import { MsClientService } from '@ship-place/ms-client-module';
import { IMsMessage } from '@ship-place/reqresex';
import { JwtPayload, Tokens } from '@ship-place/types/backend';
import { GetMyDataDto } from './dto/get-my-data.dto';
import { LoginDto } from './dto/login.dto';
import { MsAuthMessagePatterns as Patterns } from './ms-auth.pattern';

@Injectable()
export class MsAuthClientService {
  constructor(@Inject(MsClientService) private readonly client: MsClientService) {}

  async ping(): Promise<'pong'> {
    return await this.client.send(Patterns.ping);
  }

  async login(message: IMsMessage<LoginDto>): Promise<IMsMessage<Tokens>> {
    return await this.client.send(Patterns.login, message);
  }

  async refresh(message: IMsMessage<any>): Promise<IMsMessage<Tokens>> {
    return await this.client.send(Patterns.refresh, message);
  }

  async logout(message: IMsMessage<any>): Promise<IMsMessage<boolean>> {
    return await this.client.send(Patterns.logout, message);
  }

  async validateAccessToken(message: IMsMessage<any>): Promise<IMsMessage<JwtPayload>> {
    return await this.client.send(Patterns.validateAccessToken, message);
  }

  async getMyData(message: IMsMessage<any>): Promise<IMsMessage<GetMyDataDto>> {
    return await this.client.send(Patterns.getMyData, message);
  }
}
