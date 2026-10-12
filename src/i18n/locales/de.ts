export default {
  app: { title: 'StackPrism' },
  theme: {
    light: 'Hell',
    dark: 'Dunkel',
    auto: 'Auto',
    toggle: 'Theme: {label} (klicken zum Wechseln)',
    labelPrefix: 'Theme: '
  },
  nav: {
    openSettings: 'Einstellungen öffnen',
    copyUrl: 'Aktuelle Seiten-URL kopieren',
    redetect: 'Neu erkennen',
    scrollTop: 'Nach oben'
  },
  state: {
    unsupported: 'Diese Seite unterstützt keine Erkennung',
    unsupportedHint: 'Öffnen Sie die Erweiterung auf einer normalen Webseite (http:// oder https://).',
    loading: 'Cache wird geladen...',
    detecting: 'Aktuellen Tab wird erkannt...',
    noTech: 'Keine eindeutigen technischen Hinweise gefunden',
    noTechHint: 'Seite neu laden und Plugin erneut öffnen, um Response-Header zu erfassen.',
    noCategoryResult: 'Keine Ergebnisse für diese Kategorie',
    noResources: 'Keine Ressourcen erfasst.',
    noHeaders: 'Keine Response-Header-Daten',
    noCustomRules: 'Keine benutzerdefinierten Regeln',
    loadingDetail: 'Wird geladen...',
    loadingRaw: 'Rohdaten werden abgerufen...'
  },
  summary: {
    tech: 'Technologien',
    resources: 'Ressourcen',
    headers: 'Header',
    focus: 'Wichtig',
    all: 'Alle',
    focusTitle: 'Zur Hauptliste zurückkehren',
    resourcesTitle: 'Ressourcenliste anzeigen',
    headersTitle: 'Response-Header anzeigen',
    selectCategory: 'Kategorie wählen'
  },
  count: '{n} Eintrag/Einträge',
  detail: {
    evidence: 'Erkennungsgrundlage',
    sources: 'Quellen (klicken für Rohdaten)',
    correct: 'Erkennung ungenau, klicken zum Korrigieren',
    confidence: 'Konfidenz: {level}',
    viewDetail: 'Details für {name} anzeigen',
    openSite: 'Website oder Repository von {name} öffnen',
    viewSource: 'Rohdaten von Quelle {source} anzeigen'
  },
  footer: {
    search: 'Suche',
    searchTitle: 'Seitenquelltext durchsuchen',
    raw: 'Rohdaten',
    rawTitle: 'Rohdaten anzeigen',
    copyAll: 'Alle kopieren',
    copyAllTitle: 'Tech-Stack-Bericht kopieren',
    close: 'Panel schließen',
    downloadRaw: 'Rohdaten herunterladen',
    copyRaw: 'Rohdaten kopieren'
  },
  search: {
    placeholder: 'Stichwort oder regulären Ausdruck eingeben',
    caseSensitive: 'Groß-/Kleinschreibung beachten',
    wholeWord: 'Ganzes Wort',
    useRegex: 'Regulärer Ausdruck',
    meta: 'DOM-Quelltext-Snapshot der aktuellen Seite durchsuchen.'
  },
  settings: {
    title: 'StackPrism Einstellungen',
    subtitle: 'Erkennungskategorien steuern, benutzerdefinierte Regeln hinzufügen und Popup-Stil überschreiben.',
    save: 'Speichern',
    reset: 'Zurücksetzen',
    help: 'Hilfe',
    github: 'GitHub-Repository',
    toggleSection: 'Erkennungsschalter',
    allOn: 'Alle ein',
    allOff: 'Alle aus',
    disabledTech: 'Bestimmte Technologien deaktivieren',
    disabledTechHint: 'Ein Name pro Zeile. Diese Technologien werden in den Ergebnissen nicht angezeigt.',
    customCss: 'Benutzerdefiniertes CSS',
    customCssHint: 'Wird nach dem Speichern auf Popup und Einstellungsseite angewendet. Leer lassen = kein Überschreiben.',
    customRules: 'Benutzerdefinierte Regeln',
    contribute: 'Regel beitragen',
    clearForm: 'Formular leeren',
    rulesJson: 'Regeln JSON',
    importJson: 'Aus JSON importieren',
    formatJson: 'Formatieren',
    editRule: 'Diese Regel bearbeiten',
    deleteRule: 'Diese Regel löschen',
    form: {
      name: 'Technologiename',
      namePlaceholder: 'Bsp.: MyCMS',
      category: 'Kategorie',
      categoryPlaceholder: 'Bsp.: CMS',
      kind: 'Typ',
      kindPlaceholder: 'Bsp.: Benutzerdefiniertes CMS',
      confidence: 'Konfidenz',
      matchType: 'Übereinstimmungstyp',
      url: 'Offizielle Website / Repository-URL',
      patterns: 'Regeln (eine pro Zeile)',
      selectors: 'CSS-Selektoren (einer pro Zeile)',
      globals: 'Globale Variablen (eine pro Zeile)',
      matchTargets: 'Übereinstimmungsbereich',
      targets: {
        url: 'Seiten-URL',
        resources: 'Ressourcen-URL',
        html: 'DOM / Quelltext',
        headers: 'Response-Header',
        dynamic: 'Dynamische Ressourcen'
      },
      addRule: 'Regel hinzufügen',
      updateRule: 'Regel aktualisieren',
      confidenceHigh: 'Hoch',
      confidenceMid: 'Mittel',
      confidenceLow: 'Niedrig',
      matchRegex: 'Regulärer Ausdruck',
      matchKeyword: 'Stichwort',
      rulePatterns: '{count} Regel(n)'
    }
  },
  help: {
    title: 'StackPrism Anleitung',
    openSettings: 'Einstellungen öffnen',
    github: 'GitHub-Repository'
  },
  lang: { label: 'Sprache' }
}
