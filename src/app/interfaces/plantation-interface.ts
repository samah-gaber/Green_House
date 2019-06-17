// plantation home page plant categries response
export interface AddPlantCatRes {
    category: [
        {
        id: number;
        name: string;
        }
    ]
}
// plantation home page category plants response
export interface AddCatPlantsRes {
    plant: [
        {
            id: number;
            name: string;
        }
    ]
}
    
// plantation home page category plants response
export interface GetPlantFertTypes {
    fert: [
        {
            name: string;
            id: number;
        }
    ]
}

// plantation home page category plants response
export interface addOldPlantObj {
    plant: {
        plantId: number;
        itemContents: [
            {
                type: string;
                price: number;
            }
        ]
    }
}