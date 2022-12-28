import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  listHead = ['#', 'Blog', 'Domínio', 'Grupo', 'Páginas', 'Opções'];
  listData = [
    {
      id: 1,
      name: 'Blog Do Artigo',
      domain: 'http://www.blogdoartigo.com.br/',
      group: 'Grupo 2',
      pages: '2234',
      status: 1
    },
    {
      id: 2,
      name: 'Comitiva Do Churrasco',
      domain: 'http://www.comitivadochurrasco.com.br/',
      group: 'Grupo 2',
      pages: '2234',
      status: 1
    },
    {
      id: 3,
      name: '1 Blog',
      domain: 'http://www.1blog.com.br/',
      group: 'Grupo 2',
      pages: '2274',
      status: 1
    },
    {
      id: 4,
      name: 'Blog da Chave',
      domain: 'http://www.blogdachave.com.br/',
      group: 'Grupo 1',
      pages: '2148',
      status: 2
    },
    {
      id: 5,
      name: 'Blog da Brava',
      domain: 'http://www.blogdabravablog.com.br/',
      group: 'Grupo 1',
      pages: '2150',
      status: 2
    },
    {
      id: 6,
      name: 'Blog Chat',
      domain: 'http://www.blogchat.com.br/',
      group: 'Grupo 1',
      pages: '2160',
      status: 2
    },
  ]

  public isCollapsed5 = true;

  constructor() {}

  public contentHeader: object

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Blogs',
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
            name: 'Blogs',
            isLink: false,
            link: '/blogs'
          }
        ]
      }
    }
  }
}
