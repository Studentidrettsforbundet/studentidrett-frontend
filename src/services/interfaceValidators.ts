export const instanceOfRegion = (object: any) => {
    return 'id' in object && 'name' in object && Object.keys(object).length === 2;
};

export const instanceOfTeam = (object: any): boolean => {
    return (
        'id' in object &&
        'name' in object &&
        'full_capacity' in object &&
        'short_description' in object &&
        'long_description' in object &&
        'tryouts' in object &&
        'registration_open' in object &&
        'group' in object &&
        Object.keys(object).length === 8
    );
};

export const instanceOfGroup = (object: any): boolean => {
    return (
        'id' in object &&
        'name' in object &&
        'description' in object &&
        'cover_photo' in object &&
        'sports' in object &&
        'club' in object &&
        'city' in object &&
        'contact_email' in object &&
        Object.keys(object).length === 8
    );
};

export const instanceOfSport = (object: any): boolean => {
    return (
        'id' in object &&
        'name' in object &&
        Object.keys(object).length === 2
    );
};

export const instanceOfClub = (object: any): boolean => {
    return (
        'id' in object &&
        'city' in object &&
        'name' in object &&
        'description' in object &&
        'contact_email' in object &&
        'membership_fee' in object &&
        'register_info' in object &&
        Object.keys(object).length === 7
    );
};

export const instanceOfCity = (object: any): boolean => {
    return (
        'id' in object &&
        'name' in object &&
        'region' in object &&
        'clubs' in object &&
        Object.keys(object).length === 4
    );
};
