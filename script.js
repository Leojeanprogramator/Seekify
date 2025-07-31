/* Reset e configurações básicas */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: #000000;
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
}

/* Menu Superior Central */
.top-menu {
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    width: auto;
}

.menu-container {
    display: flex;
    gap: 12px;
    background: rgba(26, 26, 26, 0.95);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    padding: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.menu-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: none;
    color: #ffffff;
    padding: 12px 20px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    outline: none;
}

.menu-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

.menu-btn:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

.menu-btn i {
    font-size: 16px;
    opacity: 0.8;
}

/* Badge Superior Esquerdo */
.top-badge {
    position: fixed;
    top: 30px;
    left: 30px;
    z-index: 1000;
}

.badge-content {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(26, 26, 26, 0.95);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    padding: 12px 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.badge-content i {
    color: #ffd700;
    font-size: 20px;
}

.badge-text {
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
}

.beta-badge {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: #ffffff;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Seção Principal */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 30px 60px;
    position: relative;
}

.container {
    max-width: 1200px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Título Principal */
.main-title {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 40px;
    color: #ffffff;
    letter-spacing: -0.02em;
}

.highlight {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    display: inline-block;
}

.future-room {
    color: #10b981;
    font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
    font-weight: 600;
}

/* Subtítulo */
.subtitle {
    font-size: clamp(1.1rem, 3vw, 1.4rem);
    font-weight: 400;
    color: #a1a1aa;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    opacity: 0.9;
}

/* Efeitos de fundo */
.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
}

/* Seção Ferramentas Online */
.tools-section {
    padding: 80px 30px;
    background: #000000;
    position: relative;
    z-index: 1;
}

.tools-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 60px;
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;
}

.tool-card {
    background: #161616;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 350px;
    justify-self: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.tool-card:hover {
    transform: translateY(-4px);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
}

.tool-card:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 12px;
    line-height: 1.3;
    text-align: center;
}

.card-description {
    font-size: 1rem;
    color: #a1a1aa;
    line-height: 1.6;
    margin-bottom: 24px;
    flex-grow: 1;
    text-align: center;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.tool-link {
    font-size: 0.9rem;
    color: #3b82f6;
    font-weight: 500;
    transition: color 0.3s ease;
}

.tool-link:hover {
    color: #60a5fa;
}

.tool-category {
    font-size: 0.9rem;
    color: #a1a1aa;
    font-weight: 500;
}

/* Responsividade */
@media (max-width: 768px) {
    .top-menu {
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .top-badge {
        top: 20px;
        left: 20px;
    }
    
    .menu-container {
        gap: 8px;
        padding: 6px;
    }
    
    .menu-btn {
        padding: 8px 12px;
        font-size: 12px;
    }
    
    .menu-btn span {
        display: none;
    }
    
    .badge-content {
        padding: 8px 12px;
    }
    
    .badge-text {
        font-size: 14px;
    }
    
    .hero-section {
        padding: 100px 20px 40px;
    }
    
    .tools-section {
        padding: 60px 20px;
    }
    
    .tools-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
    }
}

@media (max-width: 480px) {
    .top-menu {
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .top-badge {
        top: 15px;
        left: 15px;
    }
    
    .main-title {
        font-size: 2rem;
    }
    
    .subtitle {
        font-size: 1rem;
    }
    
    .tools-section {
        padding: 40px 15px;
    }
    
    .tools-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    
    .tool-card {
        padding: 18px;
    }
    
    .card-footer {
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
    }
}

/* Animações */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.main-title {
    animation: fadeInUp 0.8s ease-out;
}

.subtitle {
    animation: fadeInUp 0.8s ease-out 0.2s both;
}

.menu-container,
.badge-content {
    animation: fadeInUp 0.8s ease-out 0.4s both;
}

.tools-title {
    animation: fadeInUp 0.8s ease-out 0.6s both;
}

.tool-card {
    animation: fadeInUp 0.8s ease-out 0.8s both;
}

.tool-card:nth-child(2) {
    animation-delay: 1s;
}

.tool-card:nth-child(3) {
    animation-delay: 1.2s;
}

.tool-card:nth-child(4) {
    animation-delay: 1.4s;
}

.tool-card:nth-child(5) {
    animation-delay: 1.6s;
}

.tool-card:nth-child(6) {
    animation-delay: 1.8s;
}

/* Modal das Ferramentas */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.modal-overlay.active {
    display: flex;
    opacity: 1;
}

.modal-content {
    background: #161616;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 0;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    transform: scale(0.9);
    transition: transform 0.3s ease;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-overlay.active .modal-content {
    transform: scale(1);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tool-badge {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(26, 26, 26, 0.95);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    padding: 8px 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.tool-badge i {
    color: #ffd700;
    font-size: 16px;
}

.tool-badge span {
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
    text-transform: uppercase;
}

.close-modal {
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 24px;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    transition: background 0.3s ease;
    outline: none;
}

.close-modal:hover {
    background: rgba(255, 255, 255, 0.1);
}

.close-modal:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

.modal-body {
    padding: 24px;
}

.modal-body h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 12px;
    text-align: center;
}

.modal-body p {
    font-size: 1rem;
    color: #a1a1aa;
    line-height: 1.6;
    margin-bottom: 32px;
    text-align: center;
}

.script-url-section {
    background: rgba(26, 26, 26, 0.95);
    border-radius: 12px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.script-url-section label {
    display: block;
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 12px;
    font-size: 14px;
}

.script-url-section input {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 12px 16px;
    color: #3b82f6;
    font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s ease;
}

.script-url-section input:focus {
    border-color: #3b82f6;
    outline: none;
}

/* Responsividade do Modal */
@media (max-width: 768px) {
    .modal-content {
        width: 95%;
        margin: 20px;
    }
    
    .modal-body h2 {
        font-size: 1.5rem;
    }
    
    .modal-header {
        padding: 16px;
    }
    
    .modal-body {
        padding: 16px;
    }
}

/* Fallbacks para navegadores mais antigos */
@supports not (backdrop-filter: blur(10px)) {
    .menu-container,
    .badge-content,
    .tool-badge {
        background: rgba(26, 26, 26, 0.98);
    }
    
    .modal-overlay {
        background: rgba(0, 0, 0, 0.9);
    }
}

/* Melhorias de acessibilidade */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* Foco visível para navegação por teclado */
*:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

/* Melhorias de performance */
.tool-card,
.menu-btn,
.close-modal {
    will-change: transform;
} 
