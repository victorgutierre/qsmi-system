import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'
import { Form, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CONFIG } from 'app/core/config';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users.edit.component.html',
})
export class UsersEditComponent implements OnInit {
  id: string;
  userData: any = {};
  form: any;

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {}

  public isLoaded: boolean = false;
  public contentHeader: object;
  private api = CONFIG.api;
  private apiUrl: string = this.api.url;

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------


  async getUsersById() {
    const data = await this.http.get(`${this.apiUrl}${this.api.paths.users}/${this.id}`).toPromise();
    this.userData = data;
    this.isLoaded = true;

    this.initForm();
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
            isLink: true,
            link: '/users'
          },
          {
            name: 'Editar',
            isLink: false,
            link: '/users/edit/'
          }
        ]
      }
    }
    this.id = this.router.url.replace('/users/edit/', '');
    this.getUsersById();
  }

  initForm() {
    const data = this.userData;
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
    });

    this.form.controls['nome'].patchValue(data.nome);
    this.form.controls['qsmi_email_login'].patchValue(data.qsmi_email_login);
    this.form.controls['cargo_id'].patchValue(data.cargo_id);
    this.form.controls['telefone_fixo'].patchValue(data.telefone_fixo);
    this.form.controls['data_nascimento'].patchValue(data.data_nascimento);
    this.form.controls['telefone_celular'].patchValue(data.telefone_celular);
    this.form.controls['cep'].patchValue(data.cep);
    this.form.controls['logradouro'].patchValue(data.logradouro);
    this.form.controls['numero'].patchValue(data.numero);
    this.form.controls['bairro'].patchValue(data.bairro);
    this.form.controls['cidade'].patchValue(data.cidade);
    this.form.controls['estado'].patchValue(data.estado);
  }

  onSubmit() {
    const data = this.form.value;
    const req = this.http.put(`${this.apiUrl}${this.api.paths.users}/${this.id}`, data).toPromise();
    console.log(req);
  }
  
}
