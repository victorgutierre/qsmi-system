import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { AuthenticationModule } from './authentication/authentication.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FinancingsComponent } from './financings/financings.component';
import { ClientsPanelComponent } from './clients-panel/clients-panel.component';
import { EmailsComponent } from './emails/emails.component';
import { ToolsComponent } from './tools/tools.component';
import { LeadsComponent } from './leads/leads.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ComponentsModule } from 'app/layout/components/components.module';
import { ClientsEditComponent } from './clients/edit/clients.edit.component';
import { UsersEditComponent } from './users/edit/users.edit.component';

// routing
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/edit/:id',
    component: UsersEditComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'clients/edit/:id',
    component: ClientsEditComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'financings',
    component: FinancingsComponent
  },
  {
    path: 'clients-panel',
    component: ClientsPanelComponent
  },
  {
    path: 'emails',
    component: EmailsComponent
  },
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: 'leads',
    component: LeadsComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
];

@NgModule({
  declarations: [
    HomeComponent, 
    UsersComponent,
    UsersEditComponent,
    ClientsComponent,
    ClientsEditComponent,
    BlogsComponent, 
    FinancingsComponent, 
    ClientsPanelComponent, 
    EmailsComponent,
    ToolsComponent,
    LeadsComponent,
    AgendaComponent,
  ],
  imports: [
    CommonModule,
    CoreCommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    ContentHeaderModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    AuthenticationModule,
    MiscellaneousModule
  ],

  providers: []
})
export class PagesModule {}
