import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tokens-control',
  templateUrl: './tokens-control.component.html',
  styleUrls: ['./tokens-control.component.scss']
})
export class TokensControlComponent implements OnInit {
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

  transformSearch(data: string) {
    if(data == 'Parado') {
      return 'play'
    } else if(data == 'Buscando') {
      return 'square'
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
      name: 'Roda Mais Pneus (Regionalizado)',
      url: 'rodamais.com.br',
      status: 'Em andamento',
      service: '',
      token: '2db0b16b2401fc538a0efe17eab9ac06',
      tokenStatus: 'Ativo',
    },
    {
      id: 2,
      name: 'Maquinas Na Web (Nacional E Regionalizado Na Palavras)',
      url: 'maquinasnaweb.com',
      status: 'Em andamento',
      service: '',
      token: '748dd3f7c83b3af77a7980f94d5958a1',
      tokenStatus: 'Ativo',
    },
    {
      id: 3,
      name: 'Luxfer (Renovação)',
      url: 'luxfer.com.br',
      status: 'Em andamento',
      service: '',
      token: '21825dde8b32a0d0a25341902646d3e7',
      tokenStatus: 'Ativo',
    },
    {
      id: 4,
      name: 'Therba',
      url: 'therba.com.br',
      status: 'Em andamento',
      service: '',
      token: '2ac1a3d3d160a859d7cfa40fd5f8f4e6',
      tokenStatus: 'Ativo',
    },
  ]

  clientsHeader: any[] = ['Empresa', 'Domínio', 'Serviço', 'Token', 'Status', 'Alterar Status']

  constructor() { }

  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Controle de Tokens',
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
            name: 'Controle de Tokens',
            isLink: false,
            link: '/tokens-control'
          }
        ]
      }
    }
  }

}
