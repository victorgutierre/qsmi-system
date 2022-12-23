import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-financings',
  templateUrl: './financings.component.html',
  styleUrls: ['./financings.component.scss']
})
export class FinancingsComponent implements OnInit {
  constructor() {}

  public contentHeader: object

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Financeiro',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Financeiro',
            isLink: false,
            link: '/financings'
          }
        ]
      }
    }
  }
}
