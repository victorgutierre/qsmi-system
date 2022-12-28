import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-financings',
  templateUrl: './financings.component.html',
  styleUrls: ['./financings.component.scss']
})
export class FinancingsComponent implements OnInit {
  listHead: any[] = ['#', 'Empresa', 'Serviço', 'Projeto', 'Vencimento', 'Contratação', '1º Pag.', 'Cadastro', 'Finalizado', 'Opções']
  
  clients: any[] = [
    {
      id: 1,
      name: 'D2 Muncks (Quality Midia)',
      url: 'https://www.d2muncks.com.br/',
      fullName: 'D2 MULTIMIDIAS TRANSPORTE E LOCAÇÃO DE GUINDASTE EIRELI',
      email: 'comercial@d2muncks.com.br',
      service: '',
      status: 'Finalizado',
      expiresDay: '30',
      hiring: '25/08/2021',
      firstPayment: '25/08/2021',
      register: '02/09/2021',
      conclude: '07/11/2021',
      options: [
        {
          name: 'Em Dia',
          class: 'btn-day'
        },
        {
          name: 'Em Aberto',
          class: 'btn-opening'
        },
      ],
      situation: 'legal',
    },
    {
      id: 2,
      name: 'Rsr Individualizações (Quality Midia)',
      url: 'http://www.rsrindividualizacoes.com.br/cgi-sys/suspendedpage.cgi',
      fullName: 'SALICHEY BOMFIM DOS SANTOS',
      email: 'rsr-individualizacoes.vendas@outlook.com',
      service: '',
      status: 'Finalizado',
      expiresDay: '30',
      hiring: '24/08/2021',
      firstPayment: '26/08/2021',
      register: '02/09/2021',
      conclude: '20/10/2021',
      options: [
        {
          name: 'Em Dia',
          class: 'btn-day'
        },
        {
          name: 'Em Aberto',
          class: 'btn-opening'
        },
      ],
      situation: 'legal',
    },
    {
      id: 3,
      name: 'Lu Boscarato Store',
      url: 'http://micropigmentacao.luboscaratostore.com/',
      fullName: 'LUCIANA CARREIRA BOSCARATO',
      email: 'cybernovalondrina@gmail.com',
      service: '',
      status: 'Finalizado',
      expiresDay: '25',
      hiring: '21/06/2021',
      firstPayment: '21/06/2021',
      register: '22/06/2021',
      conclude: '16/08/2021',
      options: [
        {
          name: 'Em Dia',
          class: 'btn-day'
        },
        {
          name: 'Em Aberto',
          class: 'btn-opening'
        },
      ],
      situation: 'legal',
    },
    {
      id: 4,
      name: 'Spina Sp',
      url: 'http://www.spinasp.com.br/',
      fullName: 'SNA DISTRIBUIDORA DE FERRAMENTAS ANTI FAISCANTES DO BRASIL EIRELI',
      email: 'durvalino@spinasp.com.br',
      service: '',
      status: 'Finalizado',
      expiresDay: '30',
      hiring: '27/01/2021',
      firstPayment: '04/02/2021',
      register: '05/02/2021',
      conclude: '21/05/2021',
      options: [
        {
          name: 'Em Dia',
          class: 'btn-day'
        },
        {
          name: 'Em Aberto',
          class: 'btn-opening'
        },
      ],
      situation: 'legal',
    },
    {
      id: 5,
      name: 'Cortina & Cia (Reginonalizado)',
      url: 'https://www.cortinacia.com.br/',
      fullName: 'RAFAELA FERNANDES DE SOUZA',
      email: 'cortinaciatatuape@gmail.com',
      service: '',
      status: 'Finalizado',
      expiresDay: '30',
      hiring: '15/12/2020',
      firstPayment: '15/12/2020',
      register: '17/12/2020',
      conclude: '28/01/2021',
      options: [
        {
          name: 'Em Dia',
          class: 'btn-day'
        },
        {
          name: 'Em Aberto',
          class: 'btn-opening'
        },
      ],
      situation: 'legal',
    },
    {
      id: 6,
      name: 'Natural Fitness',
      url: 'https://informacoes.naturalfitness.com.br/',
      fullName: 'AF DA SILVA ARTIGOS ESPORTIVOS ME',
      email: 'finananceiro@naturalfitness.com.br',
      service: '',
      status: 'Finalizado',
      expiresDay: '25',
      hiring: '18/09/2020',
      firstPayment: '18/09/2020',
      register: '21/09/2020',
      conclude: '18/12/2020',
      options: [
        {
          name: 'Em Dia',
          class: 'btn-day'
        },
        {
          name: 'Em Aberto',
          class: 'btn-opening'
        },
      ],
      situation: 'legal',
    },
    {
      id: 7,
      name: 'Rc Pisos Revestimentos',
      url: 'http://www.rcpisosrevestimentos.com.br/',
      fullName: 'R C PISOS INDUSTRIAIS LTDA',
      email: 'vendas@rcpisosrevestimentos.com.br',
      service: 'Site Completo',
      status: 'Finalizado',
      expiresDay: '30',
      hiring: '14/09/2018',
      firstPayment: '17/09/2018',
      register: '17/09/2018',
      conclude: '01/11/2018',
      options: [
        {
          name: 'Em Dia',
          class: 'btn-day'
        },
        {
          name: 'Em Aberto',
          class: 'btn-opening'
        },
      ],
      situation: 'legal',
    },
    {
      id: 8,
      name: 'GT EVENTOS (Regionalizado)',
      url: 'https://www.locacaofestaseventos.com.br/',
      fullName: 'GABRIEL LOPES LIMA DA SILVA',
      email: 'gteventos00@gmail.com',
      service: '',
      status: 'Finalizado',
      expiresDay: '30',
      hiring: '19/11/2021',
      firstPayment: '19/11/2021',
      register: '25/11/2021',
      conclude: '24/01/2022',
      options: [
        {
          name: 'Em Dia',
          class: 'btn-day'
        },
        {
          name: 'Jurídico',
          class: 'btn-legal'
        },
      ],
      situation: 'open',
    },
    {
      id: 28,
      name: 'Maquinas Na Web (Nacional E Regionalizado Na Palavras)',
      url: 'http://www.maquinasnaweb.com/',
      fullName: 'MAQUINAS WEB COMERCIO DE MAQUINAS E SERVIÇOS LTDA',
      email: 'comercial@maquinasnaweb.com',
      service: '',
      status: 'Em andamento',
      expiresDay: '15',
      hiring: '08/12/2022',
      firstPayment: '19/12/2022',
      register: '20/12/2022',
      conclude: '',
      options: [
        {
          name: 'Em aberto',
          class: 'btn-opening'
        },
        {
          name: 'Jurídico',
          class: 'btn-legal'
        },
      ],
      situation: 'success',
    },
  ]

  constructor() {}

  public contentHeader: object

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Financeiro',
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
            name: 'Financeiro',
            isLink: false,
            link: '/financings'
          }
        ]
      }
    }
  }
}
