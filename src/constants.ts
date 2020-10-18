export const BASE_URL = 'https://kundestyrt-nsi-backend.azurewebsites.net';

export const CLUB = 'clubs';
export const SPORT = 'sports';
export const TEAM = 'teams';
export const REGION = 'regions';
export const CITY = 'cities';
export const GROUP = 'groups';

export type cardType = typeof CLUB | typeof SPORT | typeof TEAM | typeof REGION | typeof CITY | typeof GROUP;
export const apiReturnsDifferentDataFormat = true;
