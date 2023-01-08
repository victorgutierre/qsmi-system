import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-briefings',
  templateUrl: './briefings.component.html',
  styleUrls: ['./briefings.component.scss']
})
export class BriefingsComponent implements OnInit {

  brieafingHeader: any[] = ['#', 'Empresa', 'Status', 'Criado em', 'Primeiro acesso', 'Primeiro envio', 'Aprovado em', 'Opções']
  content: any[] = [
    {
      id: 1,
      name: 'Tork Par Parafusos',
      status: 'Novo',
      createdAt: '23/08/2021',
      firstAccess: null,
      firstShipment: null,
      approvedIn: null,
      briefing: {
        company: {
          newLayout: "Sim",
          targetAudience: "Adultos",
          products: null
        },
        marketing: {
          ads: "Sim",
          sponsoredLinkValue: "R$600",
          keywords: null,
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
      id: 2,
      name: 'DEPOSITO DO VALE PARAIBA',
      status: 'Novo',
      createdAt: '19/08/2021',
      firstAccess: null,
      firstShipment: null,
      approvedIn: null,
      briefing: {
        company: {
          newLayout: "Sim",
          targetAudience: "Adultos",
          products: null
        },
        marketing: {
          ads: "Sim",
          sponsoredLinkValue: "R$600",
          keywords: null,
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
      id: 3,
      name: 'Gigabyte Info',
      status: 'Novo',
      createdAt: '14/05/2021',
      firstAccess: null,
      firstShipment: null,
      approvedIn: null,
      briefing: {
        company: {
          newLayout: "Sim",
          targetAudience: "Adultos",
          products: null
        },
        marketing: {
          ads: "Sim",
          sponsoredLinkValue: "R$600",
          keywords: null,
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
  
  public contentHeader: object
  
  constructor(private modalService: NgbModal) {}

  modalOpenSuccess(modalSuccess) {
    this.modalService.open(modalSuccess, {
      centered: true,
      windowClass: 'modal modal-success'
    });
  }

  verifyNull = (data: any) => {
    if (data == null) {
      return '-Vazio-'
    } else {
      return data
    }
  }

  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Briefings',
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
            name: 'Briefings',
            isLink: false,
            link: '/briefings'
          }
        ]
      }
    }
  }

}
