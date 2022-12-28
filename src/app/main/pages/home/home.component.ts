import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  dayTime: any = () => {
    const date = new Date();
    const hours: number = date.getHours();
    let message: string = '';
    const user: string = 'John Doe';

    if(hours > 0 && hours < 11) {
      message = 'Bom dia,';
    } else if (hours > 11 && hours < 18) {
      message = 'Boa tarde,';
    } else if (hours > 18 && hours <= 23) {
      message = 'Boa noite,'
    }

    return message + ' ' + user;
  }

  listHead: any[] = [
    {name: 'Empresa', icon: ''},
    {name: '1º pagamento', icon: ''},
    {name: 'Redator', icon: ''},
    {name: 'Técnico', icon: ''},
    {name: 'Briefing', icon: ''},
  ];

  listHeadFinished: any[] = [
    {name: '#', icon: ''},
    {name: 'Empresa', icon: ''},
    {name: 'Serviço', icon: ''},
    {name: 'Cliente Desde', icon: ''},
    {name: 'Finalizado em', icon: ''},
    {name: 'Conteúdo', icon: ''},
    {name: 'Posic.', icon: ''},
    {name: 'Último Feedback', icon: ''},
    {name: 'Opções', icon: ''},
  ];

  listData: any[] = [
    {
      name: 'Fast Imports Miami (Nacional E Regionalizado)',
      url: 'https://fastimportsmiami.com.br/',
      firstPayment: '25/10/2022 (43 dias)',
      leaderWriter: null,
      developer: 'Eduardo Zamai',
      briefing: {
        company: {
          newLayout: "Sim",
          targetAudience: "Adultos",
          products: null
        },
        marketing: {
          ads: "Sim",
          sponsoredLinkValue: "R$600",
          keywords: "Peças importadas",
          anotherMarketing: null,
        },
        project: {
          mostValuableKeyword: null,
          contract: 'Sim',
          gradualResult: 'Sim'
        },
        access: {
          host: {
            url: null,
            login: null,
            pass: null
          }
        },
        final: {
          found: null,
          why: null
        }
      }
    },
    {
      name: 'Rwr',
      url: 'https://www.rwr.com.br/',
      firstPayment: '18/10/2022 (48 dias)',
      leaderWriter: 'Samira Chalom',
      developer: 'Davi Lucca',
      briefing: {
        company: {
          newLayout: "Sim",
          targetAudience: "Adultos",
          products: null
        },
        marketing: {
          ads: "Sim",
          sponsoredLinkValue: "R$600",
          keywords: "Peças importadas",
          anotherMarketing: null,
        },
        project: {
          mostValuableKeyword: null,
          contract: 'Sim',
          gradualResult: 'Sim'
        },
        access: {
          host: {
            url: null,
            login: null,
            pass: null
          }
        },
        final: {
          found: null,
          why: null
        }
      }
    },
    {
      name: 'Wsredes',
      url: 'http://www.wsredes.com.br/',
      firstPayment: '21/10/2022 (44 dias)',
      leaderWriter: 'Melissa Carvalho',
      developer: 'Gustavo de Souza Amorim',
      briefing: {
        company: {
          newLayout: "Sim",
          targetAudience: null,
          products: null
        },
        marketing: {
          ads: null,
          sponsoredLinkValue: null,
          keywords: null,
          anotherMarketing: null,
        },
        project: {
          mostValuableKeyword: null,
          contract: null,
          gradualResult: null
        },
        access: {
          host: {
            url: null,
            login: null,
            pass: null
          }
        },
        final: {
          found: null,
          why: null
        }
      }
    },
    {
      name: 'Saicon',
      url: 'https://saicon.com.br/',
      firstPayment: '03/11/2022 (35 dias)',
      leaderWriter: 'Juliana Oliveira',
      developer: 'Eduardo Zamai',
      briefing: {
        company: {
          newLayout: "Sim",
          targetAudience: null,
          products: null
        },
        marketing: {
          ads: null,
          sponsoredLinkValue: null,
          keywords: null,
          anotherMarketing: null,
        },
        project: {
          mostValuableKeyword: null,
          contract: null,
          gradualResult: null
        },
        access: {
          host: {
            url: null,
            login: null,
            pass: null
          }
        },
        final: {
          found: null,
          why: null
        }
      }
    },
    {
      name: 'Cienza',
      url: 'http://www.cienza.com.br/',
      firstPayment: '26/10/2022 (41 dias)',
      leaderWriter: 'Melissa Carvalho',
      developer: 'Paulo Rodrigues',
      briefing: {
        company: {
          newLayout: "Sim",
          targetAudience: null,
          products: null
        },
        marketing: {
          ads: null,
          sponsoredLinkValue: null,
          keywords: null,
          anotherMarketing: null,
        },
        project: {
          mostValuableKeyword: null,
          contract: null,
          gradualResult: null
        },
        access: {
          host: {
            url: null,
            login: null,
            pass: null
          }
        },
        final: {
          found: null,
          why: null
        }
      }
    },
  ]

  finishedListData: any[] = [
    {
      id: 1,
      name: 'Mef Inspeções',
      url: 'https://www.mefinspecoes.com.br/',
      service: '',
      clientSince: '18/10/2022 (69 dias)',
      finishedAt: '01/12/2022 (25 dias)',
      contentUrl: 'javascript:void(0);',
      position: '60 / 30',
      lastFeedback: null,
    },
    {
      id: 2,
      name: 'Telbra',
      url: 'https://www.telbra.com.br/',
      service: '',
      clientSince: '26/09/2022 (3 meses)',
      finishedAt: '01/12/2022 (25 dias)',
      contentUrl: 'javascript:void(0);',
      position: '70 / 35',
      lastFeedback: null,
    },
    {
      id: 3,
      name: 'Sustentex',
      url: 'https://www.sustentex.com.br/',
      service: '',
      clientSince: '19/09/2022 (3 meses)',
      finishedAt: '02/12/2022 (24 dias)',
      contentUrl: 'javascript:void(0);',
      position: '60 / 30',
      lastFeedback: null,
    },
    {
      id: 4,
      name: 'Acqua Gelata (Nacional E Regionalizado Na Palavra)',
      url: 'https://acquagelata.com.br/',
      service: '',
      clientSince: '06/09/2022 (3 meses)',
      finishedAt: '17/11/2022 (39 dias)',
      contentUrl: 'javascript:void(0);',
      position: '60 / 30',
      lastFeedback: null,
    },
    {
      id: 5,
      name: 'Casa De Baterias Oliveira (Regionalizado)',
      url: 'https://www.casadebateriasoliveira.com.br/',
      service: 'Site Completo',
      clientSince: '31/08/2022 (3 meses)',
      finishedAt: '19/10/2022 (68 dias)',
      contentUrl: 'javascript:void(0);',
      position: '50 / 28',
      lastFeedback: 'Indiferente',
    },
    {
      id: 6,
      name: 'Arestha Abrasivos',
      url: 'https://www.aresthaabrasivos.com.br/',
      service: '',
      clientSince: '31/08/2022 (3 meses)',
      finishedAt: '23/12/2022 (3 dias)',
      contentUrl: 'javascript:void(0);',
      position: '70 / 0',
      lastFeedback: null,
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
      headerTitle: 'Home',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          }
        ]
      }
    }
  }
}
