import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-clients-panel',
  templateUrl: './clients-panel.component.html',
  styleUrls: ['./clients-panel.component.scss']
})
export class ClientsPanelComponent implements OnInit {
  listHead: any[] = ['#', 'Empresa', 'Status', 'Domínio', 'Opções']

  clients: any[] = [
    {
      id: 2,
      name: 'Maquinas Na Web (Nacional E Regionalizado Na Palavras)',
      status: 'Sem Acesso',
      url: 'http://www.maquinasnaweb.com/',
      clientStatus: 'warning',
    },
    {
      id: 3,
      name: 'Luxfer (Renovação)',
      status: 'Sem Acesso',
      url: 'http://www.luxfer.com.br/',
      clientStatus: 'warning',
    },
    {
      id: 4,
      name: 'Therba',
      status: 'Sem Acesso',
      url: 'https://www.therba.com.br/',
      clientStatus: 'warning',
    },
    {
      id: 5,
      name: 'Delcaflex.com (Em Espanhol)',
      status: 'Briefing',
      url: 'http://www.delcaflex.com/',
      clientStatus: 'warning',
    },
    {
      id: 15,
      name: 'Arestha Abrasivos',
      status: 'Sem Acesso',
      url: 'https://www.aresthaabrasivos.com.br/',
      clientStatus: 'success',
    },
  ]

  verifyStatus = (data: string) => {
    const obj = {
      "Briefing": "info",
      "Sem Acesso": "danger",
      "Painel Cliente": "success",
    }

    return obj[data]
  }

  constructor() {}

  public contentHeader: object

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Painel do Cliente',
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
            name: 'Painel do Cliente',
            isLink: false,
            link: '/clients-panel'
          }
        ]
      }
    }
  }
}
