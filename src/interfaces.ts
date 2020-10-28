export interface prev_next {
    next: string | null;
    previous: string | null;
}

export interface labels {
    alternantives: string[];
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

export interface teamInterface {
    id: number;
    name: string;
    full_capacity: boolean;
    short_description: string;
    long_description: string;
    tryouts: boolean;
    registration_open: boolean;
    group: number;
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
