import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leads-returns',
  templateUrl: './leads-returns.component.html',
  styleUrls: ['./leads-returns.component.scss']
})
export class LeadsReturnsComponent implements OnInit {
  public contentHeader: object

  constructor(private modalService: NgbModal) {}

  modalOpenSuccess(modalSuccess: any) {
    this.modalService.open(modalSuccess, {
      centered: true,
      windowClass: 'modal modal-success'
    });
  }

  techList: any[] = [
    {
      id: 1,
      name: 'Juliana Oliveira',
    },
    {
      id: 2,
      name: 'Antônio da Silva Ferreira',
    },
    {
      id: 3,
      name: 'Edson Junior',
    },
  ]

  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Retorno de Leads',
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
            name: 'Retorno de Leads',
            isLink: false,
            link: '/leads-returns'
          }
        ]
      }
    }
  }
}
