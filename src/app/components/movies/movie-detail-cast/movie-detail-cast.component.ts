import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-detail-cast',
  templateUrl: './movie-detail-cast.component.html',
  styleUrls: ['./movie-detail-cast.component.scss']
})
export class MovieDetailCastComponent implements OnInit {

  @Input() public movieCast;

  constructor() { }

  ngOnInit() {
  }

}
