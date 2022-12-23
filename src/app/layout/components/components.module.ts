import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [CoreCommonModule, NgbModule, RouterModule],
  exports: [TableComponent]
})
export class ComponentsModule {}
