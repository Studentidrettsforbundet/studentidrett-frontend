// ------------------- REGIONS ---------------
import {CITY, CLUB} from '../constants';

export const singleRegion = { id: 3, name: 'Vestlandet', cities: [] };
export const regionList3 = [
    { id: 0, name: 'Midtnorge', cities: [] },
    { id: 1, name: 'Oslo/Viken', cities: [] },
    { id: 2, name: 'Nord norge', cities: [] },
];
export const regionList5 = [
    { id: 0, name: 'Midtnorge', cities: [] },
    { id: 1, name: 'Oslo/Viken', cities: [] },
    { id: 2, name: 'Nord norge', cities: [] },
    { id: 3, name: 'Vestlandet', cities: [] },
    { id: 4, name: 'Sørlandet', cities: [] },
];

// ------------------- CITIES ----------------
export const singleCity = { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] };
export const cityList = [
    { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
    { id: 1, name: 'Oslo', region: 'Oslo/Viken', clubs: [] },
    { id: 2, name: 'Bergen', region: 'Vestlandet', clubs: [] },
    { id: 3, name: 'Stavanger', region: 'Vestlandet', clubs: [] },
];

export const invalidCityList = [
    { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] },
    { id: 1, name: 'Oslo', clubs: [] },
];
export const newCity = { id: 5, name: 'Orkanger', region: 'Midtnorge', clubs: [] };

// ------------------- CLUBS -----------------
export const singleClub = {
    id: 3,
    city: 1,
    name: 'NTNUI Bowling',
    description: '',
    contact_email: 'info@ntnui.no',
    membership_fee: '200',
    register_info: 'Register at ntnui.no/register',
};
export const clubList2 = [
    {
        id: 0,
        city: 0,
        name: 'NTNUI football',
        description: '',
        contact_email: 'info@ntnui.no',
        membership_fee: '200',
        register_info: 'Register at ntnui.no/register',
    },
    {
        id: 1,
        city: 0,
        name: 'NTNUI amerikansk fotball',
        description: '',
        contact_email: 'info@ntnui.no',
        membership_fee: '200',
        register_info: 'Register at ntnui.no/register',
    },
];
export const newClub = {
    id: 0,
    city: 0,
    name: 'NTNUI football',
    description: '',
    contact_email: 'info@ntnui.no',
    membership_fee: '200',
    register_info: 'Register at ntnui.no/register',
};

// ------------------- GROUPS ----------------
export const singleGroup = {
    id: 33,
    name: 'ntnui hockey',
    description: 'A hockey group at NTNUI',
    cover_photo: 'photo',
    club: 0,
    city: 3,
    contact_email: 'hockey@ntnui.no',
    sports: [],
};

export const groupList1 = [
    {
        id: 0,
        name: 'ntnui football',
        description: 'A football group at NTNUI',
        cover_photo: 'photo',
        club: 0,
        city: 0,
        contact_email: 'football@ntnui.no',
        sports: [],
    },
];

export const groupList2 = [
    {
        id: 33,
        name: 'ntnui hockey',
        description: 'A hockey group at NTNUI',
        cover_photo: 'photo',
        club: 0,
        city: 3,
        contact_email: 'hockey@ntnui.no',
        sports: [],
    },
    {
        id: 0,
        name: 'ntnui football',
        description: 'A football group at NTNUI',
        cover_photo: 'photo',
        club: 0,
        city: 0,
        contact_email: 'football@ntnui.no',
        sports: [],
    },
];

export const newGroup = {
    id: 0,
    name: 'ntnui football',
    description: 'A football group at NTNUI',
    cover_photo: 'photo',
    club: 0,
    city: 0,
    contact_email: 'football@ntnui.no',
    sports: [],
};

// ------------------- TEAMS -----------------
export const singleTeam = {
    id: 0,
    availability: 'OP',
    cost: null,
    equipment: null,
    facebook_link: null,
    gender: 'M',
    group: 1,
    image: null,
    instagram_link: null,
    location: 1,
    long_description: 'Team A is the best',
    name: 'Team A',
    schedule: [],
    tryout_dates: [],
    webpage: null,
    season: null,
    short_description: 'Short desc',
    skill_level: 'HI',
    sport: 1,
};
export const newTeam = {
    id: 4,
    availability: 'OP',
    cost: null,
    equipment: null,
    facebook_link: null,
    gender: 'M',
    group: 1,
    image: null,
    instagram_link: null,
    location: 1,
    long_description: 'Team A is the best',
    name: 'Team D',
    schedule: [],
    tryout_dates: [],
    webpage: null,
    season: null,
    short_description: 'Short desc',
    skill_level: 'HI',
    sport: 1,
};
export const teamList2 = [
    {
        id: 0,
        availability: 'OP',
        cost: null,
        equipment: null,
        facebook_link: null,
        gender: 'M',
        group: 1,
        image: null,
        instagram_link: null,
        location: 1,
        long_description: 'Team A is the best',
        name: 'Team A',
        schedule: [],
        tryout_dates: [],
        webpage: null,
        season: null,
        short_description: 'Short desc',
        skill_level: 'HI',
        sport: 1,
    },
    {
        id: 2,
        availability: 'OP',
        cost: null,
        equipment: null,
        facebook_link: null,
        gender: 'M',
        group: 1,
        image: null,
        instagram_link: null,
        location: 1,
        long_description: 'Team A is the best',
        name: 'Team B',
        schedule: [],
        tryout_dates: [],
        webpage: null,
        season: null,
        short_description: 'Short desc',
        skill_level: 'HI',
        sport: 1,
    },
];

// ------------------- SPORTS ----------------
export const singleSport = { id: 0, name: 'Football', labels: [] };
export const newSport = { id: 6, name: 'Tennis', labels: [] };
export const sportList2 = [
    { id: 0, name: 'Football', labels: [] },
    { id: 3, name: 'American football', labels: [] },
];
export const sportList5 = [
    {
        id: 0,
        name: 'Football',
        labels: [
            {
                text: 'utendørs',
                sports: ['Fotball', 'Langrenn', 'Rumpeldunk'],
                alternatives: ['Utendørs'],
            },
        ],
    },

    {
        id: 1,
        name: 'Handball',
        labels: [
            {
                text: 'utendørs',
                sports: ['Hanball'],
                alternatives: ['Indoors'],
            },
        ],
    },
    {
        id: 2,
        name: 'Basketball',
        labels: [
            {
                text: 'utendørs',
                sports: ['Basketball'],
                alternatives: ['Utendørs'],
            },
        ],
    },
    {
        id: 3,
        name: 'American football',
        labels: [
            {
                text: 'utendørs',
                sports: ['Fotball'],
                alternatives: ['Utendørs'],
            },
        ],
    },
    {
        id: 4,
        name: 'Baseball',
        labels: [
            {
                text: 'utendørs',
                sports: ['Baseball'],
                alternatives: ['Utendørs'],
            },
        ],
    },
];

// ------------------- SEARCH ----------------
export const searchResult = { name: 'Test', id: '1', label: CITY };
export const newSearchResult = { name: 'Test2', id: '2', label: CLUB };
