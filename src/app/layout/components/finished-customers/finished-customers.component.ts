import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-finished-customers',
  templateUrl: `./finished-customers.component.html`,
  styleUrls: ['./finished-customers.component.scss']
})
export class FinishedCustomersComponent implements OnInit {
  @Input() listHead: any[];
  @Input() listData: any[];

  verifyNull = (data: any, message: string) => {
    if (data == null) {
      return message
    } else {
      return data
    }
  }

  modalOpenSuccess(modalSuccess: any) {
    this.modalService.open(modalSuccess, {
      centered: true,
      windowClass: 'modal modal-success'
    });
  }

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

}
