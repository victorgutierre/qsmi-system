import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-generator',
  templateUrl: './website-generator.component.html',
  styleUrls: ['./website-generator.component.scss']
})
export class WebsiteGeneratorComponent implements OnInit {
  public contentHeader: object

  transformStatus(data: string) {
    if(data == 'Em andamento') {
      return 'warning'
    } else if(data == 'Finalizado') {
      return 'success'
    } else if (data == 'Cancelado') {
      return 'danger'
    }
  }

  transformSearchStatus(data: string) {
    if(data == 'Parado') {
      return 'danger'
    } else if(data == 'Buscando') {
      return 'succes'
    }
  }

  clients: any[] = [
    {
      id: 1,
      name: 'Delcaflex (Espanhol)',
      url: 'delcaflex.com',
      keywords: 0,
      suggestions: 0,
      regions: 0,
      urls: 0,
      archives: 0,
      status: 'Inicial'
    },
    {
      id: 2,
      name: 'Ricamad 2',
      url: 'ricamad.com.br',
      keywords: 20,
      suggestions: 0,
      regions: 0,
      urls: 0,
      archives: 0,
      status: 'Inicial'
    },
    {
      id: 3,
      name: 'Ricamad 2',
      url: 'ricamad.com.br',
      keywords: 5,
      suggestions: 0,
      regions: 1,
      urls: 54,
      archives: 54,
      status: 'Finalizado'
    },
    {
      id: 4,
      name: 'Ricamad',
      url: 'ricamad.com.br',
      keywords: 20,
      suggestions: 0,
      regions: 1,
      urls: 756,
      archives: 756,
      status: 'Finalizado'
    },
    {
      id: 5,
      name: 'Quality SMI',
      url: 'qualitysmi.com.br',
      keywords: 9,
      suggestions: 0,
      regions: 0,
      urls: 0,
      archives: 0,
      status: 'Inicial'
    },
    {
      id: 6,
      name: 'Mekanix',
      url: 'qualitysmi.com.br',
      keywords: 9,
      suggestions: 0,
      regions: 0,
      urls: 0,
      archives: 0,
      status: 'Inicial'
    },
  ]

  clientsHeader: any[] = ['#', 'Empresa', 'Palavras', 'Sugestões', 'Regiões', 'URLs', 'Arquivos', 'Status', 'Opções']

  constructor() { }

  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Gerasites',
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
            name: 'Gerasites',
            isLink: false,
            link: '/website-generator'
          }
        ]
      }
    }
  }
}
