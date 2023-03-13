import { Module } from '@nestjs/common';
import { MsClientModule } from '@ship-place/ms-client-module';
import { MsAuthClientService } from './ms-auth-client.service';
import { MsAuthMessagePatterns } from './ms-auth.pattern';

@Module({
  imports: [MsClientModule.forRoot({ patterns: MsAuthMessagePatterns })],
  providers: [MsAuthClientService],
  exports: [MsAuthClientService],
})
export class MsAuthClientModule {}
