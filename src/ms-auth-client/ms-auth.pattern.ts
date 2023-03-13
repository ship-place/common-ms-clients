import { Pattern } from '@ship-place/ms-client-module';

export const MsAuthMessagePatterns = {
  ping: 'auth.ping',
  login: 'auth.login',
  refresh: 'auth.refresh',
  logout: 'auth.logout',
  validateAccessToken: 'auth.validate_access_token',
  getMyData: 'auth.get-my-data',
} satisfies Pattern;
