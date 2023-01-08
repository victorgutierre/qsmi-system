import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})

export class KeywordsComponent implements OnInit {

  public isCollapsed5 = true;

  brieafingHeader: any[] = ['#', 'Empresa', 'Domínio', 'Status', 'Venda', 'Contrato', 'Cruzadas', 'Cliente Desde', 'Opções']
  content: any[] = [
    {
      id: 2,
      name: 'Roda Mais Pneus (Regionalizado)',
      url: 'www.rodamais.com.br',
      status: 'Em andamento',
      sell: 50,
      contract: 0,
      crossed: 0,
      clientSince: '03/01/2023 (1 dias)',
    },
    {
      id: 3,
      name: 'Maquinas Na Web (Nacional E Regionalizado Na Palavras)',
      url: 'www.maquinasnaweb.com',
      status: 'Em andamento',
      sell: 30,
      contract: 0,
      crossed: 0,
      clientSince: '08/12/2022 (27 dias)',
    },
    {
      id: 4,
      name: 'Luxfer (Renovação)',
      url: 'www.luxfer.com.br',
      status: 'Em andamento',
      sell: 90,
      contract: 85,
      crossed: 0,
      clientSince: '07/12/2022 (28 dias)',
    },
    {
      id: 5,
      name: 'Therba',
      url: 'www.therba.com.br',
      status: 'Em andamento',
      sell: 70,
      contract: 70,
      crossed: 0,
      clientSince: '25/11/2022 (41 dias)',
    },
    {
      id: 16,
      name: 'Mef Inspeções',
      url: 'www.mefinspecoes.com.br',
      status: 'Finalizado',
      sell: 60,
      contract: 60,
      crossed: 0,
      clientSince: '18/10/2022 (79 dias)',
    },
    {
      id: 232,
      name: 'Tectronix',
      url: 'tectronix.com.br',
      status: 'Cancelado',
      sell: 60,
      contract: 0,
      crossed: 0,
      clientSince: '19/07/2022 (5 meses)',
    },
  ]

  transformStatus(data: string) {
    if(data == 'Em andamento') {
      return 'warning'
    } else if(data == 'Finalizado') {
      return 'success'
    } else if (data == 'Cancelado') {
      return 'danger'
    }
  }

  public contentHeader: object

  constructor() { }

  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Keywords',
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
            name: 'Keywords',
            isLink: false,
            link: '/keywords'
          }
        ]
      }
    }
  }

}
