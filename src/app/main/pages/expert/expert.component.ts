import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {

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
      name: 'Pedro Araújo Felix',
      clients: []
    },
    {
      id: 2,
      name: 'Paulo Rodrigues',
      clients: [
        {
          id: 1,
          name: 'Cienza',
          url: 'www.cienza.com.br'
        },
        {
          id: 2,
          name: 'Acqua Gelata (Nacional E Regionalizado Na Palavra)',
          url: 'www.acquagelata.com.br'
        },
        {
          id: 3,
          name: 'Rodex',
          url: 'www.rodex.com.br'
        },
        {
          id: 4,
          name: 'Torre De Resfriamento Brasil',
          url: 'www.torrederesfriamentobrasil.com.br'
        },
        {
          id: 5,
          name: 'SRE',
          url: 'www.sre.ind.br'
        },
      ]
    },
    {
      id: 3,
      name: 'Danton Campos',
      clients: [
        {
          id: 1,
          name: 'Casa De Baterias Oliveira (Regionalizado)',
          url: 'www.casadebateriasoliveira.com.br'
        },
        {
          id: 2,
          name: 'Embpauli (Regionalizado)',
          url: 'www.embpauli.com.br'
        },
        {
          id: 3,
          name: 'CTA Direções',
          url: 'www.ctadirecoes.com.br'
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
      headerTitle: 'Expert',
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
            name: 'Expert',
            isLink: false,
            link: '/experts'
          }
        ]
      }
    }
  }

}
