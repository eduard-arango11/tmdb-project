import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public people;
  public sub: any;

  public currentPage;
  public totalResults:number;
  public totalPages:number;

  constructor(
    private peopleService: PeopleService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.currentPage = 1;
        this.paginator.firstPage();
        this.getPeopleActualPage(this.currentPage);
      }
    )
  }

  changePage(event){
    this.currentPage = event.pageIndex + 1;
    this.getPeopleActualPage(this.currentPage);
  }

  getPeopleActualPage(page:number){
    this.peopleService.getPopularPeople(page).subscribe(
      (data) => {
        this.people= data;
        this.totalPages = this.people[0].total_pages;
        this.totalResults = this.people[0].total_results;
      }
    );
  }

}
