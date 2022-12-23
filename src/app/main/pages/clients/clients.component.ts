import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'
import { ModalComponent } from 'app/layout/components/modal/modal.component';
import { CONFIG } from 'app/core/config';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  constructor(private http : HttpClient) {}

  public contentHeader: object
  public tableData: any;
  public isLoaded: boolean = false;

  private api = CONFIG.api;
  private apiUrl: string = this.api.url;

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  
  async getClients() {
    const data = await this.http.get(`${this.apiUrl}${this.api.paths.customers}`).toPromise();
    this.updateTableWithData(data);

    this.isLoaded = true;
  }

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Clientes',
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
            name: 'Clientes',
            isLink: false,
            link: '/clients'
          }
        ]
      }
    }
    // mount table structure
    this.tableData = this.mountTable();

    // requests
    this.getClients(); 
  }

  updateTableWithData(data) {
    this.tableData.data = data.map(item => {
      return {
        client: item.empresa,
        id: item.id,
        developer: item.tecnico_id || 'tecnico',
        writer: item.redator_id || 'redator',
        service: item.tipo_servico_id,
        charge: item.tipo_cobranca_id,
        project: item.status_id,
        search: item.status_busca_id,
        actions: this.setActionsLinks(item.id),
      }
    });
  }

  setActionsLinks(id: string) {
    return [
      {
        name: 'Editar',
        icon: 'edit',
        url: `/clients/edit/${id}`,
      },
      {
        name: 'Excluir',
        icon: 'trash',
        isModal: true,
        modalContent: ModalComponent,
      },
    ]
  }

  mountTable() {
    return {
      columns: [
        { name: 'Id', visible: true, field: 'id' },
        { name: 'Empresa', visible: true, field: 'client' },
        { name: 'Técnico', visible: true, field: 'developer' },
        { name: 'Redator', visible: true, field: 'writer' },
        { name: 'Serviço', visible: true, field: 'service' },
        { name: 'Cobrança', visible: true, field: 'charge' },
        { name: 'Projeto', visible: true, field: 'project' },
        { name: 'Busca', visible: true, field: 'search' },
        { name: 'Ações', visible: true, field: 'actions' },
      ],
      data: []
    }
  }
}
