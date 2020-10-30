export interface prev_next {
    next: string | null;
    previous: string | null;
}

export interface labels {
    alternatives: string[];
    sports: string[];
    text: string;
}

export interface combinedResultsInterface {
    count: number;
    next: string | null;
    previous: string | null;
    results:
        | teamInterface[]
        | clubInterface[]
        | sportInterface[]
        | cityInterface[]
        | regionInterface[]
        | groupInterface[];
}

export interface dateInterface {
    date: string;
}

export interface teamInterface {
    id: number;
    availability: string;
    cost: string | null;
    equipment: string | null;
    facebook_link: string | null;
    gender: string;
    group: number;
    image: string | null;
    instagram_link: string | null;
    location: number;
    long_description: string;
    name: string;
    schedule: dateInterface[];
    tryout_dates: dateInterface[];
    webpage: string | null;
    season: string | null;
    short_description: string | null;
    skill_level: string;
    sport: number;
}

export interface clubInterface {
    city: number;
    contact_email: string;
    description: string;
    id: number;
    membership_fee: string;
    name: string;
    register_info: string;
}

export interface sportInterface {
    id: number;
    name: string;
    labels: labels[];
}

export interface cityInterface {
    id: number;
    name: string;
    region: string;
    clubs: clubInterface[];
}

export interface groupInterface {
    id: number;
    name: string;
    description: string;
    cover_photo: string;
    sports: sportInterface[];
    club: number;
    city: number;
    contact_email: string;
}

export interface regionInterface {
    id: number;
    name: string;
    cities: cityInterface[];
}

export interface searchInterface {
    name: string;
    id: string;
}
