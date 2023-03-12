import { Module } from '@nestjs/common';
import { MsClientModule } from '@ship-place/ms-client-module';
import { MsChangesClientService } from './ms-changes-client.service';
import { MsChangesMessagePatterns } from './ms-changes.pattern';

@Module({
  imports: [MsClientModule.forRoot({ patterns: MsChangesMessagePatterns })],
  providers: [MsChangesClientService],
  exports: [MsChangesClientService],
})
export class MsChangesClientModule {}
