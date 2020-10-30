export const instanceOfRegion = (object: any) => {
    return 'id' in object && 'name' in object && Object.keys(object).length === 2;
};

export const instanceOfTeam = (object: any): boolean => {
    return (
        'id' in object &&
        'name' in object &&
        'location' in object &&
        'group' in object &&
        'sport' in object &&
        'long_description' in object &&
        'short_description' in object &&
        'cost' in object &&
        'equipment' in object &&
        'gender' in object &&
        'skill_level' in object &&
        'season' in object &&
        'schedule' in object &&
        'tryout_dates' in object &&
        'facebook_link' in object &&
        'instagram_link' in object &&
        'webpage' in object &&
        'availability' in object &&
        'image' in object &&
        Object.keys(object).length === 19
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
    return 'id' in object && 'name' in object && 'labels' in object && Object.keys(object).length === 3;
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
