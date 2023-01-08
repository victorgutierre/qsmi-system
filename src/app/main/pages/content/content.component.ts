import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

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

  tableHeader: any[] = ['#', 'Empresa', 'Projeto', 'Redator', 'Em Andamento', 'Finalizado', 'Aprovado', 'Arquivado', 'Total', 'Opções']
  content: any[] = [
    {
      id: 1,
      name: 'Roda Mais Pneus (Regionalizado)',
      url: 'rodamais.com.br',
      status: 'Em andamento',
      writer: null,
      inProgress: 0,
      finished: 0,
      approved: 0,
      archived: 0,
      total: 0
    },
    {
      id: 2,
      name: 'Maquinas Na Web (Nacional E Regionalizado Na Palavras)',
      url: 'maquinasnaweb.com',
      status: 'Em andamento',
      writer: null,
      inProgress: 0,
      finished: 0,
      approved: 0,
      archived: 0,
      total: 0
    },
    {
      id: 3,
      name: 'Luxfer (Renovação)',
      url: 'luxfer.com.br',
      status: 'Em andamento',
      writer: 'Marienny (Freela)',
      inProgress: 90,
      finished: 0,
      approved: 0,
      archived: 0,
      total: 0
    },
    {
      id: 4,
      name: 'Therba',
      url: 'therba.com.br',
      status: 'Em andamento',
      writer: 'Tonny Marques',
      inProgress: 70,
      finished: 0,
      approved: 0,
      archived: 0,
      total: 0
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Content',
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
            name: 'Content',
            isLink: false,
            link: '/content'
          }
        ]
      }
    }
  }

}
