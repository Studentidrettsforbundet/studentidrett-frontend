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

export interface City {
    Name: string;
    Clubs: Array<string>;
}

export interface Area {
    Name: string;
    Cities: Array<City>;
}

export interface FilterList {
    Area: Area;
    City: City;
    Club: string;
    Sport: string;
}

export interface IMockupDB {
    Locations: Array<Location>;
    Sports: Array<Sport>;
    Areas: Array<Area>;
    Filters: FilterList;
}

const TrondheimClubs: Array<string> = ["NTNUI", "Janus IL"];
const SteinkjerClubs: Array<string> = ["Steinkjer IL"];
const OsloClubs: Array<string> = ["OsloMet IL"];

const Trondheim: City = {
    Name: "Trondheim",
    Clubs: TrondheimClubs,
};

const Steinkjer: City = {
    Name: "Steinkjer",
    Clubs: SteinkjerClubs,
};

const Oslo: City = {
    Name: "Oslo",
    Clubs: OsloClubs,
}

const TrondelagCities: Array<City> = [Trondheim, Steinkjer];
const OstfoldCities: Array<City> = [Oslo];

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

var TrondelagArea: Area = {
    Name: "Trondelag",
    Cities: [Trondheim, Steinkjer],
}

var OstfoldArea: Area = {
    Name: "Ostfold",
    Cities: OstfoldCities,
}

var DefaultArea: Area = {
    Name: "defaultArea",
    Cities: OstfoldCities.concat(TrondelagCities),
}

var DefaultCity: City = {
    Name: "defaultCity",
    Clubs: TrondheimClubs.concat(SteinkjerClubs.concat(OsloClubs)),
}




let Locations: Array<Location> = [Trondelag, Ostfold];
let Sports: Array<Sport> = [Fotball, Handball, Volleyball];
let Areas: Array<Area> = [TrondelagArea, OstfoldArea];
var ThisFilterlist: FilterList = { Area: DefaultArea, City: DefaultCity, Club: "defaultClub", Sport: "defaultSport" };

export var MockupDB: IMockupDB = { Locations: Locations, Sports: Sports, Areas: Areas, Filters: ThisFilterlist };


//let ThisProps: Props;

// DATABASE example setup FIN

export default MockupDB;