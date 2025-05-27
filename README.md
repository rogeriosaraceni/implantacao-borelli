
# Implantação Borelli

Este é o repositório do projeto **Implantação Borelli **, uma aplicação desenvolvida para gerenciar operações de forma eficiente, utilizando tecnologias modernas e responsivas.

## 🚀 Tecnologias

As principais tecnologias e ferramentas utilizadas neste projeto são:

### Base:
- **JavaScript**: Lógica de programação e interatividade do projeto.
- **HTML5**: Estrutura semântica e base da aplicação.
- **CSS3**: Estilização adicional para personalização do design.

### Frameworks:
- **[Astro](https://astro.build/)**: Framework moderno para construção de sites estáticos e aplicações.
- **[Bootstrap v5.3.3](https://getbootstrap.com/)**: Framework front-end para desenvolvimento ágil e responsivo.

### Libs:
- **[jQuery v3.7.1](https://jquery.com/)**: Biblioteca JavaScript para manipulação do DOM e interações.

### Fontes:
- **[Roboto](https://fonts.google.com/specimen/Roboto)**: Fonte principal utilizada para estilização do texto.


### Icones:
- **[Bootstrap Icons v1.11.3](https://icons.getbootstrap.com/)**: Conjunto de ícones desenvolvido para Bootstrap.
- **[Font Awesome v6.7.1](https://fontawesome.com/)**: Biblioteca de ícones para estilização de interfaces.

### Vendors/Plugins:
- **[Animista](https://animista.net/)**: Biblioteca de animações CSS prontas para uso.
- **[AmCharts 4](https://www.amcharts.com/)**: Biblioteca para criação de gráficos interativos e personalizáveis.
- **[Bootstrap Select v1.14.0-beta3](https://developer.snapappointments.com/bootstrap-select/)**: Plugin jQuery para estilização e funcionalidade avançada em elementos `<select>`.
- **[IMask v7.1.2](https://imask.js.org/)**: Biblioteca para aplicação de máscaras em campos de entrada de texto.
- **[jQuery Mask Plugin v1.14.16](https://igorescobar.github.io/jQuery-Mask-Plugin/)**: Plugin jQuery para aplicação de máscaras em campos de entrada.
- **[DataTables v1.13.4](https://datatables.net/)**: Plugin jQuery para criação de tabelas dinâmicas e interativas.
- **[DOMPurify v3.2.2](https://cure53.de/purify)**: Biblioteca para sanitização de HTML e prevenção contra ataques XSS.
- **[FloatThead v2.2.5](https://mkoryak.github.io/floatThead/)**: Plugin jQuery para manter cabeçalhos de tabelas fixos durante o scroll.

### Servidor:
- **[Vercel](https://vercel.com/)**: Hospedagem para sites e aplicações de alta performance.

## 🛠 Funcionalidades
- **Autenticação de Usuários**: Gerenciamento seguro de login e autenticação via Firebase.
- **Interface Responsiva**: Layout otimizado para dispositivos móveis, tablets e desktops.
- **Carregamento Rápido**: Implementação de técnicas modernas para garantir performance.
- **Gestão de Operações**: Organização e gerenciamento eficiente das informações.
- **Tabelas Dinâmicas**: Utilização do DataTables para interatividade e do floatThead para cabeçalhos fixos.

## 📂 Estrutura do Projeto

```bash
├── src/
│   ├── components/ # Componentes reutilizáveis da aplicação
│   ├── layouts/    # Layouts principais
│   ├── pages/      # Páginas da aplicação
│   └── styles/     # Arquivos de estilo e configuração do Tailwind CSS
├── public/         # Recursos estáticos como imagens e ícones
├── .env            # Variáveis de ambiente
├── astro.config.js # Configurações do Astro
└── package.json    # Dependências e scripts do projeto
```

## 🌐 Acesso

O projeto está hospedado no Vercel e pode ser acessado pelo link:

🔗 **[Implantação Borelli ]()**

## 🧑‍💻 Configuração do Ambiente Local

Para rodar o projeto localmente:

1. Clone este repositório:
   ```bash
   git clone https://github.com/rogeriosaraceni/implantacao-borelli.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   API_KEY=SEU_API_KEY
   AUTH_DOMAIN=SEU_AUTH_DOMAIN
   PROJECT_ID=SEU_PROJECT_ID
   STORAGE_BUCKET=SEU_STORAGE_BUCKET
   MESSAGING_SENDER_ID=SEU_MESSAGING_SENDER_ID
   APP_ID=SEU_APP_ID
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O projeto estará acessível em `http://localhost:3000`.

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
