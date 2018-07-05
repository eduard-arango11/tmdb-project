import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchedTerm: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  search(){
    if (this.searchedTerm !== "") {
      this.router.navigate(['/search', this.searchedTerm]);
    }
  }

}
