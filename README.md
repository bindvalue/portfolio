# BindValue Portfolio - Versão HTML/CSS/JS

## 📁 Estrutura de Pastas

```
bindvalue-html/
├── index.html          # Página principal
├── favicon.ico         # Ícone do site
├── README.md          # Esta documentação
├── css/
│   └── style.css      # Estilos principais
├── js/
│   └── script.js      # JavaScript principal
└── images/
    ├── bindvalue-logo.png
    ├── ai-chatbot.png
    ├── digital-signature.png
    └── whatsapp-automation.jpg
```

## 🚀 Como Publicar

### 1. Upload para Servidor
- Faça upload de **todos os arquivos** mantendo a estrutura de pastas
- Certifique-se de que o arquivo `index.html` esteja na raiz do seu domínio

### 2. Configuração do Servidor
- **Apache**: Funciona diretamente, sem configuração adicional
- **Nginx**: Funciona diretamente, sem configuração adicional
- **Hospedagem Compartilhada**: Simplesmente faça upload dos arquivos

### 3. Teste
- Acesse seu domínio para verificar se o site está carregando
- Teste os links do WhatsApp
- Verifique a responsividade em diferentes dispositivos

## ✨ Funcionalidades Implementadas

### 🎨 Design
- ✅ **Responsivo**: Mobile-first, adaptado para tablet e desktop
- ✅ **Paleta de Cores**: Baseada no site oficial da BindValue
- ✅ **Tipografia**: Fonte Inter para melhor legibilidade
- ✅ **Animações**: Transições suaves e efeitos hover

### 🔧 Funcionalidades
- ✅ **Logo com Fallback**: Mostra "BV" se a imagem não carregar
- ✅ **Links WhatsApp**: Todos os botões direcionam para WhatsApp (31983297433)
- ✅ **Navegação Suave**: Scroll suave entre seções
- ✅ **Alternância de Serviços**: Toggle entre IA e Assinatura Digital
- ✅ **Mensagens Personalizadas**: Cada botão tem mensagem específica

### 📱 Otimizações
- ✅ **Performance**: CSS e JS otimizados
- ✅ **SEO**: Meta tags e estrutura semântica
- ✅ **Acessibilidade**: Contraste adequado e navegação por teclado
- ✅ **Cross-browser**: Compatível com todos os navegadores modernos

## 📞 Contatos WhatsApp

Todos os botões de contato direcionam para o WhatsApp com mensagens personalizadas:

- **Demonstração Gratuita**: Solicita demonstração dos serviços
- **Automatizar Negócio**: Interesse em IA para WhatsApp
- **Assinatura Digital**: Interesse em assinatura digital
- **Falar com Especialista**: Contato geral
- **Planos Específicos**: Mensagem personalizada por plano

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, Gradientes, Backdrop-filter
- **JavaScript ES6+**: Funcionalidades interativas
- **Google Fonts**: Fonte Inter
- **SVG Icons**: Ícones vetoriais leves

## 📊 Planos e Valores

### Automação WhatsApp com IA
- **Inicial**: R$ 159,99
- **Avançado**: R$ 199,90 (Mais Popular)
- **Premium**: R$ 229,90
- **Customizado**: Sob consulta

### Assinatura Digital
- **Completo**: R$ 299,90

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no arquivo `css/style.css`:
- Cor primária: `#f97316` (laranja)
- Cor de destaque: `#fbbf24` (amarelo)
- Gradiente de fundo: `#1e1b4b`, `#7c3aed`, `#1e40af`

### Alterar Conteúdo
- **Textos**: Edite diretamente no `index.html`
- **Imagens**: Substitua os arquivos na pasta `images/`
- **Valores**: Atualize os preços no HTML

### Alterar WhatsApp
No arquivo `js/script.js`, altere o número:
```javascript
const whatsappUrl = `https://wa.me/5531983297433?text=${encodeURIComponent(message)}`;
```

## 📈 Analytics (Opcional)

O arquivo JavaScript inclui funções para tracking de eventos. Para implementar analytics:

1. Adicione seu código de tracking (Google Analytics, etc.)
2. Descomente as funções de tracking no `script.js`
3. Configure os eventos conforme necessário

## 🐛 Solução de Problemas

### Logo não aparece
- Verifique se o arquivo `images/bindvalue-logo.png` existe
- O fallback "BV" aparecerá automaticamente se houver erro

### Links do WhatsApp não funcionam
- Verifique se o número está correto no JavaScript
- Teste em diferentes dispositivos

### Site não carrega
- Verifique se todos os arquivos foram enviados
- Confirme se a estrutura de pastas está correta
- Verifique permissões dos arquivos no servidor

## 📞 Suporte

Para dúvidas ou modificações, entre em contato através do WhatsApp configurado no site.

---

**BindValue** - Conectando Tecnologia e Valor Humano

