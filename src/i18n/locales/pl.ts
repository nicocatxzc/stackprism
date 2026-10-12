export default {
  app: { title: 'StackPrism' },
  theme: {
    light: 'Jasny',
    dark: 'Ciemny',
    auto: 'Auto',
    toggle: 'Motyw: {label} (kliknij, aby przełączyć)',
    labelPrefix: 'Motyw: '
  },
  nav: {
    openSettings: 'Otwórz ustawienia',
    copyUrl: 'Kopiuj URL bieżącej strony',
    redetect: 'Wykryj ponownie',
    scrollTop: 'Do góry'
  },
  state: {
    unsupported: 'Ta strona nie obsługuje wykrywania',
    unsupportedHint: 'Otwórz rozszerzenie na zwykłej stronie (http:// lub https://).',
    loading: 'Wczytywanie pamięci podręcznej...',
    detecting: 'Wykrywanie bieżącej karty...',
    noTech: 'Nie wykryto technologii',
    noTechHint: 'Odśwież stronę i otwórz wtyczkę ponownie, aby przechwycić nagłówki.',
    noCategoryResult: 'Brak wyników dla tej kategorii',
    noResources: 'Nie przechwycono zasobów.',
    noHeaders: 'Brak danych nagłówków odpowiedzi',
    noCustomRules: 'Brak reguł niestandardowych',
    loadingDetail: 'Wczytywanie...',
    loadingRaw: 'Pobieranie danych surowych...'
  },
  summary: {
    tech: 'Technologie',
    resources: 'Zasoby',
    headers: 'Nagłówki',
    focus: 'Główne',
    all: 'Wszystkie',
    focusTitle: 'Wróć do głównej listy',
    resourcesTitle: 'Pokaż listę zasobów',
    headersTitle: 'Pokaż nagłówki odpowiedzi',
    selectCategory: 'Wybierz kategorię'
  },
  count: '{n} pozycji',
  detail: {
    evidence: 'Dowody wykrywania',
    sources: 'Źródła (kliknij, aby zobaczyć dane surowe)',
    correct: 'Wykrywanie nieprawidłowe, kliknij, aby poprawić',
    confidence: 'Pewność: {level}',
    viewDetail: 'Pokaż szczegóły {name}',
    openSite: 'Otwórz stronę lub repozytorium {name}',
    viewSource: 'Pokaż dane surowe źródła {source}'
  },
  footer: {
    search: 'Szukaj',
    searchTitle: 'Przeszukaj kod źródłowy strony',
    raw: 'Dane surowe',
    rawTitle: 'Pokaż dane surowe',
    copyAll: 'Kopiuj wszystko',
    copyAllTitle: 'Kopiuj raport tech stack',
    close: 'Zamknij panel',
    downloadRaw: 'Pobierz dane surowe',
    copyRaw: 'Kopiuj dane surowe'
  },
  search: {
    placeholder: 'Wpisz słowo kluczowe lub wyrażenie regularne',
    caseSensitive: 'Rozróżniaj wielkość liter',
    wholeWord: 'Całe słowo',
    useRegex: 'Wyrażenie regularne',
    meta: 'Przeszukaj zrzut DOM bieżącej strony.'
  },
  settings: {
    title: 'Ustawienia StackPrism',
    subtitle: 'Zarządzaj kategoriami, dodawaj reguły niestandardowe i nadpisuj styl popup.',
    save: 'Zapisz',
    reset: 'Przywróć',
    help: 'Pomoc',
    github: 'Repozytorium GitHub',
    toggleSection: 'Przełączniki wykrywania',
    allOn: 'Wszystko włączone',
    allOff: 'Wszystko wyłączone',
    disabledTech: 'Wyłącz konkretne technologie',
    disabledTechHint: 'Jedna nazwa na wiersz. Te technologie nie pojawią się w wynikach.',
    customCss: 'Niestandardowe CSS',
    customCssHint: 'Zastosowane po zapisaniu. Puste = bez zmian.',
    customRules: 'Reguły niestandardowe',
    contribute: 'Przekaż regułę',
    clearForm: 'Wyczyść formularz',
    rulesJson: 'Reguły JSON',
    importJson: 'Importuj z JSON',
    formatJson: 'Formatuj',
    editRule: 'Edytuj regułę',
    deleteRule: 'Usuń regułę',
    form: {
      name: 'Nazwa technologii',
      namePlaceholder: 'np.: MyCMS',
      category: 'Kategoria',
      categoryPlaceholder: 'np.: CMS',
      kind: 'Typ',
      kindPlaceholder: 'np.: Niestandardowy CMS',
      confidence: 'Pewność',
      matchType: 'Typ dopasowania',
      url: 'Oficjalna strona / URL repozytorium',
      patterns: 'Reguły (jedna na wiersz)',
      selectors: 'Selektory CSS (jeden na wiersz)',
      globals: 'Zmienne globalne (jedna na wiersz)',
      matchTargets: 'Zakres dopasowania',
      targets: {
        url: 'URL strony',
        resources: 'URL zasobów',
        html: 'DOM / Kod źródłowy',
        headers: 'Nagłówki odpowiedzi',
        dynamic: 'Zasoby dynamiczne'
      },
      addRule: 'Dodaj regułę',
      updateRule: 'Aktualizuj regułę',
      confidenceHigh: 'Wysoka',
      confidenceMid: 'Średnia',
      confidenceLow: 'Niska',
      matchRegex: 'Wyrażenie regularne',
      matchKeyword: 'Słowo kluczowe',
      rulePatterns: '{count} reguł'
    }
  },
  help: {
    title: 'Pomoc StackPrism',
    openSettings: 'Otwórz ustawienia',
    github: 'Repozytorium GitHub'
  },
  lang: { label: 'Język' }
}
