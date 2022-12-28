import { Component, Input, OnInit } from '@angular/core';
import { colors } from 'app/colors.const';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  @Input() listHead: any[];
  @Input() listData: any[];

  verifyStatus(status: number) {
    const colors = {
      1: 'blue',
      2: 'red'
    }

    return colors[status];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
