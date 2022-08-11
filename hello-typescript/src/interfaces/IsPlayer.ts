export interface IsPlayer { 
    name: string;
    readonly country: string;
    //we are getting value age from using getProperty value, here we can use readonly type
    play(): void;
    getProperty(): number;
}