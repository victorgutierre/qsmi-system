import { OnInit, Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  @Input('data') set data(value: any) {
    if(!value) return;
    this.tableData = value;
  }

  public tableData;
  constructor(private modalService: NgbModal) {}

  // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {}

  modalOpen(modal) {
    this.modalService.open(modal, {
      centered: true
    });
  }
}
