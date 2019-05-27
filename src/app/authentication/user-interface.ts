export interface UserSignedUp {
    userName: string;
    email: string;
    password: string;
    city: string;
    birthDate?: string;
    gender?: string;
}

export interface UserSignedIn {
    email: string;
    password: string;
}
