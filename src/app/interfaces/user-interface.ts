export interface UserSignedUp {
    name: string;
    email: string;
    password: string;
    city: string;
    birthdate?: string;
    gender?: string;
}

export interface UserSignedIn {
    UserName: string;
    Password: string;
}

export interface AuthUserData {
    token: string;
    userName: string;
    userId: number;
}
