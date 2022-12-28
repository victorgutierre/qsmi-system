import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
  tableHead: any[] = ['Empresa', 'Website', 'Status Atual', 'Responsável', 'Criador', 'Opções'];

  leads: any[] = [
    {
      name: 'Embaflux',
      url: 'https://www.embaflux.com.br/',
      status: 'Lead',
      responsible: 'Filipe Goulart',
      createdBy: 'Filipe Goulart'
    },
    {
      name: 'Os picoleteiros',
      url: 'https://loja.ospicoleteiros.com.br/',
      status: 'Lead',
      responsible: 'Filipe Goulart',
      createdBy: 'Filipe Goulart'
    },
  ]

  constructor() {}

  public contentHeader: object

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Leads',
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
            name: 'Leads',
            isLink: false,
            link: '/leads'
          }
        ]
      }
    }
  }
}
