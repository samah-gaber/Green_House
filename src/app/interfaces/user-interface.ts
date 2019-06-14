export interface UserSignedUp {
    name: string;
    email: string;
    password: string;
    city: string;
    birthdate?: Date;
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
    role: number;
}

export interface UserFavPlant {
    user_id: number;
    plant_id: number;
}
