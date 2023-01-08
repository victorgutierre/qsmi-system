import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-position',
  templateUrl: './search-position.component.html',
  styleUrls: ['./search-position.component.scss']
})
export class SearchPositionComponent implements OnInit {
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
      totalKeywords: 0,
      totalCrosswords: 0,
      searchStatus: 'Parado'
    },
    {
      id: 2,
      name: 'Maquinas Na Web (Nacional E Regionalizado Na Palavras)',
      url: 'maquinasnaweb.com',
      status: 'Em andamento',
      totalKeywords: 0,
      totalCrosswords: 0,
      searchStatus: 'Parado'
    },
    {
      id: 3,
      name: 'Pousada Bonns Ventos (Regionalizado Na Palavra - Ilha Bela)',
      url: 'maquinasnaweb.com',
      status: 'Em andamento',
      totalKeywords: 0,
      totalCrosswords: 0,
      searchStatus: 'Parado'
    },
  ]

  clientsHeader: any[] = ['Empresa', 'Domínio', 'Projeto', 'Total de Palavras', 'Total de Cruzadas', 'Busca', 'Opções']

  constructor() { }

  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Bucar Posicionamento',
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
            name: 'Bucar Posicionamento',
            isLink: false,
            link: '/search-position'
          }
        ]
      }
    }
  }

}