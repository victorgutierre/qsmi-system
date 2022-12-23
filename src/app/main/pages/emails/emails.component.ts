import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import EmailsContent from './content/email.content';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  public contentHeader: object
  public list;

  modalTitle;
  modalTemplate;

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'E-mails Padrão',
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
            name: 'E-mails Padrão',
            isLink: false,
            link: '/emails'
          }
        ]
      }
    }

    this.list = this.initList();
  }

  initList() {
    return [
      {
        role: 'Lider Técnico',
        list: [
          {
            title: 'Renovação (ENVIAR 3 MESES ANTES)',
            role: 'Líder Técnico',
            component: 'renovacao'
          },
          {
            title: 'Lista de E-mails',
            role: 'Líder Técnico',
            component: 'lista_de_emails'
          },
          {
            title: 'Troca de ID Técnico',
            role: 'Líder Técnico',
            component: 'troca_de_id_tecnico'
          },
          {
            title: 'Palavras Chave',
            role: 'Líder Técnico',
            component: 'palavras_chave'
          },
          {
            title: 'Briefing Inicial',
            role: 'Líder Técnico',
            component: 'briefing_inicial'
          },
        ]
      },
      {
        role: 'Técnico (desenvolvedor)',
        list: [
          {
            title: 'Explicando o Trabalho Regionalizado (Produto B)',
            role: 'Técnico',
            component: 'explicando_trabalho_regionalizado'
          },
          {
            title: 'Feedback Negativo',
            role: 'Técnico',
            component: 'feedback_negativo'
          },
          {
            title: 'Boleto de Domínio do Registro.br',
            role: 'Técnico',
            component: 'boleto_dominio_registrobr'
          },
          {
            title: 'Feedback Sem Resposta (depois da 3º tentativa) ',
            role: 'Técnico',
            component: 'feedback_sem_resposta_3a_tentativa'
          },
          {
            title: 'Feedback Positivo',
            role: 'Técnico',
            component: 'feedback_positivo'
          },
          {
            title: 'Cancelamento e Envio de Arquivos',
            role: 'Técnico',
            component: 'cancelamento_envio_arquivos'
          },
          {
            title: 'Briefing de Novo Layout',
            role: 'Técnico',
            component: 'briefing_novo_layout'
          },
          {
            title: 'Tutorial para Download de Imagens',
            role: 'Técnico',
            component: 'tutorial_download_imagens'
          },
          {
            title: 'Relatório de Posicionamento',
            role: 'Técnico',
            component: 'relatorio_posicionamento'
          },
          {
            title: 'Projeto no Ar',
            role: 'Técnico',
            component: 'projeto_no_ar'
          },
          {
            title: 'Layout para Aprovação',
            role: 'Técnico',
            component: 'layout_aprovacao'
          },
          {
            title: 'Projeto para Aprovação',
            role: 'Técnico',
            component: 'projeto_aprovacao'
          },
          {
            title: 'Cobrança de Imagens 3',
            role: 'Técnico',
            component: 'cobranca_imagens_3'
          },
          {
            title: 'Cobrança de Imagens 2',
            role: 'Técnico',
            component: 'cobranca_imagens_2'
          },
          {
            title: 'Cobrança de Imagens 1',
            role: 'Técnico',
            component: 'cobranca_imagens_1'
          },
          {
            title: 'Apresentação',
            role: 'Técnico',
            component: 'apresentacao'
          },
        ]
      },
      {
        role: 'Redator',
        list: [
          {
            title: 'B2Best - Acesso ao Painel',
            role: 'Redator',
            component: 'b2best_acesso_painel'
          },
          {
            title: 'B2Best - Apresentação para Clientes da Quality SMI',
            role: 'Redator',
            component: 'b2best_apresentao_clientes'
          },
          {
            title: 'Feedback de Conteúdo (Não atende ligação e não responde e-mails)',
            role: 'Redator',
            component: 'feedback_conteudo'
          },
          {
            title: 'Envio de Conteúdo',
            role: 'Redator',
            component: 'envio_conteudo'
          },
          {
            title: 'Apresentação',
            role: 'Redator',
            component: 'apresentacao_redator'
          },
        ]
      },
      {
        role: 'Link Builder',
        list: [
          {
            title: 'Tutorial de Permissão para Facebook',
            role: 'Link Builder',
            component: 'tutorial_permissao_facebook'
          },
          {
            title: 'Relatório Mensal de Social Media',
            role: 'Link Builder',
            component: 'relatorio_mensal_social_media'
          },
          {
            title: 'Redes Sociais - E-mail Inicial',
            role: 'Link Builder',
            component: 'redes_sociais_email_inicial'
          },
        ]
      },
    ]
  }

  modalOpen(modal, title, component) {
    this.modalTitle = title;
    this.modalTemplate = EmailsContent[component];

    this.modalService.open(modal, {
      centered: true,
      size: 'lg'
    });
  }
}
