import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {IPageChangeEvent} from '@covalent/core/paging';
import { PeopleService } from '../../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public currentType:string;
  public people;
  public sub: any;

  public currentPage;
  public totalResults:number;
  public totalPages:number;
  public eventLinks: IPageChangeEvent;

  constructor(
    private peopleService: PeopleService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.currentType = params['type'];
        this.currentPage = params['page'];
        this.getPeopleActualPage();
      }
    )
  }

  changePage(event: IPageChangeEvent): void {
    this.currentPage = event.page;
    this.router.navigate(['/people',this.currentType, this.currentPage]);
    this.getPeopleActualPage();

  }

  getPeopleActualPage(){
    this.peopleService.getPopularPeople(this.currentPage).subscribe(
      (data) => {
        this.people= data;
        this.totalPages = this.people[0].total_pages;
        this.totalResults = this.people[0].total_results;
      }
    );
  }

}
