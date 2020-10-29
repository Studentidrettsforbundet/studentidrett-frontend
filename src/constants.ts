export const BASE_URL = 'https://kundestyrt-nsi-backend.azurewebsites.net';

export const CLUB = 'clubs';
export const SPORT = 'sports';
export const TEAM = 'teams';
export const REGION = 'regions';
export const CITY = 'cities';
export const GROUP = 'groups';
export const SEARCH = 'search';

export const MIDTNORGE = 'Midtnorge';
export const SORLANDET = 'Sørlandet';
export const VESTLANDET = 'Vestlandet';
export const OSTLANDET = 'Østlandet';
export const NORDNORGE = 'Nordnorge';

export type cardType =
    | typeof CLUB
    | typeof SPORT
    | typeof TEAM
    | typeof REGION
    | typeof CITY
    | typeof GROUP
    | typeof SEARCH;
