import { Component, OnInit, Input } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { PlantQuestionsObj } from '../../interfaces/plant-interface';

@Component({
  selector: 'app-plant-details-questions',
  templateUrl: './plant-details-questions.component.html',
  styleUrls: ['./plant-details-questions.component.scss']
})
export class PlantDetailsQuestionsComponent implements OnInit {

  @Input() plantId;
  plantQuestionsObj: PlantQuestionsObj;
  plantQuestionsUrl: string;

  // plantQuestionsObj = [
  //   {
  //     'questionId': '1',
  //     'userName': 'أحمد عبدالله', //user id
  //     'questionText': 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبو أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا.  يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولارماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا.؟',
  //     'questionImgSrc': 'https://picsum.photos/id/965/200/200',
  //     'questionTags': [
  //       'سماد', 'خضراوات'
  //     ],
  //     'questionDate': 'منذ 10 دقائق',
  //     'replies': [
  //       {
  //         'userName': 'مشتل البلكونة',
  //         'replyText': 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبو أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوتلابوري ات دولار ماجنا أليكيوا.',
  //         'replyDate': 'منذ 5 دقائق'
  //       },
  //       {
  //         'userName': 'مشتل البلكونة',
  //         'replyText': 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبو أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوتلابوري ات دولار ماجنا أليكيوا.',
  //         'replyDate': 'منذ 5 دقائق'
  //       }
  //     ]
  //   },
  //   {
  //     'questionId': '1',
  //     'userName': 'أحمد عبدالله',
  //     'questionText': 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبو أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا.  يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولارماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا.؟',
  //     'questionTags': [
  //       'سماد', 'خضراوات'
  //     ],
  //     'replies': [
  //       {
  //         'userName': 'مشتل البلكونة',
  //         'replyText': 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبو أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا فينايم,كيواس نوستريد أنكايديديونتيوتلابوري ات دولار ماجنا أليكيوا.'
  //       }
  //     ]
  //   }
  // ]

  constructor(
    private plantService: PlantService
  ) { }

  ngOnInit() {
    this.plantQuestionsUrl = `/quest/${this.plantId}`;
    this.getPlantDetails();
  }

  getPlantDetails() {
    this.plantService.plantsGetRequest(this.plantQuestionsUrl).subscribe( (res: PlantQuestionsObj) => {
      this.plantQuestionsObj = res;
    },
    error => {
      console.log(error);
    })
  }
}
