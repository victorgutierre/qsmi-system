import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CONFIG } from 'app/core/config';

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients.edit.component.html',
})
export class ClientsEditComponent implements OnInit {
  id: string;
  clientData: any = '';
  form: any;

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {}

  public isLoaded: boolean = false;
  public contentHeader: object
  private api = CONFIG.api;
  private apiUrl: string = this.api.url;
  public telephoneList = [{ telefone: '11984936473', nome: 'teste'}];

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------


  async getClientById() {
    const data = await this.http.get(`${this.apiUrl}${this.api.paths.customers}/${this.id}`).toPromise();
    this.clientData = data;
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
            isLink: true,
            link: '/clients'
          },
          {
            name: 'Editar',
            isLink: false,
            link: '/clients/edit/'
          }
        ]
      }
    }

    this.id = this.router.url.replace('/clients/edit/', '');
    this.getClientById();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      nome: '',
      qsmi_email_login: '',
      cargo_id: '',
      telefone_fixo: '',
      data_nascimento: '',
      telefone_celular: '',
      cep: '',
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      empresa: '',
      razao_social: '',
      cnpj: '',
      dominio: '',
      responsavel: '',
      segmento: '',
      telefone: '',
      nome_telefone: '',
      email_cliente: '',
      nome_email_cliente: '',
      valor_mensalidade: '',
      data_pgto: '',
      data_venc_boleto: '',
      qtd_parcelas: '',
      tipo_cobranca: '',
      vendedor: '',
      data_contratacao: '',
      qtd_palavras: '',
      hospedagem: '',
      tipo_hospedagem: ''
    });
  }

  addTelephone() {
    this.telephoneList.push({
      telefone: '',
      nome: '',
    });
  }
}
