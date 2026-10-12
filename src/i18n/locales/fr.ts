export default {
  app: { title: 'StackPrism' },
  theme: {
    light: 'Clair',
    dark: 'Sombre',
    auto: 'Auto',
    toggle: 'Thème : {label} (cliquer pour changer)',
    labelPrefix: 'Thème : '
  },
  nav: {
    openSettings: 'Ouvrir les paramètres',
    copyUrl: "Copier l'URL de la page",
    redetect: 'Redétecter',
    scrollTop: 'Haut de page'
  },
  state: {
    unsupported: 'Cette page ne prend pas en charge la détection',
    unsupportedHint: "Rouvrez l'extension sur une page web normale (http:// ou https://).",
    loading: 'Chargement du cache...',
    detecting: "Détection de l'onglet en cours...",
    noTech: 'Aucun indice technologique détecté',
    noTechHint: "Actualisez la page puis rouvrez l'extension pour capturer les en-têtes.",
    noCategoryResult: 'Aucun résultat pour cette catégorie',
    noResources: 'Aucune ressource capturée.',
    noHeaders: "Aucune donnée d'en-tête de réponse",
    noCustomRules: 'Aucune règle personnalisée',
    loadingDetail: 'Chargement...',
    loadingRaw: 'Récupération des données brutes...'
  },
  summary: {
    tech: 'Techs',
    resources: 'Ressources',
    headers: 'En-têtes',
    focus: 'Principaux',
    all: 'Tout',
    focusTitle: 'Retour à la liste principale',
    resourcesTitle: 'Afficher la liste des ressources',
    headersTitle: 'Afficher les en-têtes de réponse',
    selectCategory: 'Choisir une catégorie'
  },
  count: '{n} élément(s)',
  detail: {
    evidence: 'Preuves de détection',
    sources: 'Sources (cliquer pour voir les données brutes)',
    correct: 'Détection incorrecte, cliquer pour corriger',
    confidence: 'Confiance : {level}',
    viewDetail: 'Voir les détails de {name}',
    openSite: 'Ouvrir le site ou dépôt de {name}',
    viewSource: 'Voir les données brutes de {source}'
  },
  footer: {
    search: 'Rechercher',
    searchTitle: 'Rechercher dans le source de la page',
    raw: 'Données brutes',
    rawTitle: 'Afficher les données brutes',
    copyAll: 'Tout copier',
    copyAllTitle: 'Copier le rapport de la pile technique',
    close: 'Fermer le panneau',
    downloadRaw: 'Télécharger les données brutes',
    copyRaw: 'Copier les données brutes'
  },
  search: {
    placeholder: 'Entrer un mot-clé ou une expression régulière',
    caseSensitive: 'Respecter la casse',
    wholeWord: 'Mot entier',
    useRegex: 'Expression régulière',
    meta: 'Recherche dans le snapshot DOM de la page.'
  },
  settings: {
    title: 'Paramètres StackPrism',
    subtitle: 'Contrôler les catégories, ajouter des règles personnalisées et surcharger le style.',
    save: 'Enregistrer',
    reset: 'Réinitialiser',
    help: 'Aide',
    github: 'Dépôt GitHub',
    toggleSection: 'Activer/Désactiver les catégories',
    allOn: 'Tout activer',
    allOff: 'Tout désactiver',
    disabledTech: 'Désactiver des technologies',
    disabledTechHint: 'Un nom par ligne. Ces technologies seront masquées dans les résultats.',
    customCss: 'CSS personnalisé',
    customCssHint: 'Appliqué au popup et aux paramètres après enregistrement. Vide = aucun changement.',
    customRules: 'Règles personnalisées',
    contribute: 'Contribuer une règle',
    clearForm: 'Vider le formulaire',
    rulesJson: 'Règles JSON',
    importJson: 'Importer depuis JSON',
    formatJson: 'Formater',
    editRule: 'Modifier cette règle',
    deleteRule: 'Supprimer cette règle',
    form: {
      name: 'Nom de la technologie',
      namePlaceholder: 'Ex. : MyCMS',
      category: 'Catégorie',
      categoryPlaceholder: 'Ex. : CMS',
      kind: 'Type',
      kindPlaceholder: 'Ex. : CMS personnalisé',
      confidence: 'Confiance',
      matchType: 'Type de correspondance',
      url: 'Site officiel / URL du dépôt',
      patterns: 'Règles (une par ligne)',
      selectors: 'Sélecteurs CSS (un par ligne)',
      globals: 'Variables globales (une par ligne)',
      matchTargets: 'Portée de correspondance',
      targets: {
        url: 'URL de la page',
        resources: 'URL des ressources',
        html: 'DOM / Source',
        headers: 'En-têtes',
        dynamic: 'Ressources dynamiques'
      },
      addRule: 'Ajouter la règle',
      updateRule: 'Mettre à jour la règle',
      confidenceHigh: 'Haute',
      confidenceMid: 'Moyenne',
      confidenceLow: 'Faible',
      matchRegex: 'Expression régulière',
      matchKeyword: 'Mot-clé',
      rulePatterns: '{count} règle(s)'
    }
  },
  help: {
    title: 'Guide StackPrism',
    openSettings: 'Ouvrir les paramètres',
    github: 'Dépôt GitHub'
  },
  lang: { label: 'Langue' }
}
