import { Component, OnInit, Input, NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


export interface ListHead {
  title: string,
  icon: string
}
export interface ListData {
  name: string,
  url: string,
  firstPayment: string,
  leaderWriter: string,
  developer: string,
  briefing: object,
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() listHead: ListHead;
  @Input() listData: ListData;

  verifyNull = (data: any) => {
    if (data == null) {
      return '-Vazio-'
    } else {
      return data
    }
  }
  
  constructor(private modalService: NgbModal) {}

  modalOpenSuccess(modalSuccess) {
    this.modalService.open(modalSuccess, {
      centered: true,
      windowClass: 'modal modal-success'
    });
  }
  
  ngOnInit(): void {
  }
}