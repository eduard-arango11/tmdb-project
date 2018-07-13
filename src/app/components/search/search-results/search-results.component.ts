import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public moviesFound;
  public peopleFound;
  public sub: any;
  public isTheMouseOverPosterArray:Array<boolean>;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
  ) { 
    this.isTheMouseOverPosterArray = new Array<boolean>();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let query:string = params['query'];
        if (query !== "") {
          this.searchService.searchMovie(query).subscribe(
            (data) => {
              this.moviesFound= data;
              this.moviesFound.forEach(element => {
                this.isTheMouseOverPosterArray.push(false);
              });
            }
          );
        }
      }
    )

    this.sub = this.route.params.subscribe(
      params => {
        let query:string = params['query'];
        if (query !== "") {
          this.searchService.searchPerson(query).subscribe(
            (data) => {
              this.peopleFound= data.sort((a: any, b: any) => b['popularity'] - a['popularity']);
              this.peopleFound.forEach(element => {
                this.isTheMouseOverPosterArray.push(false);
              });
            }
          );
        }
      }
    )
  }

  eventMouse(index:number){
    if (this.isTheMouseOverPosterArray[index]==false) {
      this.isTheMouseOverPosterArray[index]=true;
    } else {
      this.isTheMouseOverPosterArray[index]=false;
    }
  }

}
