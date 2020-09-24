import React from "react"

///// Database example setup
export interface Sport {
    Name: string;
    Clubs: Array<string>;
}

export interface Location {
    Name: string;
    Sports: Array<Sport>;
}

export interface IMockupDB {
    Locations: Array<Location>;
    Sports: Array<Sport>;
}

const TrondheimClubs: Array<string> = ["NTNUI", "Janus IL"];
const SteinkjerClubs: Array<string> = ["Steinkjer IL"];
const OsloClubs: Array<string> = ["OsloMet IL"]

const Fotball: Sport = {
    Name: "Fotball",
    Clubs: TrondheimClubs,
};

const Handball: Sport = {
    Name: "Handball",
    Clubs: SteinkjerClubs,
};

const Volleyball: Sport = {
    Name: "Volleyball",
    Clubs: OsloClubs,
}

const TrondelagSports: Array<Sport> = [Fotball, Handball];
const OstfoldSports: Array<Sport> = [Volleyball, Handball];

var Trondelag: Location = {
    Name: "Trondelag",
    Sports: TrondelagSports,
}

var Ostfold: Location = {
    Name: "Ostfold",
    Sports: OstfoldSports,
}

let Locations: Array<Location> = [Trondelag, Ostfold];
let Sports: Array<Sport> = [Fotball, Handball, Volleyball];
export var MockupDB: IMockupDB = { Locations: Locations, Sports: Sports };
//let ThisProps: Props;

// DATABASE example setup FIN

export default MockupDB;