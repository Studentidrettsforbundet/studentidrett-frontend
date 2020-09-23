import React from "react"

///// Database example setup
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
    Areas: Array<Area>;
    Filters: FilterList;
}

const TrondheimClubs: Array<string> = ["NTNUI", "Janus IL"];
const SteinkjerClubs: Array<string> = ["Steinkjer IL"];
const OsloClubs: Array<string> = ["OsloMet IL"]

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

var Trondelag: Area = {
    Name: "Trondelag",
    Cities: [Trondheim, Steinkjer],
}

var Ostfold: Area = {
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


let Areas: Array<Area>   = [Trondelag, Ostfold];
var ThisFilterlist: FilterList = { Area: DefaultArea, City: DefaultCity, Club: "defaultClub", Sport: "defaultSport" };
export var MockupDB: IMockupDB = { Areas: Areas, Filters: ThisFilterlist };
//let ThisProps: Props;

// DATABASE example setup FIN

export default MockupDB;