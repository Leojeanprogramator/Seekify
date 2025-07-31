// Dados das ferramentas
const toolsData = {
    compressor: {
        name: "COMPRESSOR",
        title: "Compressor de Imagem",
        description: "Ferramenta para reduzir o tamanho de imagens PNG, JPG e outros formatos sem perder qualidade.",
        url: "https://tinypng.com/"
    },
    plagio: {
        name: "VERIFICADOR",
        title: "Verificador de Plágio",
        description: "Ferramenta para verificar se seu texto tem conteúdo duplicado ou plagiado.",
        url: "https://smallseotools.com/plagiarism-checker/"
    },
    pdf: {
        name: "EDITOR PDF",
        title: "Editor de PDF Online",
        description: "Ferramenta para editar documentos PDF diretamente no navegador sem instalar programas.",
        url: "https://www.sejda.com/pt/pdf-editor"
    },
    qr: {
        name: "QR CODE",
        title: "Gerador de QR Code",
        description: "Ferramenta para criar códigos QR personalizados para links, textos e informações.",
        url: "https://www.qr-code-generator.com/"
    },
    timer: {
        name: "TEMPORIZADOR",
        title: "Temporizador Online",
        description: "Ferramenta para cronômetro e alarme online para gerenciar seu tempo de estudo.",
        url: "https://timer.onlineclock.net/"
    },
    logo: {
        name: "CRIADOR LOGOS",
        title: "Criador de Logos",
        description: "Ferramenta para design logos profissionais gratuitamente com ferramentas online.",
        url: "https://www.canva.com/logos/"
    }
};

// Elementos do DOM
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const modalToolName = document.getElementById('modalToolName');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const scriptUrl = document.getElementById('scriptUrl');

// Adicionar event listeners aos cards das ferramentas
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
            
            // Mostrar o modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
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

// Fechar modal com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}); 
