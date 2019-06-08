// home page plant categories
export interface PlantCategory {
  id: number;
  name: string;
  url: string;
}

// home page each cateogry plants
export interface plantCatInfo {
  id: number;
  img: string;
  name: string;
}

// home page plant categries response
export interface PlantCatRes {
  category: [
    {
      id: number;
      name: string;
    }
  ],
  plant: [
    {
      id: number;
      name: string;
      image: string;
    }
  ]
}

// plant page details section
export interface PlantDetailsOBJ {
  plant: {
    plant_id: number;
    plant_name: string;
    plant_image: string;
    plant_category_name: string;
    plant_soil_name: string;
    plant_steps: string;
    plant_humidity: string;
    plant_season: string;
    plant_wind: string;
    plant_irrigation: string;
    plant_lightning: string;
    plant_information: string;
    plant_fertilizerz: [
      {
        name: string;
      }
    ];
  };
}

// plant page questions section
export interface PlantQuestionsObj {
  questions: [
    {
      questionId: number;
      Clientname: string;
      questionContain: string;
      answers: [
        {
          plantationname: string;
          answer: string;
        }
      ];
    }
  ];
}

// plant page comments section
export interface PlantCommentsObj {
  comments: [
    {
      comment: string;
      plantationName: string;
    }
  ]
}

// plant page order from plantations section
export interface PlantPlantationsObj {
  plantation: [
    {
      plantationID: number;
      plantationName: string;
      price: number;
    }
  ]
}

// user fav page plants
export interface userFavPlantsPage {
  plant: [
    {
      id: number;
      image: string;
      name: string;
      cateogry_name: string;
    }
  ]
}
