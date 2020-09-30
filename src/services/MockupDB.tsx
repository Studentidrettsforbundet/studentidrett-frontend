import React from "react"

///// Database example setup
export interface Sport {
    type: 'SPORT';
    Name: string;
    Info: string;
}

export interface Region {
    type: 'REGION';
    Name: string;
    Sports: Array<Sport>;
}

export interface City {
    type: 'CITY';
    Name: string;
    Clubs: Array<string>;
}

export interface Club {
    type: 'CLUB';
    Name: string;
    Info: string;
}

export interface Team {
    type: 'TEAM'
    Name: string;
    Text: string;
    Img: string;
}

export interface IMockupDB {
    Regions: Array<Region>;
    Sports: Array<Sport>;
    Clubs: Array<Club>;
    Teams: Array<Team>;
}

const TrondheimClubs: Array<string> = ["NTNUI", "Janus IL"];
const SteinkjerClubs: Array<string> = ["Steinkjer IL"];
const OsloClubs: Array<string> = ["OsloMet IL"];

const NTNUI: Club = {
    type: 'CLUB',
    Name: 'NTNUI',
    Info: 'NTNUI is a studentclub',
}

const JanusIL: Club = {
    type: 'CLUB',
    Name: 'Janus IL',
    Info: 'Janus IL is .. ',
}

const Trondheim: City = {
    type: "CITY",
    Name: "Trondheim",
    Clubs: TrondheimClubs,
};

const Steinkjer: City = {
    type: "CITY",
    Name: "Steinkjer",
    Clubs: SteinkjerClubs,
};

const Oslo: City = {
    type: "CITY",
    Name: "Oslo",
    Clubs: OsloClubs,
}

const TrondelagCities: Array<City> = [Trondheim, Steinkjer];
const OstfoldCities: Array<City> = [Oslo];

const Fotball: Sport = {
    type: "SPORT",
    Name: "Fotball",
    Info: 'football is nice' ,
};

const Handball: Sport = {
    type: "SPORT",
    Name: "Handball",
    Info: 'handball is ball' ,
};

const Volleyball: Sport = {
    type: "SPORT",
    Name: "Volleyball",
    Info: 'Volleyball is super',
}

const TrondelagSports: Array<Sport> = [Fotball, Handball];
const OstfoldSports: Array<Sport> = [Volleyball, Handball];

var Trondelag: Region = {
    type: "REGION",
    Name: "Trondelag",
    Sports: TrondelagSports,
}

var Ostfold: Region = {
    type: "REGION",
    Name: "Ostfold",
    Sports: OstfoldSports,
}

var DefaultCity: City = {
    type: "CITY",
    Name: "defaultCity",
    Clubs: TrondheimClubs.concat(SteinkjerClubs.concat(OsloClubs)),
}

const team1: Team = {
    type: "TEAM",
    Name: 'team 1',
    Text: ' text for team 1',
    Img : 'sunflower',
}

const team2: Team = {
    type: "TEAM",
    Name: 'team 2',
    Text: ' text for team 2',
    Img: 'japanese',
}

const team3: Team = {
    type: "TEAM",
    Name: 'team 3',
    Text: ' text for team 3',
    Img: 'sunflower',
}

let Regions: Array<Region> = [Trondelag, Ostfold];
let Sports: Array<Sport> = [Fotball, Handball, Volleyball];
let Clubs: Array<Club> = [NTNUI, JanusIL]
let Teams: Array<Team> = [team1, team2, team3]

export var MockupDB: IMockupDB = { Regions: Regions, Sports: Sports, Clubs: Clubs, Teams: Teams };


//let ThisProps: Props;

// DATABASE example setup FIN

export default MockupDB;