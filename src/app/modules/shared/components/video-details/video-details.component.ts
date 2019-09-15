import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  public collapse = true;

  constructor() { }

  ngOnInit() {
  }

}
