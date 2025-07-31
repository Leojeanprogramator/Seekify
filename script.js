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
    }
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
                <i class="fas fa-chevron-left"></i> Anterior
            </button>
            <div id="pageNumbers" class="page-numbers"></div>
            <button id="nextPage" class="pagination-btn">
                Próxima <i class="fas fa-chevron-right"></i>
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
