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

export interface AuthUserData {
    name: string;
    id: number;
    token: string;
}

export interface UserFavPlant {
    user_id: number;
    plant_id: number;
}

export interface UserFavPlantPage {
    plant_id: number;
    plant_name: string;
    category_id: number;
    category_name: string;
}
