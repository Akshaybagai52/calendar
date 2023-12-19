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
  
  export interface User{
    
  }