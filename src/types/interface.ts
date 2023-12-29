export interface loginProps  {
    msg: string | null;
    user: string | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}
export interface authGoogleProps{
    clientId:string | undefined;
    clientSecret:string | undefined;
}
export interface nextAuth{

}



export const enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
  }
  

  
  export interface AppState {
    theme: null | Theme;
    
  }


  export interface NotificationData {
    id: number;
    title: string |null;
    startDate: any;
    endDate: any
  }
  
  export interface WeatherDetail {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }
  
  export interface WeatherData {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherDetail[];
    city: {
      id: number;
      name: string;
      coord: {
        lat: number;
        lon: number;
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
    };
  }
