/* eslint-disable prettier/prettier */
export interface userI{
    uuid: number;
    acc_type: string; 
    name: string;
    email: string;
    phone: number;
    country: string;
    dob: string;
    password?: string;
}