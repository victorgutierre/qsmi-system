import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'
import { CONFIG } from 'app/core/config';
import { ModalComponent } from 'app/layout/components/modal/modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public contentHeader: object;
  public tableData: any;
  public isLoaded: boolean = false;

  private api = CONFIG.api;
  private apiUrl: string = this.api.url;

  async getUsers() {
    const data = await this.http.get(`${this.apiUrl}${this.api.paths.users}`).toPromise();
    this.updateTableWithData(data);
    this.isLoaded = true;
  }

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Usuários',
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
            name: 'Usuários',
            isLink: false,
            link: '/users'
          }
        ]
      }
    }

    // mount table structure
    this.tableData = this.mountTable();

    this.getUsers();
  }

  mountTable() {
    return {
      columns: [
        { name: 'Nome', visible: true, field: 'name' },
        { name: 'E-mail', visible: true, field: 'email' },
        { name: 'Cargo', visible: true, field: 'role' },
        { name: 'Status', visible: true, field: 'status' },
        { name: 'Último Login', visible: true, field: 'last_login' },
        { name: 'IP do Últ. Login', visible: true, field: 'last_login_ip' },
        { name: 'Bloqueio', visible: true, field: 'block' },
        { name: 'Ações', visible: true, field: 'actions' },
      ],
      data: []
    }
  }

  updateTableWithData(data) {
    this.tableData.data = data.map(item => {
      return {
        name: item.nome,
        email: item.qsmi_email_login,
        role: item.cargo_id,
        status: item.status_id,
        last_login: item.ultimo_login || '-',
        last_login_ip: item.ultimo_login_ip || '-',
        block: item.status_bloqueio_login || 'Inativo',
        actions: this.setActionsLinks(item.id),
      }
    });
  }

  setActionsLinks(id: string) {
    return [
      {
        name: 'Editar',
        icon: 'edit',
        url: `/users/edit/${id}`,
      },
      {
        name: 'Excluir',
        icon: 'trash',
        isModal: true,
        modalContent: ModalComponent,
      },
    ]
  }
}
