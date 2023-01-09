import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canceled',
  templateUrl: './canceled.component.html',
  styleUrls: ['./canceled.component.scss']
})

export class CanceledComponent implements OnInit {
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
      name: 'Samira Hassan Ali Moveis Me (Regional)',
      url: 'moveishassan.com.br',
      service: '',
      project: 'Cancelado',
      search: 'Parado',
      clientSince: '05/10/2021',
      canceledSince: '06/01/2023',
      content: 0,
    },
    {
      id: 2,
      name: 'Luxfer Tubos E Acos Ltda',
      url: 'luxfer.com.br',
      service: '',
      project: 'Cancelado',
      search: 'Parado',
      clientSince: '29/05/2020',
      canceledSince: '12/12/2022',
      content: 80,
    },
    {
      id: 3,
      name: 'Studio Revestir',
      url: 'informacoes.studiorevestir.com.br',
      service: '',
      project: 'Cancelado',
      search: 'Parado',
      clientSince: '06/08/2021',
      canceledSince: '12/12/2022',
      content: 97,
    },
    {
      id: 4,
      name: 'Gtmax3D',
      url: 'informacoes.studiorevestir.com.br',
      service: '',
      project: 'Cancelado',
      search: 'Parado',
      clientSince: '26/07/2021',
      canceledSince: '06/12/2022',
      content: 50,
    },
  ]

  clientsHeader: any[] = ['#', 'Empresa', 'Domínio', 'Serviço', 'Projeto', 'Busca', 'Cliente desde', 'Cancelado desde', 'Conteúdo', 'Opções']

  constructor() { }

  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Cancelados',
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
            name: 'Cancelados',
            isLink: false,
            link: '/canceled'
          }
        ]
      }
    }
  }
}
