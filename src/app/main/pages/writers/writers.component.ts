import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.scss']
})
export class WritersComponent implements OnInit {

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

  techList: any[] = [
    {
      id: 1,
      name: 'Juliana Oliveira',
      clients: [
        {
          id: 1,
          name: 'Montaferro (REGIONALIZADO)',
        },
        {
          id: 2,
          name: 'Fort Bag',
        },
        {
          id: 3,
          name: 'Hinovar QUALITY MIDIA',
        },
        {
          id: 4,
          name: 'Cardoso Facchin (Regionalizado)',
        },
        {
          id: 5,
          name: 'Construtora Ideal',
        },
        {
          id: 6,
          name: 'Best Doors',
        },
        {
          id: 7,
          name: 'Control Word (Quality Midia)',
        },
        {
          id: 8,
          name: 'Luminar Acessorios',
        },
        {
          id: 9,
          name: 'Vertex Limpeza Profissional (Regionalizada)',
        },
        {
          id: 10,
          name: 'Sn Compressores',
        },
        {
          id: 11,
          name: 'Sintetize 3D',
        },
        {
          id: 12,
          name: 'Saicon',
        },
      ]
    },
    {
      id: 2,
      name: 'Antônio da Silva Ferreira',
      clients: [
        {
          id: 1,
          name: 'Firstclean',
        },
        {
          id: 2,
          name: 'Casa De Baterias Oliveira (Regionalizado)',
        },
        {
          id: 3,
          name: 'Delcaflex (Quality Midia)',
        },
        {
          id: 4,
          name: 'Tecno Portas',
        },
        {
          id: 5,
          name: 'Pneus Kombat',
        },
        {
          id: 6,
          name: 'Lajes Base',
        },
        {
          id: 7,
          name: 'Rodex',
        },
        {
          id: 8,
          name: 'Sustentex',
        },
        {
          id: 9,
          name: 'Pousada Bonns Ventos (Regionalizado Na Palavra - Ilha Bela)',
        },
      ]
    },
    {
      id: 3,
      name: 'Edson Junior',
      clients: [
        {
          id: 1,
          name: 'Bira Geradores',
        },
        {
          id: 2,
          name: 'De Fibras Piscinas',
        },
        {
          id: 3,
          name: 'Rsc Metal (Quality Midia)',
        },
        {
          id: 4,
          name: 'Teixeira Redes De Proteção (Regionalizado)',
        },
        {
          id: 5,
          name: 'Jwe Medic',
        },
      ]
    },
  ]

  clients: any[] = [
    {
      id: 1,
      name: 'Roda Mais Pneus (Regionalizado)',
      url: 'rodamais.com.br',
      status: 'Em andamento'
    },
    {
      id: 2,
      name: 'Maquinas Na Web (Nacional E Regionalizado Na Palavras)',
      url: 'maquinasnaweb.com',
      status: 'Em andamento'
    },
    {
      id: 3,
      name: 'Luxfer (Renovação)',
      url: 'luxfer.com.br',
      status: 'Em andamento'
    },
    {
      id: 4,
      name: 'Delcaflex.com (Em Espanhol)',
      url: 'delcaflex.com',
      status: 'Em andamento'
    },
    {
      id: 5,
      name: 'Pousada Bonns Ventos (Regionalizado Na Palavra - Ilha Bela)',
      url: 'pousadabonnsventos.com.br',
      status: 'Em andamento'
    },
  ]

  clientsHeader: any[] = ['#', 'Empresa', 'Domínio', 'Projeto', 'Técnico', 'Opções']

  techListHead: any[] = ['#', 'Empresa', 'Opções']

  constructor() { }

  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Redatores',
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
            name: 'Redatores',
            isLink: false,
            link: '/writers'
          }
        ]
      }
    }
  }

}