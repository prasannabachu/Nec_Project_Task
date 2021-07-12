export interface UserDetails {
    'First Name': string;
    'Last Name': string;
    'Date of Birth': string;
    'Gender': string;
    'Status': string;
}
export interface APIData {
    createdTime: string;
    fields: UserDetails;
    id: string
}

export interface UserApiData {
    records: APIData[];
}
export interface UserReqBody{
    fields: UserDetails;
}