import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
    
  constructor(
    private router: Router
  ) {}

  searchN(){
      this.router.navigate(['/movies', 'now_playing']);
  }
  searchP(){
      this.router.navigate(['/movies', 'popular']);
  }
  
}
