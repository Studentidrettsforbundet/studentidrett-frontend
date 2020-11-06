export const getTeamGender = (gender: string | null) => {
    const genders: { [index: string]: string } = {
        M: 'Herre',
        F: 'Dame',
        MX: 'Mix',
        A: 'Alle',
    };
    if (gender) {
        return genders[gender];
    }
    return null;
};

export const getTeamSkill = (skill: string | null) => {
    const skills: { [index: string]: string } = {
        NONE: 'Ingen forkunnskaper krevd',
        LOW: 'Lavt',
        MED: 'Medium',
        HI: 'Høyt',
        Pro: 'Proff',
    };
    if (skill) {
        return skills[skill];
    }
    return null;
};

export const getTeamAvailability = (availability: string | null) => {
    const translations: { [index: string]: string } = {
        OP: 'Åpent for alle',
        CL: 'Opptak ferdig',
        FU: 'Laget er fullt',
        TO: 'Vi har opptak',
    };
    if (availability) {
        return translations[availability];
    }
    return null;
};
