const dadosPortfolio = {
  perfil: {
    nome: "Glebson Sousa",
    cargo: "Desenvolvedor back-end",
    email: "glebsonsalmeida@gmail.com",
    github: "https://github.com/GlebsonSousa",
    linkedin: "",
    curriculo: ""
  },

  habilidades: [
    { grupo: "Back-end", itens: ["Node.js", "Express", "APIs REST", "Python", "PHP"] },
    { grupo: "Dados e automação", itens: ["MongoDB", "Supabase", "SQL", "Power Automate", "OpenAI API"] },
    { grupo: "Ferramentas", itens: ["Git e GitHub", "Docker", "Kubernetes", "GitHub Actions", "HTML, CSS e JS"] }
  ],

  trajetoria: [
    {
      periodo: "2025 — 2027",
      titulo: "Desenvolvimento de Software Multiplataforma",
      local: "Fatec Mauá · Tecnólogo",
      pontos: [
        "Back-end, banco de dados, desenvolvimento web e mobile.",
        "Projetos práticos com APIs, Docker e integração contínua."
      ]
    },
    {
      periodo: "Mai 2025 — Mai 2026",
      titulo: "Analista Financeiro Júnior",
      local: "CVC Corp",
      pontos: [
        "Automação de rotinas da área com Python e Power Automate.",
        "Contato diário com regras de negócio e processos financeiros."
      ]
    }
  ],

  projetos: [
    {
      id: "quanta",
      nome: "Quanta",
      tipo: "SaaS · em produção",
      imagem: "img/quanta-dashboard.webp",
      descricao: "Agendamento para profissionais autônomos com Pix antecipado, para acabar com o cliente que marca e não aparece.",
      pontos: [
        "Painel do prestador com agenda, clientes, financeiro e lembretes.",
        "Link público de agendamento e cálculo do sinal via Pix.",
        "JavaScript puro, organizado em módulos por seção."
      ],
      stack: ["JavaScript", "HTML", "CSS", "Asaas"],
      links: [
        { texto: "Ver site", url: "https://quanta-agenda.netlify.app" },
        { texto: "GitHub", url: "https://github.com/GlebsonSousa/pagina-prestador-quanta" }
      ],
      papel: "Produto próprio · desenvolvimento solo",
      status: "Landing page no ar · painel em MVP",
      problema: "Profissional autônomo de beleza perde dinheiro com o cliente que agenda e não aparece. A maioria ainda organiza a agenda no caderno e no WhatsApp, sem nenhuma garantia de que o horário reservado vai virar atendimento.",
      solucao: "Uma agenda com link público: o cliente escolhe o serviço e o horário e paga um sinal via Pix antes do atendimento. O sinal transforma o agendamento em compromisso, e o profissional acompanha tudo em um painel simples, pensado para quem usa caderno hoje.",
      passos: [
        "O profissional cadastra serviços, horários e como quer cobrar: no local, com sinal ou valor integral.",
        "Ele compartilha o link de agendamento na bio do Instagram ou no WhatsApp.",
        "O cliente escolhe serviço e horário e paga o sinal via Pix.",
        "O painel mostra agenda, clientes e o faturamento bruto e líquido, já com a taxa da transação descontada."
      ],
      decisoes: [
        "JavaScript puro, sem framework e sem etapa de build: é abrir o index.html e rodar.",
        "Cada aba do painel é um módulo com montar(), que devolve o HTML, e ativar(), que liga os eventos.",
        "Um único objeto de dados como fonte da verdade. Cada bloco já tem o formato de um endpoint REST, pronto para ligar no servidor.",
        "Mobile first: a tabela de clientes vira cards, o menu lateral vira gaveta e a grade da semana rola na horizontal."
      ],
      galeria: [
        { imagem: "img/quanta-agenda.webp", legenda: "Agenda com visão de dia, semana e mês." },
        { imagem: "img/quanta-pagamento.webp", legenda: "Configuração do Pix antecipado com simulação da taxa." },
        { imagem: "img/quanta-link.webp", legenda: "Link público de agendamento e prévia do que o cliente vê." },
        { imagem: "img/quanta-lp.webp", legenda: "Landing page de apresentação do produto." }
      ]
    },
    {
      id: "lumina",
      nome: "Lumina.ai",
      tipo: "Processamento de imagem",
      imagem: "img/lumina-card.webp",
      capa: "img/lumina-comparacao.webp",
      descricao: "Foto contra a luz fica com o rosto escuro ou o céu estourado. O Lumina faz uma fusão HDR a partir de uma única imagem.",
      pontos: [
        "Algoritmo com filtro guiado que roda direto no navegador.",
        "Nenhuma imagem sai do dispositivo do usuário.",
        "Versão em Python e PyTorch usada para testar o algoritmo."
      ],
      stack: ["JavaScript", "Canvas", "Python", "PyTorch"],
      links: [
        { texto: "GitHub", url: "https://github.com/GlebsonSousa/Lumina.ai" }
      ],
      papel: "Projeto pessoal · desenvolvimento solo",
      status: "Funcional no navegador",
      problema: "Em uma foto contra a luz, a câmera precisa escolher: ou expõe para o rosto e o céu estoura, ou expõe para o céu e o rosto fica escuro. Corrigir isso normalmente exige várias fotos com exposições diferentes ou um editor profissional.",
      solucao: "O Lumina cria, a partir da mesma foto, uma versão mais clara e funde as duas: mantém o céu da imagem original e usa a versão clara só nas áreas de sombra. Todo o processamento acontece no navegador.",
      passos: [
        "Converte cada pixel para valores de 0 a 1 e calcula a luminância da imagem.",
        "Gera uma versão mais clara com correção gamma e reforça a saturação nas sombras.",
        "Monta uma máscara com função sigmoid que separa as áreas claras das escuras.",
        "Suaviza a máscara com guided filter, para que a transição respeite as bordas da foto.",
        "Funde a original e a versão clara pixel a pixel e exporta o resultado em PNG."
      ],
      decisoes: [
        "Prototipei o algoritmo em Python com PyTorch e depois traduzi linha a linha para JavaScript.",
        "Processamento local com Canvas e Float32Array: a foto nunca sai do dispositivo.",
        "Dois parâmetros ajustáveis pelo usuário, intensidade da luz e proteção do céu, em vez de dezenas de controles.",
        "Resultado gerado direto do canvas como arquivo, para o download sair idêntico ao que aparece na tela."
      ],
      galeria: [
        { imagem: "img/lumina-site.webp", legenda: "Interface: enviar a imagem, ajustar e comparar." }
      ]
    },
    {
      id: "finanzai",
      nome: "FinanzAI",
      tipo: "API com inteligência artificial",
      imagem: "img/finanzai-conversa.webp",
      descricao: "Ninguém mantém planilha de gastos. Aqui a pessoa manda uma mensagem no WhatsApp e a API cuida do resto.",
      pontos: [
        "A IA interpreta o texto e devolve comandos estruturados.",
        "A API executa cada comando e grava no MongoDB.",
        "Gastos, receitas, correções e relatórios por período."
      ],
      stack: ["Node.js", "Express", "MongoDB", "OpenAI"],
      links: [
        { texto: "GitHub", url: "https://github.com/GlebsonSousa/BackendFinazAI" }
      ],
      papel: "Projeto pessoal · back-end",
      status: "API funcional",
      problema: "Controle de gastos falha porque dá trabalho: abrir a planilha, escolher a categoria, lembrar de anotar e somar tudo no fim do mês. A maioria desiste na segunda semana.",
      solucao: "Um assistente no WhatsApp. A pessoa escreve do jeito que fala, como \"gastei 20 no uber\", e a API registra, categoriza e responde. Relatórios do dia, da semana, do mês e do ano saem com uma mensagem.",
      passos: [
        "A mensagem chega do WhatsApp por um gateway e entra na rota POST /recebe-mensagem.",
        "A API junta a mensagem com o histórico recente do usuário e envia para a OpenAI.",
        "A IA devolve um JSON com a resposta e uma lista de comandos, como adicionar_gasto, corrigir_gasto ou pedido_relatorio_mensal.",
        "Se a IA precisa de dados do banco para continuar, como na correção de um gasto, a API busca, devolve para a IA e repete o ciclo.",
        "Com tudo confirmado, a API executa os comandos no MongoDB e envia a resposta final para o WhatsApp."
      ],
      decisoes: [
        "A IA só interpreta. Quem grava no banco é a API, a partir de uma lista fechada de comandos.",
        "Correções e remoções exigem o ID do registro e a confirmação do usuário antes de executar.",
        "A resposta da IA precisa ser um JSON válido. Se vier fora do formato, a API trata o erro em vez de quebrar.",
        "Relatórios sempre consultam o banco, nunca o histórico da conversa."
      ],
      galeria: [
        { imagem: "img/finanzai-arquitetura.webp", legenda: "Arquitetura: gateway do WhatsApp, API em Express, OpenAI, MongoDB e cache de contexto." }
      ]
    }
  ]
};
