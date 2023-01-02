import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { FinishedCustomersComponent } from './finished-customers/finished-customers.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ClientDataComponent } from './client-data/client-data.component';

@NgModule({
  declarations: [
    TableComponent,
    ListComponent,
    FinishedCustomersComponent,
    BlogListComponent,
    ClientDataComponent
  ],
  imports: [CoreCommonModule, NgbModule, RouterModule],
  exports: [TableComponent, ListComponent, FinishedCustomersComponent, BlogListComponent],
})
export class ComponentsModule {}
