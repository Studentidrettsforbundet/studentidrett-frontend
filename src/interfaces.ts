import { Url } from "url";

export interface prev_next {
    next: string | null;
    previous: string | null;
}

export interface labels {
    alternantives: string[];
    sports: string[];
    text: string;
}

export interface dateObj {
    date: Date
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

export interface teamInterface {
    id: number;
    name: string;
    location?: number;
    group: number;
    sport?: number;
    long_description?: string;
    short_description?: string;
    cost?: string;
    equipment?: string;
    gender?: string;
    skill_level?: string;
    season?: string;
    schedule?: dateObj[]
    tryout_dates?: dateObj[]
    facebook_link?: Url;
    instagram_link?: Url;
    webpage?: Url
    availability?: string;
    image?: string;
}

export interface clubInterface {
    city: number;
    contact_email: string;
    description: string;
    id: number;
    membership_fee: number;
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
