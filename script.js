// Configurações de paginação
const PAGINATION_CONFIG = {
    toolsPerPage: 15,
    maxPages: 99
};

// Dados das ferramentas - Sistema facilitado para adicionar novas ferramentas
const toolsData = {
    compressor: {
        name: "COMPRESSOR",
        title: "Compressor de Imagem",
        description: "Ferramenta para reduzir o tamanho de imagens PNG, JPG e outros formatos sem perder qualidade.",
        url: "https://tinypng.com/",
        category: "📁 Utilitários",
        keywords: ["imagem", "compressão", "png", "jpg", "jpeg", "foto", "fotografia", "tamanho", "reduzir"]
    },
    plagio: {
        name: "VERIFICADOR",
        title: "Verificador de Plágio",
        description: "Ferramenta para verificar se seu texto tem conteúdo duplicado ou plagiado.",
        url: "https://smallseotools.com/plagiarism-checker/",
        category: "📝 Texto",
        keywords: ["plágio", "verificar", "texto", "duplicado", "conteúdo", "originalidade", "cópia"]
    },
    pdf: {
        name: "EDITOR PDF",
        title: "Editor de PDF Online",
        description: "Ferramenta para editar documentos PDF diretamente no navegador sem instalar programas.",
        url: "https://www.sejda.com/pt/pdf-editor",
        category: "📄 Documentos",
        keywords: ["pdf", "editor", "documento", "editar", "modificar", "alterar", "arquivo"]
    },
    qr: {
        name: "QR CODE",
        title: "Gerador de QR Code",
        description: "Ferramenta para criar códigos QR personalizados para links, textos e informações.",
        url: "https://www.qr-code-generator.com/",
        category: "🔗 Links",
        keywords: ["qr", "código", "gerador", "link", "url", "texto", "informação", "digital"]
    },
    timer: {
        name: "TEMPORIZADOR",
        title: "Temporizador Online",
        description: "Ferramenta para cronômetro e alarme online para gerenciar seu tempo de estudo.",
        url: "https://timer.onlineclock.net/",
        category: "⏰ Produtividade",
        keywords: ["temporizador", "cronômetro", "alarme", "tempo", "estudo", "produtividade", "contador"]
    },
    logo: {
        name: "CRIADOR LOGOS",
        title: "Criador de Logos",
        description: "Ferramenta para design logos profissionais gratuitamente com ferramentas online.",
        url: "https://www.canva.com/logos/",
        category: "🎨 Design",
        keywords: ["logo", "design", "criar", "marca", "identidade", "visual", "gráfico", "profissional"]
    },
    conversor: {
        name: "CONVERSOR",
        title: "Conversor de Arquivos Online",
        description: "Converta arquivos entre diferentes formatos: vídeo, áudio, imagem e documentos.",
        url: "https://convertio.co/",
        category: "🔄 Conversão",
        keywords: ["conversor", "arquivo", "formato", "vídeo", "áudio", "imagem", "converter"]
    },
    editor: {
        name: "EDITOR",
        title: "Editor de Código Online",
        description: "Escreva, edite e execute código em várias linguagens de programação.",
        url: "https://replit.com/",
        category: "🔧 Desenvolvimento",
        keywords: ["código", "programação", "editor", "desenvolvimento", "linguagem", "executar"]
    },
    analisador: {
        name: "ANALISADOR",
        title: "Analisador de SEO",
        description: "Analise e otimize seu site para motores de busca com ferramentas gratuitas.",
        url: "https://www.seoreviewtools.com/",
        category: "📊 Análise",
        keywords: ["seo", "análise", "otimização", "site", "google", "ranking", "busca"]
    },
    criptografia: {
        name: "CRIPTOGRAFIA",
        title: "Ferramentas de Criptografia",
        description: "Criptografe e descriptografe textos, senhas e arquivos com segurança.",
        url: "https://www.devglan.com/online-tools",
        category: "🛡️ Segurança",
        keywords: ["criptografia", "senha", "segurança", "encriptar", "descriptografar", "hash"]
    },
    backup: {
        name: "BACKUP",
        title: "Sistema de Backup Online",
        description: "Faça backup automático de seus arquivos na nuvem de forma segura.",
        url: "https://www.backblaze.com/",
        category: "💾 Armazenamento",
        keywords: ["backup", "nuvem", "armazenamento", "segurança", "arquivo", "salvar"]
    },
    monitor: {
        name: "MONITOR",
        title: "Monitor de Sistema",
        description: "Monitore o desempenho do seu computador e recursos do sistema.",
        url: "https://www.hwinfo.com/",
        category: "📈 Monitoramento",
        keywords: ["monitor", "sistema", "desempenho", "cpu", "memória", "hardware"]
    },
    limpeza: {
        name: "LIMPEZA",
        title: "Limpeza de Sistema",
        description: "Limpe arquivos temporários e otimize o desempenho do seu computador.",
        url: "https://www.ccleaner.com/",
        category: "🧹 Manutenção",
        keywords: ["limpeza", "sistema", "temporário", "otimização", "desempenho", "manutenção"]
    },
    recuperacao: {
        name: "RECUPERAÇÃO",
        title: "Recuperação de Arquivos",
        description: "Recupere arquivos deletados acidentalmente do seu computador.",
        url: "https://www.recuva.com/",
        category: "🔄 Recuperação",
        keywords: ["recuperação", "arquivo", "deletado", "lixeira", "restaurar", "perdido"]
    },
    compressao: {
        name: "COMPRESSÃO",
        title: "Compressor de Arquivos",
        description: "Comprima arquivos e pastas para economizar espaço de armazenamento.",
        url: "https://www.7-zip.org/",
        category: "📦 Compressão",
        keywords: ["compressão", "arquivo", "zip", "rar", "economizar", "espaço"]
    },
    sincronizacao: {
        name: "SINCRONIZAÇÃO",
        title: "Sincronização de Arquivos",
        description: "Sincronize arquivos entre diferentes dispositivos automaticamente.",
        url: "https://www.syncthing.net/",
        category: "🔄 Sincronização",
        keywords: ["sincronização", "arquivo", "dispositivo", "automático", "nuvem", "sync"]
    },
    virtualizacao: {
        name: "VIRTUALIZAÇÃO",
        title: "Software de Virtualização",
        description: "Crie máquinas virtuais para testar sistemas e aplicações.",
        url: "https://www.virtualbox.org/",
        category: "🖥️ Virtualização",
        keywords: ["virtualização", "máquina", "virtual", "sistema", "teste", "vm"]
    },
    firewall: {
        name: "FIREWALL",
        title: "Configurador de Firewall",
        description: "Configure e gerencie regras de firewall para proteger sua rede.",
        url: "https://www.zonealarm.com/",
        category: "🛡️ Segurança",
        keywords: ["firewall", "segurança", "rede", "proteção", "configuração", "regras"]
    },
    diagnostico: {
        name: "DIAGNÓSTICO",
        title: "Ferramentas de Diagnóstico",
        description: "Diagnostique problemas de hardware e software do seu computador.",
        url: "https://www.memtest86.com/",
        category: "🔍 Diagnóstico",
        keywords: ["diagnóstico", "problema", "hardware", "software", "teste", "erro"]
    },
    otimizacao: {
        name: "OTIMIZAÇÃO",
        title: "Otimizador de Sistema",
        description: "Otimize o desempenho do seu computador e acelere o sistema.",
        url: "https://www.advancedsystemcare.com/",
        category: "⚡ Otimização",
        keywords: ["otimização", "desempenho", "acelerar", "sistema", "melhorar", "velocidade"]
    },
  agendarPosts: {
    name: "AGENDAR_POSTS",
    title: "Agendar Posts em Redes Sociais",
    description: "Ferramenta para agendar publicações em redes sociais como Instagram, Twitter, Facebook e LinkedIn com facilidade.",
    url: "https://buffer.com/",
    category: "📱 Redes Sociais",
    keywords: ["agendamento", "posts", "redes sociais", "instagram", "facebook", "linkedin", "twitter"]
},

mapaCalor: {
    name: "MAPA_CALOR",
    title: "Mapa de Calor do Site",
    description: "Ferramenta para analisar o comportamento dos usuários através de mapas de calor e gravações de sessões.",
    url: "https://www.hotjar.com/",
    category: "📊 Análises e Métricas",
    keywords: ["mapa de calor", "comportamento", "site", "usuário", "gravação", "analytics", "experiência do usuário"]
},

editorPdf: {
    name: "EDITOR_PDF",
    title: "Editor de PDF Online",
    description: "Ferramenta online gratuita para editar, anotar e preencher arquivos PDF diretamente no navegador.",
    url: "https://www.pdfescape.com/",
    category: "📁 Utilitários",
    keywords: ["pdf", "editor", "editar", "online", "preencher", "anotar", "documento"]
},

calculadoraFrete: {
    name: "CALCULADORA_FRETE",
    title: "Calculadora de Frete Correios",
    description: "Ferramenta dos Correios para calcular preços e prazos de entrega de encomendas no Brasil.",
    url: "https://www2.correios.com.br/sistemas/precosPrazos/",
    category: "📦 Logística",
    keywords: ["frete", "correios", "envio", "preço", "prazo", "calculadora", "encomenda"]
},

encurtadorLinks: {
    name: "ENCURTADOR_LINKS",
    title: "Encurtador de Links",
    description: "Ferramenta para encurtar URLs longas e facilitar o compartilhamento de links online.",
    url: "https://bitly.com/",
    category: "🔗 Links",
    keywords: ["encurtar", "link", "url", "bitly", "compartilhar", "curto", "ferramenta"]
},

ocrImagemTexto: {
    name: "OCR_IMAGEM_TEXTO",
    title: "Extrair Texto de Imagem (OCR)",
    description: "Ferramenta para converter imagens e PDFs digitalizados em texto editável usando OCR.",
    url: "https://www.onlineocr.net/",
    category: "📁 Utilitários",
    keywords: ["ocr", "imagem", "texto", "extrair", "converter", "pdf", "digitalização"]
},

conversorMoeda: {
    name: "CONVERSOR_MOEDA",
    title: "Conversor de Moedas",
    description: "Ferramenta para converter valores entre diferentes moedas com base em cotações atualizadas.",
    url: "https://www.xe.com/",
    category: "💱 Finanças",
    keywords: ["moeda", "conversor", "dólar", "euro", "real", "câmbio", "cotação"]
},

cronometroOnline: {
    name: "CRONOMETRO_ONLINE",
    title: "Cronômetro Online",
    description: "Cronômetro e temporizador online para auxiliar na produtividade, foco e atividades cronometradas.",
    url: "https://www.online-stopwatch.com/",
    category: "⏱️ Produtividade",
    keywords: ["cronômetro", "timer", "online", "foco", "produtividade", "tempo", "alarme"]
},

mockupsGratis: {
    name: "MOCKUPS_GRATIS",
    title: "Mockups Grátis Online",
    description: "Crie mockups realistas de produtos, websites e aplicativos para apresentações visuais impactantes.",
    url: "https://smartmockups.com/",
    category: "🎨 Design",
    keywords: ["mockup", "grátis", "visual", "produto", "design", "iphone", "computador"]
},
verificadorPlagio: {
    name: "VERIFICADOR_PLAGIO",
    title: "Verificador de Plágio",
    description: "Ferramenta para verificar se um texto contém trechos copiados de outras fontes na internet.",
    url: "https://smallseotools.com/plagiarism-checker/",
    category: "📚 Escrita e Conteúdo",
    keywords: ["plágio", "verificar", "texto", "conteúdo", "cópia", "originalidade", "ferramenta"]
},

testeVelocidade: {
    name: "TESTE_VELOCIDADE",
    title: "Teste de Velocidade do Site",
    description: "Ferramenta do Google PageSpeed para analisar e otimizar a velocidade de carregamento de páginas da web.",
    url: "https://pagespeed.web.dev/",
    category: "🌐 Desenvolvimento Web",
    keywords: ["velocidade", "site", "pagespeed", "carregamento", "análise", "performance", "otimização"]
},

ferramentaPrototipos: {
    name: "FERRAMENTA_PROTOTIPOS",
    title: "Ferramenta de Protótipos",
    description: "Crie protótipos interativos para aplicações web e mobile com foco em UI e UX.",
    url: "https://www.figma.com/",
    category: "🎨 Design",
    keywords: ["protótipo", "figma", "ui", "ux", "aplicativo", "design", "interativo"]
},

criadorCurriculo: {
    name: "CRIADOR_CURRICULO",
    title: "Criador de Currículo Online",
    description: "Crie currículos profissionais com modelos modernos e visualmente atrativos usando o Canva.",
    url: "https://www.canva.com/resumes/",
    category: "📁 Utilitários",
    keywords: ["currículo", "canva", "design", "profissional", "online", "resumo", "cv"]
},

editorCodigo: {
    name: "EDITOR_CODIGO",
    title: "Editor de Código Online",
    description: "Execute códigos em várias linguagens de programação diretamente do navegador com suporte a colaboração.",
    url: "https://replit.com/",
    category: "💻 Programação",
    keywords: ["programação", "código", "online", "executar", "replit", "colaboração", "editor"]
},

mapaMental: {
    name: "MAPA_MENTAL",
    title: "Mapa Mental Online",
    description: "Organize suas ideias de forma visual com mapas mentais interativos e fáceis de usar.",
    url: "https://www.mindmeister.com/",
    category: "🧠 Produtividade",
    keywords: ["mapa mental", "organização", "ideias", "brainstorm", "planejamento", "visual"]
},

planejadorTarefas: {
    name: "PLANEJADOR_TAREFAS",
    title: "Planejador de Tarefas",
    description: "Organize suas tarefas e projetos com quadros kanban, listas e checklists no Trello.",
    url: "https://trello.com/",
    category: "🗂️ Organização",
    keywords: ["tarefas", "planejamento", "kanban", "cronograma", "checklist", "organizar", "trello"]
},

bancoIcones: {
    name: "BANCO_ICONES",
    title: "Banco de Ícones Grátis",
    description: "Baixe ícones em formato SVG e PNG para usar em projetos de design, sites e aplicativos.",
    url: "https://www.flaticon.com/",
    category: "🎨 Design",
    keywords: ["ícones", "grátis", "svg", "png", "interface", "design", "visual"]
},

correcaoGramatical: {
    name: "CORRECAO_GRAMATICAL",
    title: "Correção Gramatical Online",
    description: "Ferramenta que verifica e corrige erros gramaticais, ortográficos e de estilo em textos.",
    url: "https://languagetool.org/",
    category: "📚 Escrita e Conteúdo",
    keywords: ["gramática", "correção", "texto", "português", "ortografia", "escrita", "language tool"]
},
transcreverAudio: {
    name: "TRANSCRVER_AUDIO",
    title: "Transcrever Áudio para Texto",
    description: "Transcreva automaticamente áudios e vídeos em texto com alta precisão usando inteligência artificial.",
    url: "https://otter.ai/",
    category: "📝 Escrita e Conteúdo",
    keywords: ["transcrever", "áudio", "vídeo", "texto", "voz", "automático", "otter"]
},

previsaoTempo: {
    name: "PREVISAO_TEMPO",
    title: "Ver Previsão do Tempo",
    description: "Veja a previsão do tempo atualizada por localização, com alertas e dados meteorológicos detalhados.",
    url: "https://www.accuweather.com/",
    category: "🌦️ Clima",
    keywords: ["clima", "previsão", "tempo", "meteorologia", "localização", "chuva", "sol"]
},

quadroBranco: {
    name: "QUADRO_BRANCO",
    title: "Quadro Branco Colaborativo",
    description: "Ferramenta online para desenhar, escrever e colaborar em tempo real com sua equipe.",
    url: "https://whiteboard.microsoft.com/",
    category: "🧠 Produtividade",
    keywords: ["quadro branco", "desenho", "online", "colaborativo", "anotações", "brainstorm"]
},

editorVideo: {
    name: "EDITOR_VIDEO",
    title: "Editor de Vídeo Online",
    description: "Edite vídeos diretamente do navegador com cortes, textos, filtros e muito mais.",
    url: "https://clipchamp.com/",
    category: "🎬 Edição de Mídia",
    keywords: ["edição", "vídeo", "online", "clipchamp", "corte", "filme", "mídia"]
},

mapasMentais: {
    name: "MAPAS_MENTAIS",
    title: "Criador de Mapas Mentais",
    description: "Crie mapas mentais interativos para organizar ideias, estudos e projetos.",
    url: "https://www.mindmeister.com/",
    category: "🧠 Produtividade",
    keywords: ["mapa mental", "organizar", "ideias", "mentais", "mindmap", "estudo"]
},

timerPomodoro: {
    name: "TIMER_POMODORO",
    title: "Timer Pomodoro",
    description: "Use a técnica Pomodoro para melhorar sua produtividade e foco com sessões cronometradas.",
    url: "https://pomofocus.io/",
    category: "⏱️ Produtividade",
    keywords: ["pomodoro", "timer", "foco", "produtividade", "tempo", "sessão"]
},

criadorGraficos: {
    name: "CRIADOR_GRAFICOS",
    title: "Criador de Gráficos",
    description: "Crie gráficos simples e rápidos para apresentações e relatórios online.",
    url: "https://chartgo.com/",
    category: "📊 Visualização de Dados",
    keywords: ["gráfico", "visualização", "dados", "barras", "pizza", "criar", "chart"]
},

backupNuvem: {
    name: "BACKUP_NUVEM",
    title: "Backup na Nuvem",
    description: "Armazene e compartilhe arquivos com segurança usando armazenamento em nuvem.",
    url: "https://www.dropbox.com/",
    category: "☁️ Armazenamento",
    keywords: ["backup", "nuvem", "arquivos", "dropbox", "armazenamento", "compartilhar"]
},

leitorEbooks: {
    name: "LEITOR_EBOOKS",
    title: "Leitor de Ebooks Online",
    description: "Leia e baixe livros e materiais digitais gratuitamente para estudo e lazer.",
    url: "https://www.bookboon.com/",
    category: "📚 Leitura",
    keywords: ["ebook", "leitura", "livros", "pdf", "online", "gratuito", "bookboon"]
},

designGratis: {
    name: "DESIGN_GRATIS",
    title: "Design Gráfico Grátis",
    description: "Crie peças gráficas como posts, currículos, banners e convites de forma fácil e gratuita.",
    url: "https://www.canva.com/",
    category: "🎨 Design",
    keywords: ["design", "gráfico", "canva", "criar", "grátis", "posts", "visual"]
},

organizadorTarefas: {
    name: "ORGANIZADOR_TAREFAS",
    title: "Organizador de Tarefas",
    description: "Gerencie suas tarefas e projetos pessoais com organização, etiquetas e metas diárias.",
    url: "https://todoist.com/",
    category: "🗂️ Organização",
    keywords: ["tarefas", "organizar", "todoist", "planejamento", "agenda", "lista"]
},

criadorSites: {
    name: "CRIADOR_SITES",
    title: "Criador de Sites Grátis",
    description: "Crie seu site gratuitamente com templates modernos, blogs, portfólios e lojas.",
    url: "https://wordpress.com/",
    category: "🌐 Desenvolvimento Web",
    keywords: ["site", "grátis", "wordpress", "criar", "blog", "loja", "template"]
},

capturaTela: {
    name: "CAPTURA_TELA",
    title: "Captura de Tela e Edição",
    description: "Capture imagens da tela e edite rapidamente com marcações e anotações.",
    url: "https://www.lightshot.org/",
    category: "🖼️ Imagem",
    keywords: ["captura", "tela", "print", "edição", "imagem", "lightshot"]
},
codificadorVideos: {
    name: "CODIFICADOR_VIDEOS",
    title: "Codificador de Vídeos",
    description: "Ferramenta para codificação e compressão de vídeos com alta performance.",
    url: "https://handbrake.fr/",
    category: "🎞️ Vídeo",
    keywords: ["vídeo", "codificação", "compressão", "conversão"]
},

editorPdfs: {
    name: "EDITOR_PDFS",
    title: "Editor de PDFs",
    description: "Ferramenta para edição de arquivos PDF online de forma prática e gratuita.",
    url: "https://www.pdfescape.com/",
    category: "📄 Documentos",
    keywords: ["pdf", "edição", "documento", "online", "gratuito"]
},

chatAoVivo: {
    name: "CHAT_AO_VIVO",
    title: "Chat Ao Vivo para Sites",
    description: "Ferramenta para adicionar suporte de chat em tempo real em sites.",
    url: "https://www.tawk.to/",
    category: "💬 Comunicação",
    keywords: ["chat", "suporte", "tempo real", "site"]
},

testeVelocidadeInternet: {
    name: "TESTE_VELOCIDADE",
    title: "Teste de Velocidade de Internet",
    description: "Ferramenta para medir a velocidade da conexão de internet com download, upload e ping.",
    url: "https://www.speedtest.net/",
    category: "🌐 Internet",
    keywords: ["velocidade", "internet", "teste", "download", "upload", "ping"]
},

monitoramentoUptime: {
    name: "MONITORAMENTO_UPTIME",
    title: "Monitoramento de Uptime",
    description: "Monitore o tempo de atividade do seu site e receba alertas em caso de falhas.",
    url: "https://uptimerobot.com/",
    category: "🌐 Internet",
    keywords: ["monitoramento", "uptime", "site", "alertas", "falhas"]
},

mapasInterativos: {
    name: "MAPAS_INTERATIVOS",
    title: "Mapas Interativos",
    description: "Crie mapas interativos personalizados com dados geográficos em tempo real.",
    url: "https://www.mapbox.com/",
    category: "📁 Utilitários",
    keywords: ["mapa", "interativo", "geografia", "dados", "personalizado"]
},

backupBancosDados: {
    name: "BACKUP_BANCOS_DADOS",
    title: "Backup de Bancos de Dados",
    description: "Ferramenta para realizar backup seguro de bancos de dados em nuvem.",
    url: "https://www.dropbox.com/",
    category: "📁 Utilitários",
    keywords: ["backup", "banco de dados", "segurança", "nuvem"]
},

criacaoQuestionarios: {
    name: "CRIACAO_QUESTIONARIOS",
    title: "Criação de Questionários",
    description: "Ferramenta para criar questionários e formulários online interativos.",
    url: "https://www.typeform.com/",
    category: "📄 Documentos",
    keywords: ["questionário", "formulário", "online", "interativo", "pesquisa"]
},

assinaturaDigital: {
    name: "ASSINATURA_DIGITAL",
    title: "Assinatura Digital",
    description: "Assine documentos digitalmente com validade jurídica.",
    url: "https://www.docusign.com/",
    category: "📄 Documentos",
    keywords: ["assinatura", "digital", "documento", "eletrônica", "legal"]
},

criadorLandingPages: {
    name: "CRIADOR_LANDING_PAGES",
    title: "Criador de Landing Pages",
    description: "Ferramenta para criar páginas de captura para campanhas de marketing.",
    url: "https://unbounce.com/",
    category: "🌐 Web",
    keywords: ["landing page", "marketing", "página de captura", "conversão"]
},

relatoriosSeo: {
    name: "RELATORIOS_SEO",
    title: "Relatórios de SEO",
    description: "Ferramenta para gerar relatórios detalhados de SEO para otimização de sites.",
    url: "https://moz.com/",
    category: "📈 SEO",
    keywords: ["seo", "relatório", "otimização", "ranking", "moz"]
},

gerenciamentoFinanceiroPessoal: {
    name: "GERENCIAMENTO_FINANCEIRO_PESSOAL",
    title: "Gerenciamento Financeiro Pessoal",
    description: "Controle suas finanças pessoais, orçamentos e gastos facilmente.",
    url: "https://www.youneedabudget.com/",
    category: "💰 Finanças",
    keywords: ["finanças", "controle", "orçamento", "pessoal", "gastos"]
},

geradorQrCodeDinamico: {
    name: "GERADOR_QR_CODE_DINAMICO",
    title: "Gerador de QR Code Dinâmico",
    description: "Crie QR Codes dinâmicos que podem ser atualizados sem alterar o código impresso.",
    url: "https://qr-code-generator.com/",
    category: "📁 Utilitários",
    keywords: ["qr code", "dinâmico", "gerador", "atualizável", "link"]
},

monitorRedesWifi: {
    name: "MONITOR_REDES_WIFI",
    title: "Monitor de Redes Wi-Fi",
    description: "Analise sinais e interferências de redes Wi-Fi para otimizar conexões.",
    url: "https://inssider.en.softonic.com/",
    category: "🌐 Internet",
    keywords: ["wi-fi", "rede", "monitoramento", "sinal", "interferência"]
},

mapaMentalBrainstorming: {
    name: "MAPA_MENTAL_BRAINSTORMING",
    title: "Mapa Mental e Brainstorming",
    description: "Ferramenta para criar mapas mentais e sessões de brainstorming online.",
    url: "https://www.mindmeister.com/",
    category: "📁 Utilitários",
    keywords: ["mapa mental", "brainstorming", "ideias", "colaboração", "online"]
},

testeAbWebsites: {
    name: "TESTE_AB_WEBSITES",
    title: "Teste A/B para Websites",
    description: "Ferramenta para realizar testes A/B e otimizar conversões em sites.",
    url: "https://vwo.com/",
    category: "🌐 Web",
    keywords: ["teste a/b", "otimização", "conversão", "site", "marketing"]
},

pomodoroTimer: {
    name: "POMODORO_TIMER",
    title: "Pomodoro Timer",
    description: "Controle seu tempo e aumente a produtividade com a técnica Pomodoro.",
    url: "https://tomato-timer.com/",
    category: "⏰ Produtividade",
    keywords: ["pomodoro", "timer", "produtividade", "tempo", "controle"]
},

visualizadorAlgoritmos: {
    name: "VISUALIZADOR_ALGORITMOS",
    title: "Visualizador de Algoritmos",
    description: "Visualize estruturas de dados e algoritmos de forma interativa.",
    url: "https://visualgo.net/en",
    category: "💻 Desenvolvimento",
    keywords: ["algoritmo", "visualizador", "estrutura de dados", "programação"]
},
compressor: {
        name: "COMPRESSOR",
        title: "Compressor de Imagem",
        description: "Ferramenta para reduzir o tamanho de imagens PNG, JPG e outros formatos sem perder qualidade.",
        url: "https://tinypng.com/",
        category: "📁 Utilitários",
        keywords: ["imagem", "compressão", "png", "jpg", "jpeg", "foto", "fotografia", "tamanho", "reduzir"]
    },
    plagio: {
        name: "VERIFICADOR",
        title: "Verificador de Plágio",
        description: "Ferramenta para verificar se seu texto tem conteúdo duplicado ou plagiado.",
        url: "https://smallseotools.com/plagiarism-checker/",
        category: "📝 Texto",
        keywords: ["plágio", "verificar", "texto", "duplicado", "conteúdo", "originalidade", "cópia"]
    },
    pdf: {
        name: "EDITOR PDF",
        title: "Editor de PDF Online",
        description: "Ferramenta para editar documentos PDF diretamente no navegador sem instalar programas.",
        url: "https://www.sejda.com/pt/pdf-editor",
        category: "📄 Documentos",
        keywords: ["pdf", "editor", "documento", "editar", "modificar", "alterar", "arquivo"]
    },
    qr: {
        name: "QR CODE",
        title: "Gerador de QR Code",
        description: "Ferramenta para criar códigos QR personalizados para links, textos e informações.",
        url: "https://www.qr-code-generator.com/",
        category: "🔗 Links",
        keywords: ["qr", "código", "gerador", "link", "url", "texto", "informação", "digital"]
    },
    timer: {
        name: "TEMPORIZADOR",
        title: "Temporizador Online",
        description: "Ferramenta para cronômetro e alarme online para gerenciar seu tempo de estudo.",
        url: "https://timer.onlineclock.net/",
        category: "⏰ Produtividade",
        keywords: ["temporizador", "cronômetro", "alarme", "tempo", "estudo", "produtividade", "contador"]
    },
    logo: {
        name: "CRIADOR LOGOS",
        title: "Criador de Logos",
        description: "Ferramenta para design logos profissionais gratuitamente com ferramentas online.",
        url: "https://www.canva.com/logos/",
        category: "🎨 Design",
        keywords: ["logo", "design", "criar", "marca", "identidade", "visual", "gráfico", "profissional"]
    },
    conversor: {
        name: "CONVERSOR",
        title: "Conversor de Arquivos Online",
        description: "Converta arquivos entre diferentes formatos: vídeo, áudio, imagem e documentos.",
        url: "https://convertio.co/",
        category: "🔄 Conversão",
        keywords: ["conversor", "arquivo", "formato", "vídeo", "áudio", "imagem", "converter"]
    },
    editor: {
        name: "EDITOR",
        title: "Editor de Código Online",
        description: "Escreva, edite e execute código em várias linguagens de programação.",
        url: "https://replit.com/",
        category: "🔧 Desenvolvimento",
        keywords: ["código", "programação", "editor", "desenvolvimento", "linguagem", "executar"]
    },
    analisador: {
        name: "ANALISADOR",
        title: "Analisador de SEO",
        description: "Analise e otimize seu site para motores de busca com ferramentas gratuitas.",
        url: "https://www.seoreviewtools.com/",
        category: "📊 Análise",
        keywords: ["seo", "análise", "otimização", "site", "google", "ranking", "busca"]
    },
    criptografia: {
        name: "CRIPTOGRAFIA",
        title: "Ferramentas de Criptografia",
        description: "Criptografe e descriptografe textos, senhas e arquivos com segurança.",
        url: "https://www.devglan.com/online-tools",
        category: "🛡️ Segurança",
        keywords: ["criptografia", "senha", "segurança", "encriptar", "descriptografar", "hash"]
    },
    backup: {
        name: "BACKUP",
        title: "Sistema de Backup Online",
        description: "Faça backup automático de seus arquivos na nuvem de forma segura.",
        url: "https://www.backblaze.com/",
        category: "💾 Armazenamento",
        keywords: ["backup", "nuvem", "armazenamento", "segurança", "arquivo", "salvar"]
    },
    monitor: {
        name: "MONITOR",
        title: "Monitor de Sistema",
        description: "Monitore o desempenho do seu computador e recursos do sistema.",
        url: "https://www.hwinfo.com/",
        category: "📈 Monitoramento",
        keywords: ["monitor", "sistema", "desempenho", "cpu", "memória", "hardware"]
    },
    limpeza: {
        name: "LIMPEZA",
        title: "Limpeza de Sistema",
        description: "Limpe arquivos temporários e otimize o desempenho do seu computador.",
        url: "https://www.ccleaner.com/",
        category: "🧹 Manutenção",
        keywords: ["limpeza", "sistema", "temporário", "otimização", "desempenho", "manutenção"]
    },
    recuperacao: {
        name: "RECUPERAÇÃO",
        title: "Recuperação de Arquivos",
        description: "Recupere arquivos deletados acidentalmente do seu computador.",
        url: "https://www.recuva.com/",
        category: "🔄 Recuperação",
        keywords: ["recuperação", "arquivo", "deletado", "lixeira", "restaurar", "perdido"]
    },
    compressao: {
        name: "COMPRESSÃO",
        title: "Compressor de Arquivos",
        description: "Comprima arquivos e pastas para economizar espaço de armazenamento.",
        url: "https://www.7-zip.org/",
        category: "📦 Compressão",
        keywords: ["compressão", "arquivo", "zip", "rar", "economizar", "espaço"]
    },
    sincronizacao: {
        name: "SINCRONIZAÇÃO",
        title: "Sincronização de Arquivos",
        description: "Sincronize arquivos entre diferentes dispositivos automaticamente.",
        url: "https://www.syncthing.net/",
        category: "🔄 Sincronização",
        keywords: ["sincronização", "arquivo", "dispositivo", "automático", "nuvem", "sync"]
    },
    virtualizacao: {
        name: "VIRTUALIZAÇÃO",
        title: "Software de Virtualização",
        description: "Crie máquinas virtuais para testar sistemas e aplicações.",
        url: "https://www.virtualbox.org/",
        category: "🖥️ Virtualização",
        keywords: ["virtualização", "máquina", "virtual", "sistema", "teste", "vm"]
    },
    firewall: {
        name: "FIREWALL",
        title: "Configurador de Firewall",
        description: "Configure e gerencie regras de firewall para proteger sua rede.",
        url: "https://www.zonealarm.com/",
        category: "🛡️ Segurança",
        keywords: ["firewall", "segurança", "rede", "proteção", "configuração", "regras"]
    },
    diagnostico: {
        name: "DIAGNÓSTICO",
        title: "Ferramentas de Diagnóstico",
        description: "Diagnostique problemas de hardware e software do seu computador.",
        url: "https://www.memtest86.com/",
        category: "🔍 Diagnóstico",
        keywords: ["diagnóstico", "problema", "hardware", "software", "teste", "erro"]
    },
    otimizacao: {
        name: "OTIMIZAÇÃO",
        title: "Otimizador de Sistema",
        description: "Otimize o desempenho do seu computador e acelere o sistema.",
        url: "https://www.advancedsystemcare.com/",
        category: "⚡ Otimização",
        keywords: ["otimização", "desempenho", "acelerar", "sistema", "melhorar", "velocidade"]
    },
  planejamentoFinanceiroEmpresarial: {
    name: "PLANEJAMENTO_FINANCEIRO_EMPRESARIAL",
    title: "Planejamento Financeiro Empresarial",
    description: "Ferramenta para planejamento financeiro e controle de finanças empresariais.",
    url: "https://waveapps.com/",
    category: "💰 Finanças",
    keywords: ["planejamento", "financeiro", "empresa", "controle", "finanças"]
},

desenvolvimentoTesteApis: {
    name: "DESENVOLVIMENTO_TESTE_APIS",
    title: "Desenvolvimento e Teste de APIs",
    description: "Ferramenta para desenvolvimento, teste e documentação de APIs.",
    url: "https://postman.com/",
    category: "💻 Desenvolvimento",
    keywords: ["api", "desenvolvimento", "teste", "documentação", "programação"]
},

monitoramentoConcorrentes: {
    name: "MONITORAMENTO_CONCORRENTES",
    title: "Monitoramento de Concorrentes",
    description: "Ferramenta para análise e monitoramento de estratégias de concorrentes.",
    url: "https://www.semrush.com/",
    category: "📈 Marketing",
    keywords: ["monitoramento", "concorrentes", "análise", "marketing", "seo"]
},

criadorCurriculoVideo: {
    name: "CRIADOR_CURRICULO_VIDEO",
    title: "Criador de Currículo em Vídeo",
    description: "Ferramenta para criar currículos em formato de vídeo profissional.",
    url: "https://www.cvmaker.com/",
    category: "📁 Utilitários",
    keywords: ["currículo", "vídeo", "profissional", "apresentação"]
},

rastreamentoEncomendas: {
    name: "RASTREAMENTO_ENCOMENDAS",
    title: "Rastreamento de Encomendas",
    description: "Ferramenta para rastrear pacotes e encomendas de diversas transportadoras.",
    url: "https://www.17track.net/",
    category: "📦 Logística",
    keywords: ["rastreamento", "encomendas", "pacote", "logística", "transporte"]
},

criacaoInfograficos: {
    name: "CRIACAO_INFOGRAFICOS",
    title: "Criação de Infográficos",
    description: "Ferramenta para criar infográficos visuais e atrativos para apresentações.",
    url: "https://piktochart.com/",
    category: "📁 Utilitários",
    keywords: ["infográfico", "design", "visual", "apresentação", "gráfico"]
},

geradorLegendasAutomaticas: {
    name: "GERADOR_LEGENDAS_AUTOMATICAS",
    title: "Gerador Automático de Legendas",
    description: "Ferramenta para gerar legendas automáticas para vídeos de forma rápida.",
    url: "https://www.rev.com/caption",
    category: "🎞️ Vídeo",
    keywords: ["legendas", "automático", "vídeo", "transcrição"]
},

gerenciamentoInventario: {
    name: "GERENCIAMENTO_INVENTARIO",
    title: "Gerenciamento de Inventário",
    description: "Controle e gestão eficiente de estoque e inventário para empresas.",
    url: "https://inflowinventory.com/",
    category: "📦 Logística",
    keywords: ["inventário", "estoque", "controle", "gestão", "empresa"]
},

planoAulaOnline: {
    name: "PLANO_DE_AULA_ONLINE",
    title: "Plano de Aula Online",
    description: "Ferramenta para criação e organização de planos de aula para professores.",
    url: "https://www.planodeaula.net/",
    category: "🎓 Educação",
    keywords: ["plano de aula", "ensino", "professor", "organização", "educação"]
},

avaliacaoDesempenho: {
    name: "AVALIACAO_DESEMPENHO",
    title: "Avaliação de Desempenho",
    description: "Ferramenta para realizar avaliações de desempenho de colaboradores.",
    url: "https://www.trakstar.com/",
    category: "📁 Utilitários",
    keywords: ["avaliação", "desempenho", "colaboradores", "rh", "gestão"]
},

geradorNomesEmpresas: {
    name: "GERADOR_NOMES_EMPRESAS",
    title: "Gerador de Nomes para Empresas",
    description: "Ferramenta para geração de nomes para empresas.",
    url: "https://namelix.com/",
    category: "🛠️ Utilitários",
    keywords: ["geração", "nomes", "empresas", "naming", "marca"]
},

conversorVideoGif: {
    name: "CONVERSOR_VIDEO_GIF",
    title: "Conversor de Vídeo para GIF",
    description: "Ferramenta para conversão de vídeos em GIFs animados.",
    url: "https://ezgif.com/video-to-gif",
    category: "🎥 Multimídia",
    keywords: ["conversão", "vídeo", "gif", "animação", "vídeo para gif"]
},

figma: {
    name: "FIGMA",
    title: "Figma - Design de Interface e Protótipos",
    description: "Ferramenta para design de interfaces e criação de protótipos colaborativos.",
    url: "https://www.figma.com/",
    category: "🎨 Design",
    keywords: ["design", "interface", "protótipos", "ux", "ui", "colaboração"]
},

audioMass: {
    name: "AUDIOMASS",
    title: "AudioMass - Editor de Áudio Online",
    description: "Editor de áudio online simples e gratuito para edição rápida.",
    url: "https://audiomass.co/",
    category: "🎵 Áudio",
    keywords: ["edição", "áudio", "online", "editor", "som"]
},

plantUML: {
    name: "PLANTUML",
    title: "PlantUML - Diagramação UML por Texto",
    description: "Ferramenta para criação de diagramas UML usando texto simples.",
    url: "https://plantuml.com/",
    category: "📊 Desenvolvimento",
    keywords: ["uml", "diagramas", "modelagem", "software", "texto"]
},

screamingFrogSEO: {
    name: "SCREAMING_FROG_SEO",
    title: "Screaming Frog SEO Spider",
    description: "Ferramenta para análise e otimização SEO de sites.",
    url: "https://www.screamingfrog.co.uk/seo-spider/",
    category: "🔍 SEO",
    keywords: ["seo", "análise", "otimização", "site", "ranking"]
},

chatfuel: {
    name: "CHATFUEL",
    title: "Chatfuel - Criador de Chatbots",
    description: "Ferramenta para criação de chatbots sem necessidade de código.",
    url: "https://chatfuel.com/",
    category: "🤖 Chatbots",
    keywords: ["chatbot", "criação", "sem código", "automação", "conversação"]
},

kanbanFlow: {
    name: "KANBANFLOW",
    title: "KanbanFlow - Gerenciamento de Tarefas",
    description: "Ferramenta para gerenciamento de tarefas utilizando método Kanban.",
    url: "https://kanbanflow.com/",
    category: "🗂️ Produtividade",
    keywords: ["kanban", "tarefas", "gerenciamento", "produtividade", "fluxo"]
},

qrCodeMonkey: {
    name: "QRCODE_MONKEY",
    title: "QR Code Monkey - Gerador Customizável",
    description: "Gerador de QR Codes customizados e gratuitos.",
    url: "https://www.qrcode-monkey.com/",
    category: "📱 Utilitários",
    keywords: ["qr code", "gerador", "customizável", "gratuito", "código"]
},

interactio: {
    name: "INTERACTIO",
    title: "Interactio - Tradução Simultânea",
    description: "Ferramenta para tradução simultânea em vídeo chamadas.",
    url: "https://interactio.io/",
    category: "🌐 Comunicação",
    keywords: ["tradução", "simultânea", "vídeo chamada", "idiomas", "conferência"]
},

zohoSheet: {
    name: "ZOHO_SHEET",
    title: "Zoho Sheet - Planilhas Online",
    description: "Ferramenta para criação e edição colaborativa de planilhas online.",
    url: "https://www.zoho.com/sheet/",
    category: "📊 Produtividade",
    keywords: ["planilhas", "colaborativas", "online", "edição", "zoho"]
},
drawio: {
    name: "DRAWIO",
    title: "Draw.io - Criador de Diagramas de Fluxo",
    description: "Ferramenta para criação de diagramas de fluxo de forma visual e intuitiva.",
    url: "https://app.diagrams.net/",
    category: "📐 Design",
    keywords: ["diagramas", "fluxo", "visual", "organograma", "mapa mental"]
},

compressjpeg: {
    name: "COMPRESSJPEG",
    title: "CompressJPEG - Compressão de Imagens JPEG",
    description: "Ferramenta para compressão de imagens JPEG sem perda significativa de qualidade.",
    url: "https://compressjpeg.com/",
    category: "📁 Utilitários",
    keywords: ["compressão", "imagem", "jpeg", "foto", "redução", "tamanho"]
},

speedtest: {
    name: "SPEEDTEST",
    title: "Speedtest by Ookla",
    description: "Ferramenta para testar a velocidade da sua conexão com a internet.",
    url: "https://www.speedtest.net/",
    category: "🌐 Rede",
    keywords: ["velocidade", "internet", "teste", "conexão", "ping", "download"]
},

scratch: {
    name: "SCRATCH",
    title: "Scratch - Programação Visual",
    description: "Plataforma para aprender programação através de blocos visuais interativos.",
    url: "https://scratch.mit.edu/",
    category: "👨‍💻 Educação",
    keywords: ["programação", "blocos", "educacional", "visual", "infantil"]
},

mailchimp: {
    name: "MAILCHIMP",
    title: "Mailchimp - Criação de Newsletters",
    description: "Ferramenta para criação, automação e envio de newsletters por email.",
    url: "https://mailchimp.com/",
    category: "📬 Marketing",
    keywords: ["email", "newsletter", "campanha", "automação", "mail"]
},

smallpdfPdfToWord: {
    name: "SMALLPDF_PDF_TO_WORD",
    title: "Smallpdf - PDF para Word",
    description: "Ferramenta para converter arquivos PDF em documentos editáveis do Word.",
    url: "https://smallpdf.com/pdf-to-word",
    category: "📄 Documentos",
    keywords: ["pdf", "word", "converter", "documento", "edição"]
},

ynab: {
    name: "YNAB",
    title: "YNAB (You Need A Budget)",
    description: "Aplicativo para controle e planejamento financeiro pessoal.",
    url: "https://www.youneedabudget.com/",
    category: "💰 Finanças",
    keywords: ["finanças", "controle", "orçamento", "pessoal", "gastos"]
},

doodle: {
    name: "DOODLE",
    title: "Doodle - Agendamento de Reuniões",
    description: "Ferramenta para agendamento fácil e colaborativo de reuniões e eventos.",
    url: "https://doodle.com/",
    category: "📆 Organização",
    keywords: ["agendamento", "reunião", "evento", "planejamento", "convite"]
},

loom: {
    name: "LOOM",
    title: "Loom - Captura de Tela e Vídeo",
    description: "Ferramenta para gravação de tela e vídeo com áudio, ideal para tutoriais.",
    url: "https://www.loom.com/",
    category: "🎥 Multimídia",
    keywords: ["gravação", "tela", "vídeo", "captura", "tutorial"]
},

otterai: {
    name: "OTTERAI",
    title: "Otter.ai - Transcrição Automática",
    description: "Plataforma para transcrição automática de áudios e reuniões.",
    url: "https://otter.ai/",
    category: "📝 Produtividade",
    keywords: ["transcrição", "áudio", "reunião", "fala", "texto"]
},

jira: {
    name: "JIRA",
    title: "Jira - Gerenciamento Ágil de Projetos",
    description: "Plataforma para gerenciamento de projetos com metodologias ágeis como Scrum e Kanban.",
    url: "https://www.atlassian.com/software/jira",
    category: "📋 Projetos",
    keywords: ["projetos", "ágeis", "jira", "scrum", "kanban", "gestão"]
},
prezi: {
    name: "PREZI",
    title: "Prezi - Apresentações Interativas",
    description: "Ferramenta para criação de apresentações interativas e dinâmicas.",
    url: "https://prezi.com/",
    category: "🖥️ Apresentações",
    keywords: ["apresentações", "interativas", "slides", "dinâmico", "visual"]
},

anchor: {
    name: "ANCHOR",
    title: "Anchor - Plataforma de Podcasts",
    description: "Plataforma gratuita para criar, hospedar e distribuir podcasts.",
    url: "https://anchor.fm/",
    category: "🎙️ Áudio",
    keywords: ["podcast", "áudio", "gravação", "distribuição", "hospedagem"]
},

protonvpn: {
    name: "PROTONVPN",
    title: "ProtonVPN - VPN Gratuito",
    description: "Serviço de VPN seguro e gratuito para proteção da privacidade online.",
    url: "https://protonvpn.com/",
    category: "🔐 Segurança",
    keywords: ["vpn", "privacidade", "segurança", "navegação", "criptografia"]
},

tableau: {
    name: "TABLEAU",
    title: "Tableau Public",
    description: "Plataforma de visualização de dados e criação de dashboards interativos.",
    url: "https://public.tableau.com/",
    category: "📊 Dados",
    keywords: ["dados", "visualização", "dashboard", "gráficos", "analytics"]
},

behance: {
    name: "BEHANCE",
    title: "Behance - Portfolio Criativo",
    description: "Rede para criativos compartilharem seus portfolios e projetos.",
    url: "https://www.behance.net/",
    category: "🎨 Design",
    keywords: ["portfolio", "criativo", "design", "arte", "inspiração"]
},

pdfxchange: {
    name: "PDFXCHANGE",
    title: "PDF-XChange Editor",
    description: "Editor de PDFs com ferramentas para anotação, edição e marcação.",
    url: "https://www.tracker-software.com/product/pdf-xchange-editor",
    category: "📄 Documentos",
    keywords: ["pdf", "editor", "anotação", "edição", "leitor"]
},

uptimerobot: {
    name: "UPTIMEROBOT",
    title: "UptimeRobot - Monitoramento de Sites",
    description: "Ferramenta para monitoramento do uptime e performance de sites.",
    url: "https://uptimerobot.com/",
    category: "🌐 Rede",
    keywords: ["monitoramento", "site", "uptime", "disponibilidade", "status"]
},

deepl: {
    name: "DEEPL",
    title: "DeepL Translator",
    description: "Tradutor avançado de textos e documentos com alta precisão.",
    url: "https://www.deepl.com/translator",
    category: "🌍 Idiomas",
    keywords: ["tradução", "idiomas", "texto", "documento", "precisão"]
},

lucidchart: {
    name: "LUCIDCHART",
    title: "Lucidchart - Fluxogramas",
    description: "Plataforma para criação de fluxogramas, organogramas e diagramas.",
    url: "https://www.lucidchart.com/",
    category: "📐 Design",
    keywords: ["fluxograma", "organograma", "diagrama", "visual", "mapeamento"]
},

tinypng: {
    name: "TINYPNG",
    title: "Tinypng - Otimização de Imagens PNG e JPEG",
    description: "Ferramenta para reduzir o tamanho de imagens PNG e JPEG sem perder qualidade.",
    url: "https://tinypng.com/",
    category: "📁 Utilitários",
    keywords: ["imagem", "compressão", "otimização", "png", "jpeg"]
},

clipchamp: {
    name: "CLIPCHAMP",
    title: "Clipchamp - Editor de Vídeo Online",
    description: "Editor de vídeos online para criação e edição com recursos intuitivos.",
    url: "https://www.clipchamp.com/",
    category: "🎥 Multimídia",
    keywords: ["vídeo", "edição", "gravar", "editor", "online"]
},

mindmeister: {
    name: "MINDMEISTER",
    title: "MindMeister - Mapas Mentais Colaborativos",
    description: "Ferramenta para criação colaborativa de mapas mentais.",
    url: "https://www.mindmeister.com/",
    category: "🧠 Produtividade",
    keywords: ["mapa mental", "ideias", "brainstorm", "colaboração", "organização"]
},

ssllabs: {
    name: "SSLLABS",
    title: "Qualys SSL Labs - Teste de Segurança SSL",
    description: "Ferramenta para análise de segurança de certificados SSL de sites.",
    url: "https://www.ssllabs.com/ssltest/",
    category: "🔐 Segurança",
    keywords: ["ssl", "segurança", "site", "criptografia", "teste"]
},

teamgantt: {
    name: "TEAMGANTT",
    title: "TeamGantt - Gerenciador de Cronogramas",
    description: "Plataforma para criação e gerenciamento visual de cronogramas e projetos.",
    url: "https://www.teamgantt.com/",
    category: "📋 Projetos",
    keywords: ["cronograma", "projeto", "planejamento", "tarefa", "gantt"]
},

graylog: {
    name: "GRAYLOG",
    title: "Graylog - Plataforma de Gestão de Logs",
    description: "Solução para centralização e análise de logs em tempo real.",
    url: "https://www.graylog.org/",
    category: "🔍 Monitoramento",
    keywords: ["logs", "análise", "monitoramento", "dados", "servidor"]
},

hootsuite: {
    name: "HOOTSUITE",
    title: "Hootsuite - Gerenciamento de Redes Sociais",
    description: "Ferramenta para agendar, monitorar e gerenciar várias redes sociais.",
    url: "https://hootsuite.com/",
    category: "📱 Marketing",
    keywords: ["redes sociais", "agendamento", "posts", "social media", "gerenciamento"]
},

weglot: {
    name: "WEGLOT",
    title: "Weglot - Tradução Automática para Sites",
    description: "Plataforma para tradução automática e gestão multilíngue de sites.",
    url: "https://weglot.com/",
    category: "🌍 Idiomas",
    keywords: ["tradução", "site", "automático", "idioma", "multilíngue"]
},

vistacreate: {
    name: "VISTACREATE",
    title: "Crello (agora VistaCreate) - Design para Redes Sociais",
    description: "Ferramenta de design gráfico focada em conteúdo visual para redes sociais.",
    url: "https://create.vista.com/",
    category: "🎨 Design",
    keywords: ["design", "social media", "post", "visual", "criação"]
},

ahrefs: {
    name: "AHREFS",
    title: "Ahrefs - Monitoramento e Análise de Backlinks",
    description: "Ferramenta de SEO para análise de backlinks, palavras-chave e concorrência.",
    url: "https://ahrefs.com/",
    category: "🔍 SEO",
    keywords: ["seo", "backlink", "monitoramento", "análise", "tráfego"]
},

duolingo: {
    name: "DUOLINGO",
    title: "Duolingo - Aprendizado de Idiomas",
    description: "Aplicativo interativo para aprender novos idiomas de forma divertida.",
    url: "https://www.duolingo.com/",
    category: "🌍 Idiomas",
    keywords: ["idioma", "aprendizado", "exercício", "língua", "educação"]
},
zohoInventory: {
    name: "ZOHO_INVENTORY",
    title: "Controle de Estoque",
    description: "Ferramenta para gerenciamento de inventário e organização de produtos.",
    url: "https://www.zoho.com/inventory/",
    category: "📦 Logística",
    keywords: ["inventário", "estoque", "controle", "produtos", "gestão"]
},

zety: {
    name: "ZETY",
    title: "Criador de Currículos",
    description: "Ferramenta online para criação de currículos profissionais e personalizados.",
    url: "https://zety.com/",
    category: "📝 Carreira",
    keywords: ["currículo", "CV", "emprego", "online", "profissional"]
},

marvelApp: {
    name: "MARVEL_APP",
    title: "Prototipagem e Design Colaborativo",
    description: "Ferramenta para criação de protótipos e design colaborativo de interfaces.",
    url: "https://marvelapp.com/",
    category: "🎨 Design",
    keywords: ["design", "protótipo", "colaborativo", "interface", "UX"]
},

removeBg: {
    name: "REMOVE_BG",
    title: "Remoção de Fundo Automática",
    description: "Ferramenta com IA para remover o fundo de imagens automaticamente.",
    url: "https://www.remove.bg/",
    category: "🖼️ Imagem",
    keywords: ["remoção", "fundo", "imagem", "automático", "inteligência artificial"]
},

rastreamento17Track: {
    name: "RASTREAMENTO_17TRACK",
    title: "Rastreamento de Encomendas",
    description: "Ferramenta para rastrear encomendas de diversas transportadoras em um só lugar.",
    url: "https://www.17track.net/",
    category: "📦 Logística",
    keywords: ["rastreamento", "encomendas", "logística", "correios", "pacote"]
},

dbdiagram: {
    name: "DBDIAGRAM",
    title: "Diagramas ER Rápidos",
    description: "Ferramenta online para criação rápida de diagramas entidade-relacionamento.",
    url: "https://dbdiagram.io/",
    category: "🧩 Desenvolvimento",
    keywords: ["ER", "diagrama", "banco de dados", "relacional", "visual"]
},

etherpad: {
    name: "ETHERPAD",
    title: "Editor de Texto Colaborativo",
    description: "Editor de texto online com recursos de colaboração em tempo real.",
    url: "https://etherpad.org/",
    category: "📄 Escritório",
    keywords: ["texto", "colaborativo", "editor", "documento", "tempo real"]
},

zotero: {
    name: "ZOTERO",
    title: "Gerenciador de Referências",
    description: "Ferramenta para organização e citação de referências bibliográficas.",
    url: "https://www.zotero.org/",
    category: "📚 Pesquisa",
    keywords: ["referência", "citação", "bibliografia", "pesquisa", "organização"]
},

chartJs: {
    name: "CHART_JS",
    title: "Biblioteca de Gráficos JavaScript",
    description: "Biblioteca JavaScript para criação de gráficos interativos e responsivos.",
    url: "https://www.chartjs.org/",
    category: "📊 Visualização",
    keywords: ["gráfico", "javascript", "visualização", "dados", "interativo"]
},

bitwarden: {
    name: "BITWARDEN",
    title: "Gerenciador de Senhas Seguro",
    description: "Gerenciador de senhas open-source com foco em segurança e privacidade.",
    url: "https://bitwarden.com/",
    category: "🔐 Segurança",
    keywords: ["senhas", "gerenciador", "segurança", "privacidade", "login"]
},

buffer: {
    name: "BUFFER",
    title: "Agendamento de Redes Sociais",
    description: "Ferramenta para agendar e gerenciar publicações em redes sociais.",
    url: "https://buffer.com/",
    category: "📱 Mídias Sociais",
    keywords: ["agendamento", "redes sociais", "postagem", "marketing", "social"]
},

monkeyLearn: {
    name: "MONKEYLEARN",
    title: "Análise de Sentimentos",
    description: "Ferramenta de IA para análise de sentimentos e classificação de textos.",
    url: "https://monkeylearn.com/",
    category: "🤖 Inteligência Artificial",
    keywords: ["sentimentos", "texto", "análise", "classificação", "machine learning"]
},

keepa: {
    name: "KEEPA",
    title: "Rastreamento de Preços na Amazon",
    description: "Ferramenta para monitorar a variação de preços de produtos na Amazon.",
    url: "https://keepa.com/",
    category: "🛒 Compras",
    keywords: ["preço", "monitoramento", "amazon", "alerta", "produto"]
},

onlyOffice: {
    name: "ONLYOFFICE",
    title: "Suite Office Colaborativa",
    description: "Plataforma de edição e colaboração em documentos, planilhas e apresentações.",
    url: "https://www.onlyoffice.com/",
    category: "📄 Escritório",
    keywords: ["documentos", "colaboração", "office", "planilha", "texto"]
},

sonarQube: {
    name: "SONARQUBE",
    title: "Análise de Qualidade de Código",
    description: "Ferramenta para análise contínua da qualidade de código fonte.",
    url: "https://www.sonarqube.org/",
    category: "💻 Desenvolvimento",
    keywords: ["código", "qualidade", "análise", "bugs", "desempenho"]
},

moodle: {
    name: "MOODLE",
    title: "Plataforma de Ensino Online",
    description: "Sistema de gerenciamento de aprendizado utilizado por instituições educacionais.",
    url: "https://moodle.org/",
    category: "🎓 Educação",
    keywords: ["ensino", "plataforma", "cursos", "e-learning", "educação"]
},

docusaurus: {
    name: "DOCUSAURUS",
    title: "Documentação para Projetos",
    description: "Ferramenta para criação de sites de documentação técnica usando React.",
    url: "https://docusaurus.io/",
    category: "📘 Documentação",
    keywords: ["documentação", "projeto", "site", "React", "técnico"]
},

mint: {
    name: "MINT",
    title: "Controle Financeiro Pessoal",
    description: "Aplicativo para gerenciamento de finanças pessoais e orçamento.",
    url: "https://www.mint.com/",
    category: "💰 Finanças",
    keywords: ["finanças", "orçamento", "controle", "despesas", "pessoal"]
},

kahoot: {
    name: "KAHOOT",
    title: "Criação de Quizzes Interativos",
    description: "Ferramenta para criar quizzes e jogos educativos interativos.",
    url: "https://kahoot.com/",
    category: "🎓 Educação",
    keywords: ["quiz", "interativo", "educação", "jogo", "perguntas"]
},

fireshot: {
    name: "FIRESHOT",
    title: "Captura e Edição de Tela",
    description: "Extensão para capturar, salvar e editar capturas de tela em PDF.",
    url: "https://getfireshot.com/",
    category: "🖥️ Utilitários",
    keywords: ["captura", "tela", "pdf", "print", "edição"]
},
postman: {
    name: "POSTMAN",
    title: "Plataforma para Testes de API",
    description: "Ferramenta poderosa para criação, teste e documentação de APIs.",
    url: "https://www.postman.com/",
    category: "🧪 Desenvolvimento",
    keywords: ["API", "teste", "requisição", "desenvolvimento", "http"]
},

infogram: {
    name: "INFOGRAM",
    title: "Criador de Infográficos",
    description: "Ferramenta para criação de infográficos interativos e visualizações de dados.",
    url: "https://infogram.com/",
    category: "📊 Visualização",
    keywords: ["infográfico", "visual", "dados", "design", "apresentação"]
},

fellowApp: {
    name: "FELLOW_APP",
    title: "Gestão e Anotações em Reuniões",
    description: "Plataforma para organizar reuniões, registrar anotações e acompanhar decisões.",
    url: "https://fellow.app/",
    category: "🗓️ Produtividade",
    keywords: ["reuniões", "anotações", "agenda", "gestão", "colaboração"]
},

webflow: {
    name: "WEBFLOW",
    title: "Plataforma No-Code para Sites",
    description: "Ferramenta para criação de sites profissionais sem necessidade de codificação.",
    url: "https://webflow.com/",
    category: "🌐 Web Design",
    keywords: ["no-code", "site", "web", "criação", "design"]
},

hubspotCrm: {
    name: "HUBSPOT_CRM",
    title: "Gerenciamento de Clientes CRM",
    description: "Plataforma completa de CRM para gestão de leads, vendas e relacionamento com clientes.",
    url: "https://www.hubspot.com/products/crm",
    category: "📞 CRM",
    keywords: ["crm", "clientes", "gestão", "vendas", "relacionamento"]
},

firebasePerformance: {
    name: "FIREBASE_PERFORMANCE",
    title: "Monitoramento de Performance de Apps",
    description: "Ferramenta do Firebase para monitorar o desempenho de aplicativos em tempo real.",
    url: "https://firebase.google.com/products/performance",
    category: "📱 Desenvolvimento",
    keywords: ["firebase", "performance", "monitoramento", "app", "desempenho"]
},

podbean: {
    name: "PODBEAN",
    title: "Plataforma de Podcasts",
    description: "Serviço completo para hospedagem, criação e monetização de podcasts.",
    url: "https://www.podbean.com/",
    category: "🎙️ Mídia",
    keywords: ["podcast", "áudio", "hospedagem", "criação", "streaming"]
},

dashlaneBusiness: {
    name: "DASHLANE_BUSINESS",
    title: "Gerenciador de Senhas",
    description: "Gerenciador de senhas corporativas com foco em segurança empresarial.",
    url: "https://www.dashlane.com/business",
    category: "🔐 Segurança",
    keywords: ["senhas", "segurança", "empresarial", "credenciais", "gerenciador"]
},

cospacesEdu: {
    name: "COSPACES_EDU",
    title: "Criação de Ambientes 3D",
    description: "Ferramenta educacional para criar experiências e ambientes virtuais 3D interativos.",
    url: "https://cospaces.io/edu/",
    category: "🧠 Educação",
    keywords: ["3D", "educação", "realidade virtual", "ambientes", "interativo"]
},

jupyterNotebook: {
    name: "JUPYTER_NOTEBOOK",
    title: "Análise e Visualização de Dados Científicos",
    description: "Ambiente interativo para programação, visualização de dados e ciência de dados com Python.",
    url: "https://jupyter.org/",
    category: "📊 Ciência de Dados",
    keywords: ["dados", "ciência", "python", "análise", "visualização"]
},
jira: {
    name: "JIRA",
    title: "Gestão Ágil de Projetos",
    description: "Ferramenta para gerenciamento de projetos ágeis com suporte a Scrum e Kanban.",
    url: "https://www.atlassian.com/software/jira",
    category: "🗂️ Projetos",
    keywords: ["projetos", "ágeis", "scrum", "kanban", "gestão", "planejamento"]
},

hotjar: {
    name: "HOTJAR",
    title: "Teste de Usabilidade e Feedback",
    description: "Ferramenta de análise de comportamento do usuário com mapas de calor e pesquisas.",
    url: "https://www.hotjar.com/",
    category: "📈 UX/UI",
    keywords: ["usabilidade", "feedback", "mapa de calor", "experiência", "usuário"]
},

mailchimp: {
    name: "MAILCHIMP",
    title: "Automação de Marketing",
    description: "Plataforma completa para automação de e-mails, campanhas e marketing digital.",
    url: "https://mailchimp.com/",
    category: "📣 Marketing",
    keywords: ["e-mail", "marketing", "automação", "newsletter", "campanhas"]
},

lucidchart: {
    name: "LUCIDCHART",
    title: "Criador de Fluxogramas",
    description: "Ferramenta online para criar fluxogramas, diagramas e mapas mentais colaborativamente.",
    url: "https://www.lucidchart.com/",
    category: "📐 Diagramas",
    keywords: ["fluxograma", "diagrama", "visual", "organização", "planejamento"]
},

figma: {
    name: "FIGMA",
    title: "Design e Prototipagem",
    description: "Ferramenta colaborativa para design de interfaces, protótipos e wireframes.",
    url: "https://www.figma.com/",
    category: "🎨 Design",
    keywords: ["design", "ui", "ux", "prototipagem", "colaboração", "interface"]
},

similarweb: {
    name: "SIMILARWEB",
    title: "Análise de Concorrência",
    description: "Ferramenta de inteligência digital para análise de tráfego e performance de concorrentes.",
    url: "https://www.similarweb.com/",
    category: "📊 Análise",
    keywords: ["concorrência", "tráfego", "web", "análise", "inteligência", "market share"]
},

prezi: {
    name: "PREZI",
    title: "Apresentações Dinâmicas",
    description: "Ferramenta para criar apresentações visuais não lineares e interativas.",
    url: "https://prezi.com/",
    category: "🖥️ Apresentações",
    keywords: ["apresentações", "dinâmico", "slides", "visual", "educação", "palestras"]
},
wave: {
    name: "WAVE",
    title: "Avaliação de Acessibilidade Web",
    description: "Ferramenta para identificar problemas de acessibilidade em páginas web.",
    url: "https://wave.webaim.org/",
    category: "♿ Acessibilidade",
    keywords: ["acessibilidade", "web", "auditoria", "inclusão", "html"]
},

copyai: {
    name: "COPY.AI",
    title: "Escrita Automática com IA",
    description: "Geração automática de conteúdo com inteligência artificial para textos diversos.",
    url: "https://www.copy.ai/",
    category: "🤖 IA",
    keywords: ["texto", "automático", "escrita", "conteúdo", "copywriting"]
},

typeform: {
    name: "TYPEFORM",
    title: "Questionários Interativos",
    description: "Ferramenta para criar formulários, pesquisas e questionários de forma interativa.",
    url: "https://www.typeform.com/",
    category: "📝 Formulários",
    keywords: ["formulários", "pesquisa", "questionário", "respostas", "interação"]
},

bugzilla: {
    name: "BUGZILLA",
    title: "Rastreamento de Bugs",
    description: "Sistema de rastreamento de bugs e gerenciamento de falhas em software.",
    url: "https://www.bugzilla.org/",
    category: "🪲 QA",
    keywords: ["bugs", "rastreamento", "falhas", "qualidade", "software"]
},

substack: {
    name: "SUBSTACK",
    title: "Plataforma de Newsletters",
    description: "Ferramenta para criar, publicar e monetizar newsletters de forma simples.",
    url: "https://substack.com/",
    category: "✉️ Comunicação",
    keywords: ["newsletter", "publicação", "conteúdo", "assinatura", "escrita"]
},

sketchfab: {
    name: "SKETCHFAB",
    title: "Modelagem 3D e Visualização",
    description: "Plataforma para publicar, compartilhar e visualizar modelos 3D online.",
    url: "https://sketchfab.com/",
    category: "📐 3D",
    keywords: ["3d", "modelagem", "visualização", "design", "realidade virtual"]
},

quizlet: {
    name: "QUIZLET",
    title: "Flashcards e Testes",
    description: "Ferramenta para estudar com flashcards, quizzes e atividades educativas.",
    url: "https://quizlet.com/",
    category: "📚 Educação",
    keywords: ["educação", "flashcards", "teste", "memorização", "ensino"]
},

uptimerobot: {
    name: "UPTIMEROBOT",
    title: "Monitoramento de Sites",
    description: "Monitora a disponibilidade de sites e notifica quando estão fora do ar.",
    url: "https://uptimerobot.com/",
    category: "🌐 Infraestrutura",
    keywords: ["uptime", "monitoramento", "site", "status", "alerta"]
},

looka: {
    name: "LOOKA",
    title: "Criador de Logos com IA",
    description: "Ferramenta baseada em IA para criar logotipos personalizados rapidamente.",
    url: "https://looka.com/",
    category: "🎨 Design",
    keywords: ["logo", "identidade visual", "marca", "design", "automático"]
},

aboutme: {
    name: "ABOUT.ME",
    title: "Página Pessoal Online",
    description: "Crie uma página pessoal com informações profissionais e sociais em poucos cliques.",
    url: "https://about.me/",
    category: "🧑 Perfil",
    keywords: ["página pessoal", "perfil", "biografia", "apresentação", "link"]
},

replit: {
    name: "REPLIT",
    title: "IDE Colaborativa Online",
    description: "Ambiente de desenvolvimento online com suporte colaborativo em tempo real.",
    url: "https://replit.com/",
    category: "💻 Desenvolvimento",
    keywords: ["ide", "programação", "colaboração", "editor", "código"]
},

netspot: {
    name: "NETSPOT",
    title: "Análise de Redes Wi-Fi",
    description: "Ferramenta para mapear, analisar e otimizar redes Wi-Fi.",
    url: "https://www.netspotapp.com/",
    category: "📡 Redes",
    keywords: ["wi-fi", "rede", "análise", "mapa", "sinal"]
},

construct3: {
    name: "CONSTRUCT 3",
    title: "Criador de Jogos 2D",
    description: "Ferramenta para desenvolvimento de jogos 2D sem necessidade de programação.",
    url: "https://www.construct.net/",
    category: "🎮 Games",
    keywords: ["jogos", "2d", "game", "criação", "desenvolvimento"]
},
meetgeek: {
    name: "MEETGEEK",
    title: "Gravação e Transcrição de Reuniões",
    description: "Ferramenta para gravação automática, transcrição e resumo de reuniões online.",
    url: "https://meetgeek.ai/",
    category: "📅 Reuniões",
    keywords: ["reuniões", "transcrição", "gravação", "online", "resumo"]
},

storyboardThat: {
    name: "STORYBOARD_THAT",
    title: "Criador de Storyboards",
    description: "Ferramenta para criar storyboards educativos, comerciais e de projetos visuais.",
    url: "https://www.storyboardthat.com/",
    category: "🎬 Criatividade",
    keywords: ["storyboard", "visual", "educação", "projeto", "planejamento"]
},

speedtest: {
    name: "SPEEDTEST.NET",
    title: "Teste de Velocidade de Internet",
    description: "Ferramenta para testar a velocidade da conexão de internet em tempo real.",
    url: "https://www.speedtest.net/",
    category: "🌐 Internet",
    keywords: ["velocidade", "internet", "conexão", "download", "upload"]
},

qustodio: {
    name: "QUSTODIO",
    title: "Controle Parental",
    description: "Ferramenta para monitoramento, filtragem e controle de atividades online de crianças.",
    url: "https://www.qustodio.com/",
    category: "🛡️ Segurança",
    keywords: ["controle parental", "monitoramento", "família", "segurança", "filtragem"]
},

calibre: {
    name: "CALIBRE",
    title: "Gerenciador de eBooks",
    description: "Gerenciador completo de eBooks, com suporte para conversão, organização e leitura.",
    url: "https://calibre-ebook.com/",
    category: "📚 Leitura",
    keywords: ["ebook", "livros", "leitura", "organização", "formato"]
},

tinypng: {
    name: "TINYPng",
    title: "Compressão de Imagens",
    description: "Ferramenta para reduzir o tamanho de imagens PNG e JPG mantendo a qualidade.",
    url: "https://tinypng.com/",
    category: "📁 Utilitários",
    keywords: ["imagem", "compressão", "png", "jpg", "otimização", "foto"]
},

slack: {
    name: "SLACK",
    title: "Comunicação para Equipes",
    description: "Plataforma de comunicação e colaboração em tempo real para equipes remotas.",
    url: "https://slack.com/",
    category: "💼 Trabalho Remoto",
    keywords: ["equipe", "mensagens", "colaboração", "trabalho remoto", "canal"]
},

timeGraphics: {
    name: "TIME_GRAPHICS",
    title: "Criador de Timelines",
    description: "Ferramenta para criar linhas do tempo interativas e visuais para qualquer fim.",
    url: "https://time.graphics/",
    category: "📊 Visualização",
    keywords: ["linha do tempo", "timeline", "histórico", "visualização", "eventos"]
},

qrCodeGenerator: {
    name: "QR_CODE_GENERATOR",
    title: "Geração de Códigos QR",
    description: "Ferramenta para gerar códigos QR personalizados para links, textos e mais.",
    url: "https://www.qr-code-generator.com/",
    category: "🔗 Utilitários",
    keywords: ["qr code", "código", "gerar", "link", "compartilhamento"]
},

twistedwave: {
    name: "TWISTEDWAVE",
    title: "Editor de Áudio Online",
    description: "Editor de áudio baseado na web para gravação, corte, e processamento de som.",
    url: "https://twistedwave.com/online",
    category: "🎧 Áudio",
    keywords: ["áudio", "edição", "som", "online", "gravação", "efeitos"]
},
ticktick: {
    name: "TICKTICK",
    title: "Gerenciamento de Tarefas",
    description: "Aplicativo para organização pessoal com listas de tarefas, calendário e lembretes.",
    url: "https://ticktick.com/",
    category: "✅ Produtividade",
    keywords: ["tarefas", "produtividade", "organização", "listas", "lembrete"]
},

brightlocal: {
    name: "BRIGHTLOCAL",
    title: "SEO Local",
    description: "Ferramenta para análise e otimização de SEO local para empresas e negócios.",
    url: "https://www.brightlocal.com/",
    category: "📈 SEO",
    keywords: ["seo", "local", "otimização", "negócio", "mapas"]
},

pdfescape: {
    name: "PDFESCAPE",
    title: "Edição e Colaboração PDF",
    description: "Ferramenta online para editar, anotar e compartilhar arquivos PDF.",
    url: "https://www.pdfescape.com/",
    category: "📄 Documentos",
    keywords: ["pdf", "edição", "colaboração", "documento", "anotação"]
},

leadpages: {
    name: "LEADPAGES",
    title: "Páginas de Captura",
    description: "Plataforma para criação de landing pages focadas em conversões.",
    url: "https://www.leadpages.com/",
    category: "📣 Marketing",
    keywords: ["landing page", "captura", "conversão", "formulário", "leads"]
},

loom: {
    name: "LOOM",
    title: "Gravação de Tela e Vídeos",
    description: "Ferramenta para gravação rápida de tela, câmera e áudio para comunicação assíncrona.",
    url: "https://www.loom.com/",
    category: "🎥 Vídeo",
    keywords: ["gravação", "vídeo", "tela", "explicação", "tutorial"]
},

socialblade: {
    name: "SOCIALBLADE",
    title: "Análise de Influenciadores",
    description: "Plataforma de estatísticas e análise de performance para perfis de redes sociais.",
    url: "https://socialblade.com/",
    category: "📊 Redes Sociais",
    keywords: ["influenciador", "estatísticas", "youtube", "análise", "seguidores"]
},

wevideo: {
    name: "WEVIDEO",
    title: "Editor de Vídeo Online",
    description: "Editor de vídeo colaborativo baseado em nuvem, ideal para projetos em grupo.",
    url: "https://www.wevideo.com/",
    category: "🎬 Edição de Vídeo",
    keywords: ["vídeo", "edição", "online", "colaboração", "criação"]
},

balsamiq: {
    name: "BALSAMIQ",
    title: "Criador de Wireframes",
    description: "Ferramenta para criar wireframes de interfaces de forma rápida e intuitiva.",
    url: "https://balsamiq.com/",
    category: "🧩 Design",
    keywords: ["wireframe", "ux", "design", "prototipagem", "interface"]
},

personalCapital: {
    name: "PERSONAL_CAPITAL",
    title: "Controle de Investimentos",
    description: "Ferramenta de gestão financeira para monitorar investimentos e planejamento pessoal.",
    url: "https://www.personalcapital.com/",
    category: "💰 Finanças",
    keywords: ["investimentos", "controle", "finanças", "planejamento", "orçamento"]
},

anchor: {
    name: "ANCHOR",
    title: "Plataforma para Podcasts",
    description: "Ferramenta gratuita para gravação, hospedagem e distribuição de podcasts.",
    url: "https://anchor.fm/",
    category: "🎙️ Podcast",
    keywords: ["podcast", "gravação", "distribuição", "áudio", "streaming"]
},

lastpass: {
    name: "LASTPASS",
    title: "Gerenciador de Senhas",
    description: "Armazene e preencha automaticamente senhas com segurança e praticidade.",
    url: "https://www.lastpass.com/",
    category: "🔐 Segurança",
    keywords: ["senha", "gerenciador", "segurança", "login", "acesso"]
},

mindmeister: {
    name: "MINDMEISTER",
    title: "Mapas Mentais Online",
    description: "Ferramenta visual para criar, editar e compartilhar mapas mentais online.",
    url: "https://www.mindmeister.com/",
    category: "🧠 Ideias",
    keywords: ["mapa mental", "organização", "ideias", "brainstorm", "colaboração"]
},

inshot: {
    name: "INSHOT",
    title: "Editor de Vídeos para Mobile",
    description: "Aplicativo móvel para editar vídeos curtos com filtros, cortes e efeitos.",
    url: "https://inshot.com/",
    category: "📱 Mobile",
    keywords: ["vídeo", "edição", "curto", "mobile", "app"]
},

monkeylearn: {
    name: "MONKEYLEARN",
    title: "Análise de Sentimentos com IA",
    description: "Plataforma de análise de texto com foco em sentimentos, tópicos e extração de dados.",
    url: "https://monkeylearn.com/",
    category: "🤖 Inteligência Artificial",
    keywords: ["sentimentos", "texto", "análise", "ia", "classificação"]
},

bigcommerce: {
    name: "BIGCOMMERCE",
    title: "Plataforma de E-commerce",
    description: "Solução para criar, gerenciar e expandir lojas virtuais com ferramentas robustas.",
    url: "https://www.bigcommerce.com/",
    category: "🛒 E-commerce",
    keywords: ["loja virtual", "ecommerce", "venda online", "negócio", "plataforma"]
},
audacity: {
    name: "AUDACITY",
    title: "Editor de Áudio Gratuito",
    description: "Software open source para edição e gravação de áudio, muito usado para podcasts.",
    url: "https://www.audacityteam.org/",
    category: "🎙️ Áudio",
    keywords: ["áudio", "edição", "podcast", "gravação", "open source"]
},

adobeXD: {
    name: "ADOBE XD",
    title: "Design e Prototipagem UX/UI",
    description: "Ferramenta da Adobe para design e prototipagem de interfaces e experiências digitais.",
    url: "https://www.adobe.com/products/xd.html",
    category: "🧩 Design",
    keywords: ["ux", "ui", "prototipagem", "design", "interface"]
},

clicky: {
    name: "CLICKY",
    title: "Análise de Tráfego em Tempo Real",
    description: "Plataforma para monitoramento detalhado de visitantes e tráfego web em tempo real.",
    url: "https://clicky.com/",
    category: "📈 Analytics",
    keywords: ["tráfego", "web", "análise", "tempo real", "visitantes"]
},

buffer: {
    name: "BUFFER",
    title: "Agendamento de Postagens",
    description: "Ferramenta para agendar e gerenciar publicações em redes sociais de forma simples.",
    url: "https://buffer.com/",
    category: "📱 Redes Sociais",
    keywords: ["agendamento", "postagem", "redes sociais", "marketing", "social media"]
},

canva: {
    name: "CANVA",
    title: "Design Gráfico Fácil",
    description: "Plataforma online para criação fácil de designs gráficos, desde posts até apresentações.",
    url: "https://www.canva.com/",
    category: "🎨 Design",
    keywords: ["design", "gráfico", "criador", "online", "fácil"]
},

deepl: {
    name: "DEEPL",
    title: "Tradução Automática Avançada",
    description: "Tradutor automático que utiliza inteligência artificial para traduções precisas e naturais.",
    url: "https://www.deepl.com/translator",
    category: "🌐 Tradução",
    keywords: ["tradução", "automática", "ia", "linguagem", "texto"]
},

majestic: {
    name: "MAJESTIC",
    title: "Análise de Backlinks",
    description: "Ferramenta especializada em análise e monitoramento de backlinks para SEO.",
    url: "https://majestic.com/",
    category: "📈 SEO",
    keywords: ["backlinks", "seo", "análise", "links", "monitoramento"]
},

animaker: {
    name: "ANIMAKER",
    title: "Criador de Vídeos Animados",
    description: "Plataforma para criação fácil de vídeos animados, ideal para marketing e educação.",
    url: "https://www.animaker.com/",
    category: "🎬 Vídeo",
    keywords: ["vídeo", "animação", "criador", "marketing", "educação"]
},

mention: {
    name: "MENTION",
    title: "Monitoramento de Marca",
    description: "Ferramenta para monitorar menções online da sua marca, concorrentes e tendências.",
    url: "https://mention.com/",
    category: "📢 Monitoramento",
    keywords: ["monitoramento", "marca", "menções", "online", "social media"]
},

asana: {
    name: "ASANA",
    title: "Gestão de Projetos e Tarefas",
    description: "Plataforma colaborativa para gerenciar projetos, tarefas e fluxos de trabalho em equipe.",
    url: "https://asana.com/",
    category: "✅ Produtividade",
    keywords: ["gestão", "projetos", "tarefas", "colaboração", "produtividade"]
},
kwfinder: {
    name: "KWFINDER",
    title: "Pesquisa de Palavras-Chave",
    description: "Ferramenta para pesquisa e análise de palavras-chave para SEO e marketing digital.",
    url: "https://kwfinder.com/",
    category: "📈 SEO",
    keywords: ["palavras-chave", "seo", "marketing", "análise", "pesquisa"]
},

obsStudio: {
    name: "OBS STUDIO",
    title: "Gravação e Streaming",
    description: "Software gratuito e open source para gravação de tela e transmissões ao vivo.",
    url: "https://obsproject.com/",
    category: "🎥 Vídeo",
    keywords: ["gravação", "streaming", "vídeo", "tela", "open source"]
},

ynab: {
    name: "YNAB",
    title: "Controle Financeiro",
    description: "Aplicativo para controle financeiro pessoal com foco em orçamento eficiente.",
    url: "https://www.youneedabudget.com/",
    category: "💰 Finanças",
    keywords: ["finanças", "controle", "orçamento", "pessoal", "dinheiro"]
},

splunk: {
    name: "SPLUNK",
    title: "Análise de Dados de Log",
    description: "Plataforma para coleta, análise e visualização de dados de logs de servidores e sistemas.",
    url: "https://www.splunk.com/",
    category: "🖥️ Infraestrutura",
    keywords: ["logs", "análise", "dados", "servidores", "monitoramento"]
},

googleForms: {
    name: "GOOGLE FORMS",
    title: "Formulários Online",
    description: "Ferramenta do Google para criação e gerenciamento de formulários e pesquisas online.",
    url: "https://docs.google.com/forms/",
    category: "📋 Formulários",
    keywords: ["formulários", "pesquisas", "online", "google", "questionários"]
},

hootsuite: {
    name: "HOOTSUITE",
    title: "Gestão de Redes Sociais",
    description: "Plataforma para gerenciamento e agendamento de postagens em múltiplas redes sociais.",
    url: "https://hootsuite.com/",
    category: "📱 Redes Sociais",
    keywords: ["gestão", "redes sociais", "agendamento", "marketing", "social media"]
},

semrush: {
    name: "SEMRUSH",
    title: "Ferramenta Completa de SEO",
    description: "Solução integrada para análise, auditoria e otimização de SEO e marketing digital.",
    url: "https://www.semrush.com/",
    category: "📈 SEO",
    keywords: ["seo", "marketing digital", "análise", "palavras-chave", "auditoria"]
},

wordpress: {
    name: "WORDPRESS",
    title: "Plataforma de Blogs e Sites",
    description: "Sistema de gerenciamento de conteúdo para criação de blogs, sites e lojas virtuais.",
    url: "https://wordpress.com/",
    category: "🌐 Web",
    keywords: ["blog", "site", "cms", "wordpress", "web"]
},

pixlr: {
    name: "PIXLR",
    title: "Editor de Imagens Online",
    description: "Editor de imagens online com diversas ferramentas para ajustes e criação rápida.",
    url: "https://pixlr.com/",
    category: "🎨 Design",
    keywords: ["editor de imagens", "online", "foto", "design", "edição"]
},

todoist: {
    name: "TODOIST",
    title: "Gerenciador de Tarefas",
    description: "Aplicativo para organização pessoal e gerenciamento de tarefas com listas e projetos.",
    url: "https://todoist.com/",
    category: "✅ Produtividade",
    keywords: ["tarefas", "produtividade", "organização", "listas", "projetos"]
},
rescueTime: {
    name: "RESCUE TIME",
    title: "Monitoramento de Produtividade",
    description: "Ferramenta para monitorar e analisar o tempo gasto em atividades digitais, ajudando no gerenciamento de tempo.",
    url: "https://www.rescuetime.com/",
    category: "⏳ Produtividade",
    keywords: ["produtividade", "tempo", "monitoramento", "gestão", "foco"]
},

artbreeder: {
    name: "ARTBREEDER",
    title: "Geração de Imagens com IA",
    description: "Plataforma que utiliza inteligência artificial para criar e modificar imagens artísticas.",
    url: "https://www.artbreeder.com/",
    category: "🎨 IA e Arte",
    keywords: ["arte", "ia", "imagens", "geração", "criatividade"]
},

slidebean: {
    name: "SLIDEBEAN",
    title: "Apresentações Inteligentes",
    description: "Ferramenta para criação automática de apresentações profissionais e interativas.",
    url: "https://slidebean.com/",
    category: "📊 Apresentações",
    keywords: ["apresentações", "slides", "design", "inteligente", "profissional"]
},

habitica: {
    name: "HABITICA",
    title: "Rastreador de Hábitos Gamificado",
    description: "App que transforma hábitos e tarefas diárias em um jogo para aumentar a motivação.",
    url: "https://habitica.com/",
    category: "🎮 Produtividade",
    keywords: ["hábitos", "produtividade", "gamificação", "tarefas", "motivação"]
},

smallpdf: {
    name: "SMALLPDF",
    title: "Conversão e Edição de PDF",
    description: "Plataforma online para converter, editar e compactar arquivos PDF facilmente.",
    url: "https://smallpdf.com/",
    category: "📄 PDF",
    keywords: ["pdf", "edição", "conversão", "compressão", "documentos"]
},

spyfu: {
    name: "SPYFU",
    title: "Análise de Concorrentes em SEO e Ads",
    description: "Ferramenta para pesquisa e análise de estratégias de SEO e anúncios dos concorrentes.",
    url: "https://www.spyfu.com/",
    category: "📈 SEO",
    keywords: ["concorrentes", "seo", "ads", "análise", "marketing digital"]
},

venngage: {
    name: "VENNGAGE",
    title: "Criador de Infográficos",
    description: "Plataforma para criação fácil de infográficos, relatórios e visualizações de dados.",
    url: "https://venngage.com/",
    category: "🎨 Design",
    keywords: ["infográficos", "design", "visualização", "dados", "criação"]
},

mailtrack: {
    name: "MAILTRACK",
    title: "Rastreamento de Emails",
    description: "Extensão para rastrear a abertura e o status de emails enviados.",
    url: "https://mailtrack.io/",
    category: "📧 Comunicação",
    keywords: ["email", "rastreamento", "notificações", "abertura", "mensagens"]
},

codepen: {
    name: "CODEPEN",
    title: "Editor e Showcase de Front-end",
    description: "Ambiente online para desenvolvimento, testes e compartilhamento de código front-end.",
    url: "https://codepen.io/",
    category: "💻 Desenvolvimento",
    keywords: ["front-end", "html", "css", "javascript", "editor"]
},

quizizz: {
    name: "QUIZIZZ",
    title: "Plataforma de Quizzes",
    description: "Ferramenta para criação e aplicação de quizzes interativos e educativos.",
    url: "https://quizizz.com/",
    category: "🎓 Educação",
    keywords: ["quizzes", "educação", "interativo", "teste", "aprendizado"]
},

manychat: {
    name: "MANYCHAT",
    title: "Plataforma de Chatbots para Marketing",
    description: "Ferramenta para criação e automação de chatbots focados em marketing e vendas.",
    url: "https://manychat.com/",
    category: "🤖 Marketing",
    keywords: ["chatbot", "automação", "marketing", "vendas", "mensagens"]
},

onlyoffice: {
    name: "ONLYOFFICE",
    title: "Suite de Escritório Colaborativa",
    description: "Conjunto de ferramentas online para edição e colaboração em documentos, planilhas e apresentações.",
    url: "https://www.onlyoffice.com/",
    category: "📄 Produtividade",
    keywords: ["colaboração", "documentos", "planilhas", "apresentações", "office"]
},

camtasia: {
    name: "CAMTASIA",
    title: "Gravação e Edição de Vídeo Tutorial",
    description: "Software para gravação de tela e edição de vídeos, focado em tutoriais e apresentações.",
    url: "https://www.techsmith.com/video-editor.html",
    category: "🎥 Vídeo",
    keywords: ["gravação", "edição", "tutorial", "vídeo", "apresentações"]
},

hotjar: {
    name: "HOTJAR",
    title: "Análise de Comportamento do Usuário",
    description: "Ferramenta para mapear o comportamento dos usuários em sites através de heatmaps e gravações.",
    url: "https://www.hotjar.com/",
    category: "🌐 Análise Web",
    keywords: ["usuário", "comportamento", "heatmap", "análise", "web"]
},

anchor: {
    name: "ANCHOR",
    title: "Plataforma Completa para Podcasts",
    description: "Serviço para criação, hospedagem e distribuição de podcasts de forma simples e gratuita.",
    url: "https://anchor.fm/",
    category: "🎙️ Podcasts",
    keywords: ["podcast", "áudio", "gravação", "distribuição", "hospedagem"]
},
adespresso: {
    name: "ADESPRESSO",
    title: "Gerenciamento de Anúncios Facebook e Google",
    description: "Plataforma para criação, otimização e gerenciamento de campanhas publicitárias no Facebook e Google Ads.",
    url: "https://adespresso.com/",
    category: "📢 Marketing Digital",
    keywords: ["anúncios", "facebook", "google", "ads", "gerenciamento"]
},

brightlocal: {
    name: "BRIGHTLOCAL",
    title: "SEO Local e Monitoramento de Rankings",
    description: "Ferramenta para monitorar e melhorar o SEO local de negócios, acompanhando rankings e avaliações.",
    url: "https://www.brightlocal.com/",
    category: "📍 SEO",
    keywords: ["seo local", "monitoramento", "rankings", "avaliações", "negócios locais"]
},

dropbox: {
    name: "DROPBOX",
    title: "Armazenamento e Compartilhamento na Nuvem",
    description: "Serviço de armazenamento online para salvar, sincronizar e compartilhar arquivos com facilidade.",
    url: "https://www.dropbox.com/",
    category: "☁️ Nuvem",
    keywords: ["armazenamento", "nuvem", "compartilhamento", "sincronização", "arquivos"]
},

mailchimp: {
    name: "MAILCHIMP",
    title: "Email Marketing e Automação",
    description: "Plataforma completa para criação, envio e automação de campanhas de email marketing.",
    url: "https://mailchimp.com/",
    category: "📧 Marketing",
    keywords: ["email marketing", "automação", "campanhas", "newsletter", "marketing digital"]
},

lucidchart: {
    name: "LUCIDCHART",
    title: "Diagramas e Fluxogramas Online",
    description: "Ferramenta para criação colaborativa de diagramas, fluxogramas e mapas mentais.",
    url: "https://www.lucidchart.com/",
    category: "📊 Produtividade",
    keywords: ["diagramas", "fluxogramas", "colaboração", "visualização", "mapas mentais"]
},

github: {
    name: "GITHUB",
    title: "Plataforma de Controle de Versão",
    description: "Serviço de hospedagem de código com controle de versões via Git, colaboração e revisão.",
    url: "https://github.com/",
    category: "💻 Desenvolvimento",
    keywords: ["controle de versão", "git", "código", "colaboração", "programação"]
},

raindrop: {
    name: "RAINDROP.IO",
    title: "Gerenciador de Favoritos",
    description: "Aplicativo para organizar, salvar e compartilhar bookmarks de forma visual e prática.",
    url: "https://raindrop.io/",
    category: "🌐 Organização",
    keywords: ["favoritos", "bookmarks", "organização", "salvar links", "compartilhar"]
},

uptimerobot: {
    name: "UPTIMEROBOT",
    title: "Monitoramento de Disponibilidade",
    description: "Ferramenta para monitorar uptime de sites, enviando alertas em caso de indisponibilidade.",
    url: "https://uptimerobot.com/",
    category: "🖥️ Monitoramento",
    keywords: ["uptime", "monitoramento", "sites", "alertas", "disponibilidade"]
},

optimizely: {
    name: "OPTIMIZELY",
    title: "Plataforma de Testes A/B",
    description: "Serviço para criação, execução e análise de testes A/B para otimização de sites e apps.",
    url: "https://www.optimizely.com/",
    category: "📈 CRO",
    keywords: ["teste a/b", "otimização", "experimentos", "análise", "conversão"]
},

zohoInventory: {
    name: "ZOHO INVENTORY",
    title: "Controle de Estoque Online",
    description: "Sistema para gerenciar inventário, pedidos e vendas, integrando canais de vendas online.",
    url: "https://www.zoho.com/inventory/",
    category: "📦 Gestão",
    keywords: ["estoque", "inventário", "controle", "vendas", "logística"]
},

substack: {
    name: "SUBSTACK",
    title: "Plataforma para Newsletters",
    description: "Ferramenta para criação, publicação e monetização de newsletters por email.",
    url: "https://substack.com/",
    category: "📧 Comunicação",
    keywords: ["newsletter", "email", "publicação", "monetização", "assinaturas"]
},

looka: {
    name: "LOOKA",
    title: "Criador de Logos com IA",
    description: "Plataforma que usa inteligência artificial para criar logos profissionais personalizados.",
    url: "https://looka.com/",
    category: "🎨 Design",
    keywords: ["logo", "design", "inteligência artificial", "branding", "marca"]
},
replit: {
    name: "REPLIT",
    title: "IDE Online Colaborativa",
    description: "Ambiente de desenvolvimento integrado (IDE) online que permite programação colaborativa em diversas linguagens.",
    url: "https://replit.com/",
    category: "💻 Desenvolvimento",
    keywords: ["ide", "programação", "colaborativo", "online", "código"]
},

appannie: {
    name: "APP ANNIE",
    title: "Analytics para Aplicativos",
    description: "Plataforma de análise e monitoramento de desempenho para aplicativos móveis e mercado de apps.",
    url: "https://www.data.ai/en/",
    category: "📊 Análise",
    keywords: ["analytics", "apps móveis", "desempenho", "mercado", "monitoramento"]
},

tinypng: {
    name: "TINYPING",
    title: "Compressão de Imagens",
    description: "Ferramenta online para otimizar e reduzir o tamanho de imagens PNG e JPEG sem perder qualidade.",
    url: "https://tinypng.com/",
    category: "🎨 Design",
    keywords: ["compressão", "imagens", "png", "jpeg", "otimização"]
},

teachable: {
    name: "TEACHABLE",
    title: "Plataforma para Cursos Online",
    description: "Ferramenta para criação, venda e gestão de cursos online com recursos completos de ensino.",
    url: "https://teachable.com/",
    category: "🎓 Educação",
    keywords: ["cursos online", "plataforma", "ensino", "venda", "gestão"]
},

tableau: {
    name: "TABLEAU",
    title: "Visualização de Dados",
    description: "Software para análise e visualização interativa de dados em dashboards dinâmicos e relatórios.",
    url: "https://www.tableau.com/",
    category: "📊 Análise",
    keywords: ["visualização", "dados", "análise", "dashboards", "relatórios"]
},

jira: {
    name: "JIRA",
    title: "Gestão Ágil de Projetos",
    description: "Ferramenta para gerenciamento ágil de projetos, rastreamento de issues e colaboração de equipes.",
    url: "https://www.atlassian.com/software/jira",
    category: "📋 Gestão",
    keywords: ["gestão ágil", "projetos", "issues", "colaboração", "scrum"]
},

notion: {
    name: "NOTION",
    title: "Organização e Gestão de Conhecimento",
    description: "Aplicativo multifuncional para organização pessoal, criação de documentos, bancos de dados e colaboração.",
    url: "https://www.notion.so/",
    category: "📚 Produtividade",
    keywords: ["organização", "documentos", "colaboração", "banco de dados", "gestão de conhecimento"]
},

qrcodeGenerator: {
    name: "QR CODE GENERATOR",
    title: "Criação de QR Codes",
    description: "Ferramenta online para criação rápida e personalizada de códigos QR para diversas aplicações.",
    url: "https://www.qr-code-generator.com/",
    category: "📱 Marketing",
    keywords: ["qr code", "gerador", "códigos", "personalizado", "digital"]
},
lightshot: {
    name: "LIGHTSHOT",
    title: "Captura de Tela Simples",
    description: "Ferramenta fácil para captura de tela com opções de anotações rápidas e compartilhamento.",
    url: "https://app.prntscr.com/en/index.html",
    category: "🖼️ Ferramentas de Imagem",
    keywords: ["captura de tela", "screenshot", "anotações", "simples", "compartilhamento"]
},

microsoftToDo: {
    name: "MICROSOFT TO DO",
    title: "Gerenciador de Tarefas",
    description: "Aplicativo para gerenciamento de tarefas com integração ao ecossistema Microsoft e sincronização multiplataforma.",
    url: "https://todo.microsoft.com/tasks/",
    category: "📋 Produtividade",
    keywords: ["tarefas", "gerenciador", "notas", "microsoft", "sincronização"]
},

axe: {
    name: "AXE",
    title: "Ferramenta de Teste de Acessibilidade",
    description: "Extensão e ferramenta para análise e testes automáticos de acessibilidade em sites e aplicações web.",
    url: "https://www.deque.com/axe/",
    category: "🧩 Desenvolvimento",
    keywords: ["acessibilidade", "teste", "web", "automático", "análise"]
},

figma: {
    name: "FIGMA",
    title: "Design Colaborativo de Interfaces",
    description: "Plataforma online para design UI/UX com colaboração em tempo real entre equipes.",
    url: "https://figma.com/",
    category: "🎨 Design",
    keywords: ["design", "colaboração", "ui", "ux", "prototipagem"]
},

zapier: {
    name: "ZAPIER",
    title: "Automação de Tarefas",
    description: "Ferramenta para conectar apps e automatizar fluxos de trabalho sem necessidade de código.",
    url: "https://zapier.com/",
    category: "⚙️ Automação",
    keywords: ["automação", "integração", "tarefas", "fluxos", "apps"]
},

canvaResumeBuilder: {
    name: "CANVA RESUME BUILDER",
    title: "Criador de Currículos",
    description: "Ferramenta online para criação rápida e personalizada de currículos profissionais com templates variados.",
    url: "https://www.canva.com/resumes/templates/",
    category: "📄 Design",
    keywords: ["currículo", "resumo", "canva", "templates", "design"]
},

statista: {
    name: "STATISTA",
    title: "Estatísticas e Estudos de Mercado",
    description: "Plataforma de dados estatísticos, gráficos e estudos para suporte em pesquisas de mercado e análise de dados.",
    url: "https://www.statista.com/",
    category: "📊 Análise",
    keywords: ["estatísticas", "mercado", "dados", "pesquisa", "gráficos"]
},

postman: {
    name: "POSTMAN",
    title: "Plataforma para APIs",
    description: "Ferramenta completa para desenvolvimento, teste e documentação de APIs REST e outros tipos de API.",
    url: "https://www.postman.com/",
    category: "💻 Desenvolvimento",
    keywords: ["api", "desenvolvimento", "teste", "documentação", "rest"]
},

timeGraphics: {
    name: "TIME.GRAPHICS",
    title: "Criador de Linha do Tempo",
    description: "Ferramenta online para criação de timelines interativas, ideal para projetos, estudos e apresentações.",
    url: "https://time.graphics/",
    category: "📅 Organização",
    keywords: ["linha do tempo", "timeline", "interativo", "projetos", "apresentações"]
},

otterai: {
    name: "OTTER.AI",
    title: "Transcrição e Legendas Automáticas",
    description: "Plataforma para transcrição automática de áudio e geração de legendas em tempo real com alta precisão.",
    url: "https://otter.ai/",
    category: "🎙️ Comunicação",
    keywords: ["transcrição", "legendas", "automático", "áudio", "reuniões"]
},
coggle: {
    name: "COGGLE",
    title: "Mapas Mentais Colaborativos",
    description: "Ferramenta online para criação e compartilhamento colaborativo de mapas mentais de forma simples e visual.",
    url: "https://coggle.it/",
    category: "🧠 Produtividade",
    keywords: ["mapas mentais", "colaborativo", "brainstorming", "visual", "organização"]
},

screencastOMatic: {
    name: "SCREENCAST-O-MATIC",
    title: "Gravação de Tela Online",
    description: "Plataforma para captura e gravação de tela com ferramentas de edição e compartilhamento fácil.",
    url: "https://screencast-o-matic.com/",
    category: "🎥 Produção",
    keywords: ["gravação", "tela", "video", "captura", "edição"]
},

proposify: {
    name: "PROPOSIFY",
    title: "Software para Propostas Comerciais",
    description: "Ferramenta para criação, envio e gerenciamento de propostas comerciais profissionais e personalizadas.",
    url: "https://www.proposify.com/",
    category: "📑 Vendas",
    keywords: ["propostas", "comercial", "vendas", "gestão", "negócios"]
},

vimeo: {
    name: "VIMEO",
    title: "Plataforma de Vídeo Profissional",
    description: "Serviço de hospedagem e organização de vídeos voltado para profissionais com alta qualidade e recursos avançados.",
    url: "https://vimeo.com/",
    category: "🎬 Vídeo",
    keywords: ["vídeo", "hospedagem", "profissional", "streaming", "organização"]
},

typeform: {
    name: "TYPEFORM",
    title: "Criador de Formulários e Quizzes Interativos",
    description: "Ferramenta para criar formulários, quizzes e pesquisas interativas com design atrativo e fácil de usar.",
    url: "https://www.typeform.com/",
    category: "📝 Pesquisa",
    keywords: ["formulários", "quizzes", "interativo", "pesquisa", "questionário"]
},

survicate: {
    name: "SURVICATE",
    title: "Pesquisa de Feedback para Websites",
    description: "Plataforma para coletar feedback dos usuários via pesquisas, pop-ups e questionários em sites.",
    url: "https://www.survicate.com/",
    category: "📊 Pesquisa",
    keywords: ["feedback", "pesquisa", "usuários", "website", "pop-ups"]
},

twistedWave: {
    name: "TWISTEDWAVE",
    title: "Editor de Áudio Online",
    description: "Editor de áudio baseado em navegador com ferramentas para gravação, edição e processamento de som.",
    url: "https://twistedwave.com/online",
    category: "🎵 Áudio",
    keywords: ["edição", "áudio", "gravação", "processamento", "online"]
},

beautifulAI: {
    name: "BEAUTIFUL.AI",
    title: "Criação Inteligente de Apresentações",
    description: "Ferramenta para criação de apresentações automáticas com design inteligente e templates profissionais.",
    url: "https://www.beautiful.ai/",
    category: "📈 Apresentações",
    keywords: ["apresentação", "slides", "design", "automático", "templates"]
},

bitwarden: {
    name: "BITWARDEN",
    title: "Gerenciador de Senhas Seguro",
    description: "Gerenciador de senhas de código aberto, com armazenamento seguro e sincronização entre dispositivos.",
    url: "https://bitwarden.com/",
    category: "🔒 Segurança",
    keywords: ["senhas", "segurança", "gerenciador", "criptografia", "open source"]
},

unbounce: {
    name: "UNBOUNCE",
    title: "Criador de Landing Pages",
    description: "Plataforma para criação e otimização de landing pages com foco em conversão e marketing digital.",
    url: "https://unbounce.com/",
    category: "💻 Marketing",
    keywords: ["landing page", "conversão", "marketing", "criação", "otimização"]
},

brandwatch: {
    name: "BRANDWATCH",
    title: "Monitoramento e Análise de Redes Sociais",
    description: "Ferramenta para monitorar, analisar e entender o comportamento e sentimento em redes sociais.",
    url: "https://www.brandwatch.com/",
    category: "📱 Social Media",
    keywords: ["monitoramento", "redes sociais", "análise", "sentimento", "engajamento"]
},

inshot: {
    name: "INSHOT",
    title: "Editor de Vídeos para Smartphones",
    description: "Aplicativo para edição rápida e fácil de vídeos em dispositivos móveis, com recursos de corte, filtros e efeitos.",
    url: "https://inshot.com/",
    category: "🎞️ Vídeo",
    keywords: ["edição", "vídeo", "smartphone", "filtros", "corte"]
},

adobeXD: {
    name: "ADOBE XD",
    title: "Ferramenta para Design UX/UI",
    description: "Software profissional para design, prototipagem e colaboração em projetos de experiência do usuário e interfaces.",
    url: "https://www.adobe.com/products/xd.html",
    category: "🎨 Design",
    keywords: ["ux", "ui", "design", "prototipagem", "colaboração"]
},

eventbrite: {
    name: "EVENTBRITE",
    title: "Plataforma de Gestão de Eventos",
    description: "Ferramenta para criação, promoção e gerenciamento de eventos com venda de ingressos integrada.",
    url: "https://www.eventbrite.com/",
    category: "🎫 Eventos",
    keywords: ["evento", "gestão", "ingressos", "promoção", "organização"]
},

deepl: {
    name: "DEEPL",
    title: "Tradutor Automático de Alta Qualidade",
    description: "Serviço de tradução automática com alta precisão e suporte a múltiplos idiomas e formatos.",
    url: "https://www.deepl.com/translator",
    category: "🌐 Tradução",
    keywords: ["tradução", "automático", "idiomas", "precisão", "texto"]
},

loom: {
    name: "LOOM",
    title: "Gravação de Tela e Vídeo Rápida",
    description: "Ferramenta para gravação rápida de tela, webcam e áudio, com fácil compartilhamento via link.",
    url: "https://www.loom.com/",
    category: "🎥 Produção",
    keywords: ["gravação", "tela", "vídeo", "webcam", "compartilhamento"]
},

ynab: {
    name: "YNAB",
    title: "Gestão de Orçamento Pessoal",
    description: "Aplicativo para controle financeiro pessoal focado em orçamento e planejamento de gastos.",
    url: "https://www.youneedabudget.com/",
    category: "💰 Finanças",
    keywords: ["orçamento", "finanças", "controle", "pessoal", "planejamento"]
},

hubspotSalesHub: {
    name: "HUBSPOT SALES HUB",
    title: "Automação e CRM de Vendas",
    description: "Plataforma para gestão de vendas, automação de processos e CRM integrado para times comerciais.",
    url: "https://www.hubspot.com/products/sales",
    category: "📈 Vendas",
    keywords: ["crm", "vendas", "automação", "gestão", "pipeline"]
},

foxitReader: {
    name: "FOXIT READER",
    title: "Leitor e Editor de PDF",
    description: "Software leve para leitura, anotação e edição básica de arquivos PDF com diversas funcionalidades.",
    url: "https://www.foxit.com/pdf-reader/",
    category: "📄 Produtividade",
    keywords: ["pdf", "leitor", "editor", "anotações", "arquivos"]
},

docusign: {
    name: "DOCUSIGN",
    title: "Assinaturas Eletrônicas e Gestão de Contratos",
    description: "Plataforma para envio, assinatura eletrônica e gerenciamento seguro de documentos e contratos.",
    url: "https://www.docusign.com/",
    category: "📑 Legal",
    keywords: ["assinatura eletrônica", "contratos", "documentos", "segurança", "gestão"]
},

codepen: {
    name: "CODEPEN",
    title: "Ambiente para Testes de Código Front-end",
    description: "Editor online para criação, teste e compartilhamento de trechos de código front-end em HTML, CSS e JavaScript.",
    url: "https://codepen.io/",
    category: "💻 Desenvolvimento",
    keywords: ["front-end", "código", "html", "css", "javascript"]
},

similarweb: {
    name: "SIMILARWEB",
    title: "Análise de Tráfego de Websites",
    description: "Plataforma para análise detalhada de tráfego, fontes e comportamento de usuários em websites.",
    url: "https://www.similarweb.com/",
    category: "📊 Análise",
    keywords: ["tráfego", "websites", "análise", "usuários", "fontes"]
},
buffer: {
    name: "BUFFER",
    title: "Buffer - Agendamento e Gestão de Redes Sociais",
    description: "Ferramenta para agendamento e gerenciamento de publicações em redes sociais.",
    url: "https://buffer.com/",
    category: "📱 Redes Sociais",
    keywords: ["gerenciamento", "redes sociais", "agendamento", "publicação"]
},
googleDocs: {
    name: "GOOGLE_DOCS",
    title: "Google Docs - Documentos Colaborativos Online",
    description: "Plataforma para criação e edição colaborativa de documentos online.",
    url: "https://docs.google.com/",
    category: "✍️ Escritório e Colaboração",
    keywords: ["escrita", "colaborativa", "documentos", "online", "edição"]
},
sendGrid: {
    name: "SENDGRID",
    title: "SendGrid - Plataforma de Email Marketing",
    description: "Ferramenta para monitoramento e envio de campanhas de email marketing.",
    url: "https://sendgrid.com/",
    category: "📧 Email Marketing",
    keywords: ["email marketing", "monitoramento", "campanhas", "envio", "email"]
},
intercom: {
    name: "INTERCOM",
    title: "Intercom - Chat ao Vivo para Websites",
    description: "Solução de chat ao vivo para atendimento e suporte em websites.",
    url: "https://www.intercom.com/",
    category: "💬 Atendimento ao Cliente",
    keywords: ["chat", "ao vivo", "suporte", "website", "atendimento"]
},
miro: {
    name: "MIRO",
    title: "Miro - Quadro Branco Digital Colaborativo",
    description: "Ferramenta colaborativa para criação e gestão visual de projetos e brainstorms.",
    url: "https://miro.com/",
    category: "🎨 Gestão Visual",
    keywords: ["colaborativo", "quadro branco", "projetos", "brainstorm", "visual"]
},
sonarQube: {
    name: "SONARQUBE",
    title: "SonarQube - Análise de Código para Qualidade",
    description: "Plataforma para análise estática de código visando qualidade e segurança.",
    url: "https://www.sonarqube.org/",
    category: "🧑‍💻 Desenvolvimento",
    keywords: ["análise de código", "qualidade", "segurança", "desenvolvimento", "estático"]
},
venngage: {
    name: "VENNGAGE",
    title: "Venngage - Criador de Infográficos Online",
    description: "Ferramenta para criação de infográficos personalizados e profissionais online.",
    url: "https://venngage.com/",
    category: "📊 Design e Visualização",
    keywords: ["infográficos", "design", "visualização", "online", "personalizado"]
},
teamViewer: {
    name: "TEAMVIEWER",
    title: "TeamViewer - Acesso Remoto e Colaboração",
    description: "Software para acesso remoto, suporte e colaboração entre equipes.",
    url: "https://www.teamviewer.com/",
    category: "🔧 Suporte e Colaboração",
    keywords: ["acesso remoto", "colaboração", "suporte", "equipe", "controle"]
},
removeBg: {
    name: "REMOVE_BG",
    title: "Remove.bg - Remoção Automática de Fundo",
    description: "Ferramenta online que remove automaticamente o fundo de imagens.",
    url: "https://www.remove.bg/",
    category: "🖼️ Edição de Imagens",
    keywords: ["remoção de fundo", "imagem", "automático", "fotos", "edição"]
},
botFather: {
    name: "BOTFATHER",
    title: "BotFather - Criação de Bots no Telegram",
    description: "Ferramenta oficial para criação e gerenciamento de bots no Telegram.",
    url: "https://core.telegram.org/bots#6-botfather",
    category: "🤖 Bots e Automação",
    keywords: ["bot", "telegram", "criação", "automação", "chatbot"]
},
hopin: {
    name: "HOPIN",
    title: "Hopin - Plataforma para Eventos Virtuais",
    description: "Plataforma para organização, gestão e transmissão de eventos virtuais.",
    url: "https://hopin.com/",
    category: "🎉 Eventos Virtuais",
    keywords: ["evento virtual", "gestão", "transmissão", "plataforma", "online"]
},
weVideo: {
    name: "WEVIDEO",
    title: "WeVideo - Editor de Vídeo Online Colaborativo",
    description: "Editor de vídeo online com recursos colaborativos para equipes.",
    url: "https://www.wevideo.com/",
    category: "🎥 Edição de Vídeo",
    keywords: ["edição de vídeo", "online", "colaborativo", "multimídia", "produção"]
},
lastPassPasswordGenerator: {
    name: "LASTPASS_PASSWORD_GENERATOR",
    title: "LastPass Password Generator - Criador de Senhas Seguras",
    description: "Ferramenta para geração de senhas seguras e complexas.",
    url: "https://www.lastpass.com/password-generator",
    category: "🔐 Segurança",
    keywords: ["senha", "segura", "geração", "complexa", "segurança"]
},
balsamiq: {
    name: "BALSAMIQ",
    title: "Balsamiq - Criação de Wireframes para UX",
    description: "Software para criação rápida de wireframes para design de UX.",
    url: "https://balsamiq.com/",
    category: "🎨 UX/UI Design",
    keywords: ["wireframe", "ux", "design", "protótipo", "interface"]
},
majesticSEO: {
    name: "MAJESTIC_SEO",
    title: "Majestic SEO - Análise de Backlinks",
    description: "Ferramenta para análise e monitoramento de backlinks e SEO.",
    url: "https://majestic.com/",
    category: "📈 SEO e Marketing",
    keywords: ["backlinks", "seo", "análise", "monitoramento", "marketing"]
},
mention: {
    name: "MENTION",
    title: "Mention - Monitoramento de Marca e Redes Sociais",
    description: "Ferramenta para monitorar menções de marca e redes sociais.",
    url: "https://mention.com/",
    category: "📢 Monitoramento",
    keywords: ["monitoramento", "marca", "redes sociais", "menções", "alerta"]
},
zencastr: {
    name: "ZENCASTR",
    title: "Zencastr - Gravação de Podcasts Remotos",
    description: "Plataforma para gravação remota de podcasts com alta qualidade.",
    url: "https://zencastr.com/",
    category: "🎙️ Podcasts",
    keywords: ["podcast", "gravação", "remoto", "áudio", "qualidade"]
},
animaker: {
    name: "ANIMAKER",
    title: "Animaker - Criação de Vídeos Animados",
    description: "Ferramenta para criação fácil de vídeos animados e apresentações.",
    url: "https://www.animaker.com/",
    category: "🎬 Animação",
    keywords: ["vídeo animado", "animação", "apresentação", "criação", "fácil"]
},
  



// Continuação das ferramentas no mesmo formato solicitado:


      
// (Posso continuar com as ferramentas 42–74 seguindo esse modelo. Deseja que eu prossiga?)

    // Para adicionar novas ferramentas, basta adicionar aqui seguindo o mesmo formato:
    // novaFerramenta: {
    //     name: "NOME CURTO",
    //     title: "Título Completo da Ferramenta",
    //     description: "Descrição detalhada da ferramenta e sua funcionalidade.",
    //     url: "https://url-da-ferramenta.com",
    //     category: "📁 Categoria",
    //     keywords: ["palavra1", "palavra2", "palavra3"]
    // }
};

// Variáveis de paginação
let currentPage = 1;
let filteredTools = [];
let isSearchActive = false;

// Elementos do DOM
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const modalToolName = document.getElementById('modalToolName');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const scriptUrl = document.getElementById('scriptUrl');
const visitToolBtn = document.getElementById('visitToolBtn');

// Elementos da pesquisa
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const searchResults = document.getElementById('searchResults');
const resultsText = document.getElementById('resultsText');
const toolsGrid = document.querySelector('.tools-grid');

// Elementos de navegação
const homeBtn = document.getElementById('homeBtn');
const toolsBtn = document.getElementById('toolsBtn');
const faqBtn = document.getElementById('faqBtn');

// Elementos do FAQ
const faqModalOverlay = document.getElementById('faqModalOverlay');
const closeFaqModal = document.getElementById('closeFaqModal');
const faqItems = document.querySelectorAll('.faq-item');

// Elementos das seções
const heroSection = document.querySelector('.hero-section');
const toolsSection = document.querySelector('.tools-section');

// Função para gerar HTML de uma ferramenta
function generateToolCardHTML(toolId, toolData) {
    return `
        <div class="tool-card" data-tool="${toolId}">
            <h3 class="card-title">${toolData.title}</h3>
            <p class="card-description">${toolData.description}</p>
            <div class="card-footer">
                <span class="tool-link">🔗 Visitar ferramenta</span>
                <span class="tool-category">${toolData.category}</span>
            </div>
        </div>
    `;
}

// Função para renderizar ferramentas com paginação
function renderTools(tools = null, page = 1) {
    const toolsToRender = tools || Object.keys(toolsData);
    const startIndex = (page - 1) * PAGINATION_CONFIG.toolsPerPage;
    const endIndex = startIndex + PAGINATION_CONFIG.toolsPerPage;
    const toolsForPage = toolsToRender.slice(startIndex, endIndex);
    
    // Limpar grid atual
    toolsGrid.innerHTML = '';
    
    // Adicionar ferramentas da página atual
    toolsForPage.forEach(toolId => {
        const toolData = toolsData[toolId];
        if (toolData) {
            toolsGrid.innerHTML += generateToolCardHTML(toolId, toolData);
        }
    });
    
    // Reaplicar event listeners aos novos cards
    applyToolCardListeners();
    
    // Atualizar paginação
    updatePagination(toolsToRender.length, page);
}

// Função para aplicar event listeners aos cards das ferramentas
function applyToolCardListeners() {
    document.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', function() {
            const toolId = this.getAttribute('data-tool');
            const toolData = toolsData[toolId];
            
            if (toolData) {
                // Preencher o modal com os dados da ferramenta
                modalToolName.textContent = toolData.name;
                modalTitle.textContent = toolData.title;
                modalDescription.textContent = toolData.description;
                scriptUrl.value = toolData.url;
                
                // Configurar o botão de visitar ferramenta
                visitToolBtn.onclick = function() {
                    window.open(toolData.url, '_blank');
                };
                
                // Configurar o input para ser clicável e copiar o link
                scriptUrl.onclick = function() {
                    this.select();
                    document.execCommand('copy');
                    
                    // Feedback visual temporário
                    const originalValue = this.value;
                    this.value = 'Link copiado!';
                    setTimeout(() => {
                        this.value = originalValue;
                    }, 1500);
                };
                
                // Mostrar o modal
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
}

// Função para criar controles de paginação
function createPaginationControls() {
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-container';
    paginationContainer.innerHTML = `
        <div class="pagination-info">
        <span id="paginationInfo">Página 1 de 1</span>
    </div>
    <div class="pagination-controls">
        <button id="prevPage" class="pagination-btn" disabled>
            &lt;
        </button>
        <div id="pageNumbers" class="page-numbers"></div>
        <button id="nextPage" class="pagination-btn">
            &gt;
        </button>
    </div>
`;


    
    // Inserir após o grid de ferramentas
    toolsGrid.parentNode.insertBefore(paginationContainer, toolsGrid.nextSibling);
    
    // Adicionar event listeners
    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTools(filteredTools.length > 0 ? filteredTools : null, currentPage);
        }
    });
    
    document.getElementById('nextPage').addEventListener('click', () => {
        const totalPages = Math.ceil((filteredTools.length > 0 ? filteredTools.length : Object.keys(toolsData).length) / PAGINATION_CONFIG.toolsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTools(filteredTools.length > 0 ? filteredTools : null, currentPage);
        }
    });
}

// Função para atualizar controles de paginação
function updatePagination(totalTools, currentPage) {
    const totalPages = Math.ceil(totalTools / PAGINATION_CONFIG.toolsPerPage);
    const startTool = (currentPage - 1) * PAGINATION_CONFIG.toolsPerPage + 1;
    const endTool = Math.min(currentPage * PAGINATION_CONFIG.toolsPerPage, totalTools);
    
    // Atualizar informação da página
    const paginationInfo = document.getElementById('paginationInfo');
    if (paginationInfo) {
        paginationInfo.textContent = `Página ${currentPage} de ${totalPages} (${startTool}-${endTool} de ${totalTools} ferramentas)`;
    }
    
    // Atualizar botões
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    
    if (prevBtn) prevBtn.disabled = currentPage <= 1;
    if (nextBtn) nextBtn.disabled = currentPage >= totalPages;
    
    // Atualizar números das páginas
    updatePageNumbers(currentPage, totalPages);
}

// Função para atualizar números das páginas
function updatePageNumbers(currentPage, totalPages) {
    const pageNumbersContainer = document.getElementById('pageNumbers');
    if (!pageNumbersContainer) return;
    
    pageNumbersContainer.innerHTML = '';
    
    // Lógica para mostrar páginas de forma inteligente
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // Adicionar botão para primeira página se necessário
    if (startPage > 1) {
        addPageButton(1, currentPage === 1);
        if (startPage > 2) {
            addPageEllipsis();
        }
    }
    
    // Adicionar páginas visíveis
    for (let i = startPage; i <= endPage; i++) {
        addPageButton(i, i === currentPage);
    }
    
    // Adicionar botão para última página se necessário
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            addPageEllipsis();
        }
        addPageButton(totalPages, currentPage === totalPages);
    }
}

// Função para adicionar botão de página
function addPageButton(pageNum, isActive) {
    const pageNumbersContainer = document.getElementById('pageNumbers');
    const button = document.createElement('button');
    button.className = `page-number ${isActive ? 'active' : ''}`;
    button.textContent = pageNum;
    button.addEventListener('click', () => {
        currentPage = pageNum;
        renderTools(filteredTools.length > 0 ? filteredTools : null, currentPage);
    });
    pageNumbersContainer.appendChild(button);
}

// Função para adicionar elipses
function addPageEllipsis() {
    const pageNumbersContainer = document.getElementById('pageNumbers');
    const ellipsis = document.createElement('span');
    ellipsis.className = 'page-ellipsis';
    ellipsis.textContent = '...';
    pageNumbersContainer.appendChild(ellipsis);
}

// Função de scroll suave
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Função para ir para o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Navegação do menu
homeBtn.addEventListener('click', function() {
    scrollToTop();
});

toolsBtn.addEventListener('click', function() {
    smoothScrollTo(toolsSection);
});

// Modal FAQ
faqBtn.addEventListener('click', function() {
    faqModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeFaqModal.addEventListener('click', function() {
    faqModalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Fechar modal FAQ clicando fora
faqModalOverlay.addEventListener('click', function(e) {
    if (e.target === faqModalOverlay) {
        faqModalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Funcionalidade do FAQ (expandir/colapsar)
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        
        // Fechar todos os outros itens
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Alternar o item atual
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

// Função de pesquisa atualizada com paginação
function searchTools(query) {
    const searchTerm = query.toLowerCase().trim();
    
    if (searchTerm === '') {
        // Mostrar todas as ferramentas
        isSearchActive = false;
        filteredTools = [];
        currentPage = 1;
        renderTools();
        searchResults.style.display = 'none';
        return;
    }
    
    isSearchActive = true;
    filteredTools = [];
    
    // Procurar por ferramentas que correspondem à pesquisa
    Object.keys(toolsData).forEach(toolId => {
        const tool = toolsData[toolId];
        
        // Verificar se o termo de pesquisa está no título, descrição ou palavras-chave
        const matchesTitle = tool.title.toLowerCase().includes(searchTerm);
        const matchesDescription = tool.description.toLowerCase().includes(searchTerm);
        const matchesKeywords = tool.keywords.some(keyword => 
            keyword.toLowerCase().includes(searchTerm)
        );
        
        if (matchesTitle || matchesDescription || matchesKeywords) {
            filteredTools.push(toolId);
        }
    });
    
    // Resetar para primeira página
    currentPage = 1;
    
    // Renderizar resultados
    if (filteredTools.length > 0) {
        renderTools(filteredTools, currentPage);
        showResultsMessage(filteredTools.length, searchTerm);
    } else {
        renderTools([], 1); // Mostrar página vazia
        showNoResultsMessage(searchTerm);
        // Mostrar algumas ferramentas como sugestões
        const allToolIds = Object.keys(toolsData);
        const randomSuggestions = allToolIds
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        
        randomSuggestions.forEach(toolId => {
            const toolCard = document.querySelector(`[data-tool="${toolId}"]`);
            if (toolCard) {
                toolCard.style.display = 'block';
            }
        });
    }
    
    searchResults.style.display = 'block';
}

// Função para mostrar mensagem de "não encontrado"
function showNoResultsMessage(searchTerm) {
    resultsText.textContent = `Nenhuma ferramenta encontrada para "${searchTerm}". Aqui estão algumas sugestões:`;
    resultsText.className = 'results-text no-results';
}

// Função para mostrar mensagem de resultados
function showResultsMessage(count, searchTerm) {
    if (count === 1) {
        resultsText.textContent = `1 ferramenta encontrada para "${searchTerm}"`;
    } else {
        resultsText.textContent = `${count} ferramentas encontradas para "${searchTerm}"`;
    }
    resultsText.className = 'results-text suggestions';
}

// Event listener para o input de pesquisa
searchInput.addEventListener('input', function() {
    const query = this.value;
    searchTools(query);
    
    // Mostrar/esconder botão de limpar
    if (query.length > 0) {
        clearSearch.style.display = 'flex';
    } else {
        clearSearch.style.display = 'none';
    }
});

// Event listener para o botão de limpar pesquisa
clearSearch.addEventListener('click', function() {
    searchInput.value = '';
    searchInput.focus();
    isSearchActive = false;
    filteredTools = [];
    currentPage = 1;
    renderTools();
    searchResults.style.display = 'none';
    this.style.display = 'none';
});

// Event listener para limpar pesquisa com ESC
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        this.value = '';
        isSearchActive = false;
        filteredTools = [];
        currentPage = 1;
        renderTools();
        searchResults.style.display = 'none';
        clearSearch.style.display = 'none';
        this.blur();
    }
});

// Fechar modal
closeModal.addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Fechar modal clicando fora dele
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Fechar modais com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (faqModalOverlay.classList.contains('active')) {
            faqModalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Inicialização
function initializeApp() {
    // Criar controles de paginação
    createPaginationControls();
    
    // Renderizar primeira página
    renderTools();
    
    // Focar no campo de pesquisa quando a página carrega
    searchInput.focus();
}

// Inicializar quando a página carregar
window.addEventListener('load', initializeApp); 
