export default {
  app: { title: 'StackPrism' },
  theme: {
    light: 'Claro',
    dark: 'Escuro',
    auto: 'Auto',
    toggle: 'Tema: {label} (clique para alternar)',
    labelPrefix: 'Tema: '
  },
  nav: {
    openSettings: 'Abrir configurações',
    copyUrl: 'Copiar URL da página atual',
    redetect: 'Detectar novamente',
    scrollTop: 'Ir ao topo'
  },
  state: {
    unsupported: 'Esta página não suporta detecção',
    unsupportedHint: 'Reabra a extensão em uma página web normal (http:// ou https://).',
    loading: 'Carregando cache...',
    detecting: 'Detectando aba atual...',
    noTech: 'Nenhum indício tecnológico encontrado',
    noTechHint: 'Atualize a página e reabra o plugin para capturar os cabeçalhos de resposta.',
    noCategoryResult: 'Nenhum resultado nesta categoria',
    noResources: 'Nenhum recurso capturado.',
    noHeaders: 'Sem dados de cabeçalho de resposta',
    noCustomRules: 'Nenhuma regra personalizada',
    loadingDetail: 'Carregando...',
    loadingRaw: 'Obtendo dados brutos...'
  },
  summary: {
    tech: 'Tecnologias',
    resources: 'Recursos',
    headers: 'Cabeçalhos',
    focus: 'Destaques',
    all: 'Todos',
    focusTitle: 'Voltar à lista principal',
    resourcesTitle: 'Ver lista de recursos',
    headersTitle: 'Ver cabeçalhos de resposta',
    selectCategory: 'Selecionar categoria'
  },
  count: '{n} item(ns)',
  detail: {
    evidence: 'Evidências de detecção',
    sources: 'Fontes (clique para ver dados brutos)',
    correct: 'Detecção incorreta, clique para corrigir',
    confidence: 'Confiança: {level}',
    viewDetail: 'Ver detalhes de {name}',
    openSite: 'Abrir site ou repositório de {name}',
    viewSource: 'Ver dados brutos da fonte {source}'
  },
  footer: {
    search: 'Pesquisar',
    searchTitle: 'Pesquisar no código-fonte da página',
    raw: 'Dados brutos',
    rawTitle: 'Ver dados brutos',
    copyAll: 'Copiar tudo',
    copyAllTitle: 'Copiar relatório do tech stack',
    close: 'Fechar painel',
    downloadRaw: 'Baixar dados brutos',
    copyRaw: 'Copiar dados brutos'
  },
  search: {
    placeholder: 'Digite uma palavra-chave ou expressão regular',
    caseSensitive: 'Diferenciar maiúsculas/minúsculas',
    wholeWord: 'Palavra inteira',
    useRegex: 'Expressão regular',
    meta: 'Pesquisa no snapshot do DOM da página atual.'
  },
  settings: {
    title: 'Configurações StackPrism',
    subtitle: 'Controle categorias de detecção, adicione regras personalizadas e substitua o estilo do popup.',
    save: 'Salvar',
    reset: 'Redefinir',
    help: 'Ajuda',
    github: 'Repositório GitHub',
    toggleSection: 'Chaves de detecção',
    allOn: 'Ativar tudo',
    allOff: 'Desativar tudo',
    disabledTech: 'Desativar tecnologias específicas',
    disabledTechHint: 'Um nome por linha. Essas tecnologias não serão exibidas nos resultados.',
    customCss: 'CSS personalizado',
    customCssHint: 'Aplicado ao popup e à página de configurações após salvar. Vazio = sem substituição.',
    customRules: 'Regras personalizadas',
    contribute: 'Contribuir com regra',
    clearForm: 'Limpar formulário',
    rulesJson: 'Regras JSON',
    importJson: 'Importar de JSON',
    formatJson: 'Formatar',
    editRule: 'Editar esta regra',
    deleteRule: 'Excluir esta regra',
    form: {
      name: 'Nome da tecnologia',
      namePlaceholder: 'Ex.: MyCMS',
      category: 'Categoria',
      categoryPlaceholder: 'Ex.: CMS',
      kind: 'Tipo',
      kindPlaceholder: 'Ex.: CMS personalizado',
      confidence: 'Confiança',
      matchType: 'Tipo de correspondência',
      url: 'Site oficial / URL do repositório',
      patterns: 'Regras (uma por linha)',
      selectors: 'Seletores CSS (um por linha)',
      globals: 'Variáveis globais (uma por linha)',
      matchTargets: 'Escopo de correspondência',
      targets: {
        url: 'URL da página',
        resources: 'URL dos recursos',
        html: 'DOM / Código-fonte',
        headers: 'Cabeçalhos de resposta',
        dynamic: 'Recursos dinâmicos'
      },
      addRule: 'Adicionar regra',
      updateRule: 'Atualizar regra',
      confidenceHigh: 'Alta',
      confidenceMid: 'Média',
      confidenceLow: 'Baixa',
      matchRegex: 'Expressão regular',
      matchKeyword: 'Palavra-chave',
      rulePatterns: '{count} regra(s)'
    }
  },
  help: {
    title: 'Guia StackPrism',
    openSettings: 'Abrir configurações',
    github: 'Repositório GitHub'
  },
  lang: { label: 'Idioma' }
}
