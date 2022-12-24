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
