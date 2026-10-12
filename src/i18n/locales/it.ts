export default {
  app: { title: 'StackPrism' },
  theme: {
    light: 'Chiaro',
    dark: 'Scuro',
    auto: 'Auto',
    toggle: 'Tema: {label} (clicca per cambiare)',
    labelPrefix: 'Tema: '
  },
  nav: {
    openSettings: 'Apri impostazioni',
    copyUrl: "Copia l'URL della pagina",
    redetect: 'Rileva di nuovo',
    scrollTop: 'Torna su'
  },
  state: {
    unsupported: 'Questa pagina non supporta il rilevamento',
    unsupportedHint: "Riapri l'estensione su una pagina web normale (http:// o https://).",
    loading: 'Caricamento cache...',
    detecting: 'Rilevamento scheda in corso...',
    noTech: 'Nessun indizio tecnologico rilevato',
    noTechHint: 'Aggiorna la pagina e riapri il plugin per acquisire gli header di risposta.',
    noCategoryResult: 'Nessun risultato per questa categoria',
    noResources: 'Nessuna risorsa acquisita.',
    noHeaders: 'Nessun dato header di risposta',
    noCustomRules: 'Nessuna regola personalizzata',
    loadingDetail: 'Caricamento...',
    loadingRaw: 'Recupero dati grezzi...'
  },
  summary: {
    tech: 'Tecnologie',
    resources: 'Risorse',
    headers: 'Header',
    focus: 'Principali',
    all: 'Tutti',
    focusTitle: 'Torna alla lista principale',
    resourcesTitle: 'Mostra lista risorse',
    headersTitle: 'Mostra header di risposta',
    selectCategory: 'Seleziona categoria'
  },
  count: '{n} elemento/i',
  detail: {
    evidence: 'Evidenze di rilevamento',
    sources: 'Fonti (clicca per i dati grezzi)',
    correct: 'Rilevamento errato, clicca per correggere',
    confidence: 'Confidenza: {level}',
    viewDetail: 'Vedi dettagli di {name}',
    openSite: 'Apri sito o repository di {name}',
    viewSource: 'Vedi dati grezzi della fonte {source}'
  },
  footer: {
    search: 'Cerca',
    searchTitle: 'Cerca nel sorgente della pagina',
    raw: 'Dati grezzi',
    rawTitle: 'Mostra dati grezzi',
    copyAll: 'Copia tutto',
    copyAllTitle: 'Copia report tech stack',
    close: 'Chiudi pannello',
    downloadRaw: 'Scarica dati grezzi',
    copyRaw: 'Copia dati grezzi'
  },
  search: {
    placeholder: 'Inserisci parola chiave o espressione regolare',
    caseSensitive: 'Maiuscole/minuscole',
    wholeWord: 'Parola intera',
    useRegex: 'Espressione regolare',
    meta: 'Cerca nello snapshot DOM della pagina.'
  },
  settings: {
    title: 'Impostazioni StackPrism',
    subtitle: 'Controlla le categorie, aggiungi regole personalizzate e sovrascrivi lo stile.',
    save: 'Salva',
    reset: 'Ripristina',
    help: 'Aiuto',
    github: 'Repository GitHub',
    toggleSection: 'Interruttori rilevamento',
    allOn: 'Tutti ON',
    allOff: 'Tutti OFF',
    disabledTech: 'Disabilita tecnologie specifiche',
    disabledTechHint: 'Un nome per riga. Queste tecnologie non verranno mostrate nei risultati.',
    customCss: 'CSS personalizzato',
    customCssHint: 'Applicato al popup e alle impostazioni dopo il salvataggio. Vuoto = nessuna sovrascrittura.',
    customRules: 'Regole personalizzate',
    contribute: 'Contribuisci regola',
    clearForm: 'Pulisci modulo',
    rulesJson: 'Regole JSON',
    importJson: 'Importa da JSON',
    formatJson: 'Formatta',
    editRule: 'Modifica regola',
    deleteRule: 'Elimina regola',
    form: {
      name: 'Nome tecnologia',
      namePlaceholder: 'Es.: MyCMS',
      category: 'Categoria',
      categoryPlaceholder: 'Es.: CMS',
      kind: 'Tipo',
      kindPlaceholder: 'Es.: CMS personalizzato',
      confidence: 'Confidenza',
      matchType: 'Tipo corrispondenza',
      url: 'Sito ufficiale / URL repository',
      patterns: 'Regole (una per riga)',
      selectors: 'Selettori CSS (uno per riga)',
      globals: 'Variabili globali (una per riga)',
      matchTargets: 'Ambito corrispondenza',
      targets: {
        url: 'URL pagina',
        resources: 'URL risorse',
        html: 'DOM / Sorgente',
        headers: 'Header risposta',
        dynamic: 'Risorse dinamiche'
      },
      addRule: 'Aggiungi regola',
      updateRule: 'Aggiorna regola',
      confidenceHigh: 'Alta',
      confidenceMid: 'Media',
      confidenceLow: 'Bassa',
      matchRegex: 'Espressione regolare',
      matchKeyword: 'Parola chiave',
      rulePatterns: '{count} regola/e'
    }
  },
  help: {
    title: 'Guida StackPrism',
    openSettings: 'Apri impostazioni',
    github: 'Repository GitHub'
  },
  lang: { label: 'Lingua' }
}
