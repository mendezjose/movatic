export type Station = {
  is_installed: number;
  is_renting: number;
  is_returning: number;
  last_reported: number;
  num_bikes_available: number;
  num_bikes_available_types: {
    classic: number;
    electric: number;
    smart: number;
  };
  num_docks_available: number;
  station_id: string;
};

export type BikeTypesAvaliable = { classic: number; electric: number; smart: number };
