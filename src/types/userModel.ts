export interface IUser{
  _id?: string;
  username: string;
  password: string;
  organizationName?: string;
  zone? : string;
  resources?: string[];
  budget?: number;
}

export interface IResource {
  _id: string;
  missile: IMissiles;
  amount: number;
}

export interface IMissiles {
  name: MissilesName;
  description: string;
  speed: number;
  intercepts: string[];
  price: number;
}

export enum OrganizationName {
  NULL = "",
  IDF = "IDF",
  HEZBOLLAH = "Hezbollah",
  ZONE = "Hamas",
  IRGC = "IRGC",
  HOUTHIS = "Houthis",                   
}


export enum Zone {
  NORTH = "north",
  SOUTH = "south",
  CENTER = "Center",
  JUDEA = "Judea and Samaria",
}



export enum MissilesName {
  IRON_DOME = "Iron Dome",
  DAVIDS_SLING = "David's Sling",
  PATRIOT = "Patriot",
  ARROW = "Arrow",
  QASSAM = "Qassam",
  M_75 = "M-75",
  FAJR_5 = "Fajr-5",
  ZELZAL_2 = "Zelzal-2",
  SHAHAB_3 = "Shahab-3",
  FATEH_110 = "Fateh-110",
  BADR_1 = "Badr-1",
  QUDS_1 = "Quds-1",
}


export interface IOrganization {
  name: "IDF - North" | "IDF - South" | "IDF - Center" | "IDF - Judea and Samaria" | "Hezbollah" | "Hamas" | "IRGC" | "Houthis" ;

  budget: number;
  
} 

