import { Pattern } from '@ship-place/ms-client-module';

export const MsChangesMessagePatterns = {
  ping: 'changes.ping',
  get: 'changes.get',
  create: 'changes.create',
} satisfies Pattern;
