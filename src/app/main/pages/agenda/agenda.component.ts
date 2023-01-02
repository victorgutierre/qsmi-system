import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  nomeDiaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  semana = [
    [
      {
        number: 1,
        commitment: true
      },
      {
        number: 2,
        commitment: true
      },
      {
        number: 3,
        commitment: false
      },
      {
        number: 4,
        commitment: false
      },
      {
        number: 5,
        commitment: false
      },
      {
        number: 6,
        commitment: false
      },
      {
        number: 7,
        commitment: false
      },
    ],
    [
      {
        number: 8,
        commitment: false
      },
      {
        number: 9,
        commitment: false
      },
      {
        number: 10,
        commitment: true
      },
      {
        number: 11,
        commitment: false
      },
      {
        number: 12,
        commitment: false
      },
      {
        number: 13,
        commitment: true
      },
      {
        number: 14,
        commitment: false
      },
    ],
    [
      {
        number: 15,
        commitment: false
      },
      {
        number: 16,
        commitment: true
      },
      {
        number: 17,
        commitment: false
      },
      {
        number: 18,
        commitment: false
      },
      {
        number: 19,
        commitment: false
      },
      {
        number: 20,
        commitment: false
      },
      {
        number: 21,
        commitment: false
      },
    ],
    [
      {
        number: 22,
        commitment: false
      },
      {
        number: 23,
        commitment: false
      },
      {
        number: 24,
        commitment: false
      },
      {
        number: 25,
        commitment: false
      },
      {
        number: 26,
        commitment: false
      },
      {
        number: 27,
        commitment: false
      },
      {
        number: 28,
        commitment: false
      },
    ],
    [
      {
        number: 29,
        commitment: false
      },  
      {
        number: 30,
        commitment: false
      },  
      {
        number: 31,
        commitment: false
      },  
    ]
  ]

  checkCommitment = (data: boolean) => {
    if(data == false) {
      return ''
    } else {
      return 'active'
    }
  }

  constructor() {}

  public contentHeader: object

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Agenda',
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
            name: 'Agenda',
            isLink: false,
            link: '/agenda'
          }
        ]
      }
    }
  }
}
