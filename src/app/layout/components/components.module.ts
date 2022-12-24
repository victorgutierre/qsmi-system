import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    TableComponent,
    ListComponent
  ],
  imports: [CoreCommonModule, NgbModule, RouterModule],
  exports: [TableComponent, ListComponent],
})
export class ComponentsModule {}
