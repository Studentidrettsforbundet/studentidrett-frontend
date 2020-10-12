export interface prev_next {
    next: string | null;
    previous: string | null;
}

export interface resultsInterface {
    count: number;
    next: string | null;
    previous: string | null;
    results:
        | teamInterface[]
        | clubInterface[]
        | sportInterface[]
        | cityInterface[]
        | regionInterface[]
        | groupInterface[]
        | [];
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
    id: number;
    city: number;
    name: string;
    description: string;
    contact_email: string;
    pricing: string;
    register_info: string;
}

export interface sportInterface {
    id: number;
    name: string;
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
}
