export default {
  app: { title: 'StackPrism' },
  theme: {
    light: 'Světlý',
    dark: 'Tmavý',
    auto: 'Auto',
    toggle: 'Motiv: {label} (klikněte pro přepnutí)',
    labelPrefix: 'Motiv: '
  },
  nav: {
    openSettings: 'Otevřít nastavení',
    copyUrl: 'Kopírovat URL aktuální stránky',
    redetect: 'Rozpoznat znovu',
    scrollTop: 'Nahoru'
  },
  state: {
    unsupported: 'Tato stránka nepodporuje detekci',
    unsupportedHint: 'Otevřete rozšíření na běžné webové stránce (http:// nebo https://).',
    loading: 'Načítání mezipaměti...',
    detecting: 'Detekce aktuálního panelu...',
    noTech: 'Nebyly nalezeny žádné technologické stopy',
    noTechHint: 'Obnovte stránku a znovu otevřete plugin pro zachycení hlaviček odpovědi.',
    noCategoryResult: 'Pro tuto kategorii nejsou žádné výsledky',
    noResources: 'Nebyly zachyceny žádné zdroje.',
    noHeaders: 'Žádná data hlaviček odpovědi',
    noCustomRules: 'Žádná vlastní pravidla',
    loadingDetail: 'Načítání...',
    loadingRaw: 'Načítání surových dat...'
  },
  summary: {
    tech: 'Technologie',
    resources: 'Zdroje',
    headers: 'Hlavičky',
    focus: 'Hlavní',
    all: 'Vše',
    focusTitle: 'Zpět na hlavní seznam',
    resourcesTitle: 'Zobrazit seznam zdrojů',
    headersTitle: 'Zobrazit hlavičky odpovědi',
    selectCategory: 'Vybrat kategorii'
  },
  count: '{n} položek',
  detail: {
    evidence: 'Důkazy detekce',
    sources: 'Zdroje (klikněte pro surová data)',
    correct: 'Detekce nepřesná, klikněte pro opravu',
    confidence: 'Spolehlivost: {level}',
    viewDetail: 'Zobrazit detaily {name}',
    openSite: 'Otevřít web nebo repozitář {name}',
    viewSource: 'Zobrazit surová data zdroje {source}'
  },
  footer: {
    search: 'Hledat',
    searchTitle: 'Prohledat zdrojový kód stránky',
    raw: 'Surová data',
    rawTitle: 'Zobrazit surová data',
    copyAll: 'Kopírovat vše',
    copyAllTitle: 'Kopírovat report tech stack',
    close: 'Zavřít panel',
    downloadRaw: 'Stáhnout surová data',
    copyRaw: 'Kopírovat surová data'
  },
  search: {
    placeholder: 'Zadejte klíčové slovo nebo regulární výraz',
    caseSensitive: 'Rozlišovat velikost',
    wholeWord: 'Celé slovo',
    useRegex: 'Regulární výraz',
    meta: 'Prohledat snapshot DOM aktuální stránky.'
  },
  settings: {
    title: 'Nastavení StackPrism',
    subtitle: 'Spravujte kategorie, přidejte vlastní pravidla a upravte styl popup.',
    save: 'Uložit',
    reset: 'Obnovit',
    help: 'Nápověda',
    github: 'GitHub repozitář',
    toggleSection: 'Přepínače detekce',
    allOn: 'Vše zapnuto',
    allOff: 'Vše vypnuto',
    disabledTech: 'Zakázat konkrétní technologie',
    disabledTechHint: 'Jeden název na řádek. Tyto technologie se v růzledech nezobrazí.',
    customCss: 'Vlastní CSS',
    customCssHint: 'Po uložení se aplikuje na popup a nastavení. Prázdné = beze změny.',
    customRules: 'Vlastní pravidla',
    contribute: 'Přispět pravidlem',
    clearForm: 'Vyčistit formulář',
    rulesJson: 'Pravidla JSON',
    importJson: 'Importovat z JSON',
    formatJson: 'Formátovat',
    editRule: 'Upravit pravidlo',
    deleteRule: 'Smazat pravidlo',
    form: {
      name: 'Název technologie',
      namePlaceholder: 'Např.: MyCMS',
      category: 'Kategorie',
      categoryPlaceholder: 'Např.: CMS',
      kind: 'Typ',
      kindPlaceholder: 'Např.: Vlastní CMS',
      confidence: 'Spolehlivost',
      matchType: 'Typ shody',
      url: 'Oficiální web / URL repozitáře',
      patterns: 'Pravidla (jedno na řádek)',
      selectors: 'CSS selektory (jeden na řádek)',
      globals: 'Globální proměnné (jedna na řádek)',
      matchTargets: 'Rozsah shody',
      targets: {
        url: 'URL stránky',
        resources: 'URL zdrojů',
        html: 'DOM / Zdrojový kód',
        headers: 'Hlavičky odpovědi',
        dynamic: 'Dynamické zdroje'
      },
      addRule: 'Přidat pravidlo',
      updateRule: 'Aktualizovat pravidlo',
      confidenceHigh: 'Vysoká',
      confidenceMid: 'Střední',
      confidenceLow: 'Nízká',
      matchRegex: 'Regulární výraz',
      matchKeyword: 'Klíčové slovo',
      rulePatterns: '{count} pravidel'
    }
  },
  help: {
    title: 'Nápověda StackPrism',
    openSettings: 'Otevřít nastavení',
    github: 'GitHub repozitář'
  },
  lang: { label: 'Jazyk' }
}
