import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
// For MDB Angular Free
import { WavesModule } from 'angular-bootstrap-md'
import { plantCatInfo, PlantCatRes } from '../../interfaces/plant-interface';
import { HttpClient } from '@angular/common/http';
import { PlantService } from '../../services/plant.service';
import { AuthUserData } from 'src/app/interfaces/user-interface';

@Component({
  selector: 'app-plant-categories',
  templateUrl: './plant-categories.component.html',
  styleUrls: ['./plant-categories.component.scss']
})
export class PlantCategoriesComponent implements OnInit {

  plantCatsUrl: '';
  plantCatRes: PlantCatRes;
  singleCatPlants: plantCatInfo;
  userData : AuthUserData;
  userRole : number;

  // plantCatRes = {
  //   category: [
  //     {
  //       id: 1,
  //       name: 'cat1'
  //     },
  //     {
  //       id: 2,
  //       name: 'cat1'
  //     },
  //     {
  //       id: 3,
  //       name: 'cat1'
  //     },
  //     {
  //       id: 4,
  //       name: 'cat1'
  //     },
  //     {
  //       id: 5,
  //       name: 'cat1'
  //     }
  //   ],
  //   plant: [
  //     {
  //       id: 1,
  //       name: 'flower',
  //       image: 'string'
  //     },
  //     {
  //       id: 2,
  //       name: 'flower',
  //       image: 'string'
  //     },
  //     {
  //       id: 3,
  //       name: 'flower',
  //       image: 'string'
  //     }
  //   ]
  // }




  constructor(
    private http: HttpClient,
    private plantService: PlantService,
    private userService: UserService
  ) {
    if(this.userService.returnAuthUserData()) {
      this.userData = this.userService.returnAuthUserData();
      this.userRole = this.userData.role;
    }
  }

  ngOnInit() {
    this.getPlantCategories();
    // this.destructRes(this.plantOBJ);
    // this.setCatActiveState();
  }


  getPlantCategories() {
    this.plantService.plantsCatGetRequest().subscribe(
      
      (res: PlantCatRes) => {
        // debugger;
        console.log("initial plant cata response");
        console.log(res);
        this.plantCatRes = res;
        console.log('document.getElementById("1")',document.getElementById('1'));    
        console.log('document.getElementsByClassName("plants-categories")',document.getElementsByClassName('plants-categories'));    
        // this.styleActiveCat(this.plantCatRes.category[0]);
      }
    )

    // this method should be called in the res function
    // if(this.plantCatRes) {
    //   this.styleActiveCat(this.plantCatRes.category[0]);
    // }
  }

  showCatPlants(ev) {
    // this.styleActiveCat(ev.target);
    const catName = ev.target.innerHTML;
    const catId = ev.target.getAttribute('id');
    let catData;
    if(this.userData) {
      if(this.userData.role == 2) {
        catData = catId;
      } else {
        catData = catName;
      }
    } else {
      catData = catName;
    }
    console.log('event.target ' , ev.target);
    console.log('event.target.getAttribute ' , ev.target.getAttribute('id'));
    console.log('category name ' , catName);
    console.log('category id ' , catId);
    console.log('category data ' , catData);
    // this.plantService.plantsSingleCatGetRequest(catData).subscribe(
    //   (res: PlantCatRes) => {
    //     console.log(res);
    //     this.plantCatRes.plant = res.plant;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
  }

  // styleActiveCat(cat: {}) {
  //   // let cats: {}[];
  //   let cats = this.plantCatRes.category;
  //   console.log('style active cat => cat ', cat);
  //   // let cats = document.querySelectorAll('.cat-tab');
  //   // if(Array.toString..length>0) {
  //   //   cats = document.querySelectorAll('.cat-tab');
  //   // }
  //   console.log('style active cat => cats ', cats);
  //   // Array.from(cats).forEach( elt => {
  //     // (<HTMLElement>elt).classList.remove('alter');
  //     // console.log('style active cat => elt ', elt);
  //     // if(document.getElementById(elt.id.toString())) {
  //     //   document.getElementById(elt.id.toString()).style.color = '#2A6652';
  //     //   document.getElementById(elt.id.toString()).style.borderColor = 'transparent';
  //     // }
  //   // });

  //   // cats.forEach(elt => {
  //   //   console.log('elt ', elt);
  //   //   console.log('elt.id ', elt.id);
  //   //   console.log('(elt.id).toString() ', (elt.id).toString());
  //   //   console.log('document.getElementById("1") ', document.getElementById('1') );
  //   //   console.log('document.getElementById( (elt.id) ', document.getElementById( (elt.id).toString()) );
  //   //   console.log('(<HTMLElement>document.getElementById( (elt.id).toString() )) ', (<HTMLElement>document.getElementById( (elt.id).toString() )));
  //   //  let allcats = (<HTMLElement>document.getElementById( (elt.id).toString() ));
  //   //  console.log('allcats', allcats);
  //   //  allcats.style.borderBottom = '1px solid transparent';
  //   //  allcats.style.color = '#2A6652';
  //   // });
  //   cats.map( elt => {
  //     console.log('elt ', elt);
  //     console.log('elt.id ', elt.id);
  //     console.log('(elt.id).toString() ', (elt.id).toString());
  //     console.log('document.getElementById("1") ', document.getElementById('1') );
  //     console.log('document.getElementById( (elt.id) ', document.getElementById( (elt.id).toString()) );
  //     console.log('(<HTMLElement>document.getElementById( (elt.id).toString() )) ', (<HTMLElement>document.getElementById( (elt.id).toString() )));
  //     let eltId = (elt.id).toString();
  //     console.log(typeof(eltId));
  //     let allcats = (<HTMLElement>document.getElementById(eltId));
  //    console.log('allcats', allcats);
  //    allcats.style.borderBottom = '1px solid transparent';
  //    allcats.style.color = '#2A6652';
  //   });

  //   let activeCat = (<HTMLElement>document.getElementById( (cat.id).toString() ));
  //   activeCat.style.color = '#FF825C';
  //   activeCat.style.borderColor = '#FF825C';

  //   // if( document.getElementById( cat.id.toString() ) ) {
  //   //   document.getElementById( cat.id.toString() ).classList.add('active');

  //   // }
  //   // (<HTMLElement>cat).classList.add('active');
  //   // (<HTMLElement>cat).style.color = '#FF825C';
  //   // (<HTMLElement>cat).style.borderColor = '#FF825C';
  // }


}

