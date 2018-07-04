import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public foundResult;
  private sub: any;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let query:string = params['query'];
        if (query !== "") {
          this.searchService.searchMovie(query).subscribe(
            (data) => {
              this.foundResult= data;
              console.log('resultado: ', this.foundResult);
            }
          );
        }
      }
    )
  }

}
