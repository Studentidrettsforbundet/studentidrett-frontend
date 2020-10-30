export const getTeamGender = (gender?: string): string | null => {
    if (gender === 'M') {
        return 'Herre';
    } else if (gender === 'F') {
        return 'Dame';
    } else if (gender === 'MX') {
        return 'Mix';
    } else if (gender === 'A') {
        return 'Alle';
    } else {
        return null;
    }
};

export const getTeamSkill = (skill?: string): string | null => {
    if (skill === 'NONE') {
        return 'Ingen forkunnskaper krevd';
    } else if (skill === 'LOW') {
        return 'Lavt';
    } else if (skill === 'MED') {
        return 'Medium';
    } else if (skill === 'HI') {
        return 'Høyt';
    } else if (skill === 'PRO') {
        return 'Proff';
    } else {
        return null;
    }
};

export const getTeamAvailability = (availability?: string): string | null => {
    if (availability === 'OP') {
        return 'Åpent';
    } else if (availability === 'CL') {
        return 'Lukket';
    } else if (availability === 'FU') {
        return 'Fullt';
    } else if (availability === 'TO') {
        return 'Opptak';
    } else {
        return null;
    }
};