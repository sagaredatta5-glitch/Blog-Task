import { Component, Input, OnInit } from '@angular/core';
import { Iblog } from 'src/app/model/blog';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() blogs!:Iblog
  constructor() { }

  ngOnInit(): void {
  }

}
