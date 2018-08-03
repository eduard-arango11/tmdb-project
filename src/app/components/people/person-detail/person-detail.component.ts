import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../../services/people.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  public personId;
  public person;
  public sub: any;    

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.personId = +params['id'];
        let id:number = +params['id'];
        this.peopleService.getPersonDetail(id).subscribe(
          (data) => {
            this.person= data;
          }
        );

        //window.scrollTo(0, 0)
      }
    )
  }

  calculateAge():number{
    let age = 0;
    if(this.person.deathday){
      let birthday = +new Date(this.person.birthday);
      let deathday = +new Date(this.person.deathday);
      age = ~~((deathday - birthday) / (31557600000));
    }else{
      let birthday = +new Date(this.person.birthday);
      age = ~~((Date.now() - birthday) / (31557600000));
    }
    return age;
  }
}
