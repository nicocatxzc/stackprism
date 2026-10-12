export default {
  app: { title: 'StackPrism' },
  theme: {
    light: 'ライト',
    dark: 'ダーク',
    auto: '自動',
    toggle: 'テーマ：{label}（クリックで切替）',
    labelPrefix: 'テーマ：'
  },
  nav: {
    openSettings: '設定を開く',
    copyUrl: '現在のページURLをコピー',
    redetect: '再検出',
    scrollTop: 'トップに戻る'
  },
  state: {
    unsupported: 'このページは検出に対応していません',
    unsupportedHint: '通常のWebページ（http:// または https://）で拡張機能を開いてください。',
    loading: 'キャッシュを読み込んでいます...',
    detecting: '現在のタブを検出しています...',
    noTech: '明確な技術的手がかりが見つかりません',
    noTechHint: 'ページを更新してから再度プラグインを開くと、レスポンスヘッダーを取得できます。',
    noCategoryResult: 'このカテゴリに検出結果はありません',
    noResources: 'リソースが取得されませんでした。',
    noHeaders: 'レスポンスヘッダーデータがありません',
    noCustomRules: 'カスタムルールなし',
    loadingDetail: '読み込み中...',
    loadingRaw: '生データを取得しています...'
  },
  summary: {
    tech: '技術',
    resources: 'リソース',
    headers: 'ヘッダー',
    focus: '注目',
    all: 'すべて',
    focusTitle: '注目リストに戻る',
    resourcesTitle: '取得したリソース一覧を表示',
    headersTitle: 'レスポンスヘッダーを表示',
    selectCategory: 'カテゴリを選択'
  },
  count: '{n} 件',
  detail: {
    evidence: '検出根拠',
    sources: 'ソース（クリックで生データを表示）',
    correct: '検出が不正確です。クリックして修正',
    confidence: '信頼度：{level}',
    viewDetail: '{name} の詳細を表示',
    openSite: '{name} の公式サイトまたはリポジトリを開く',
    viewSource: '{source} ソースの生データを表示'
  },
  footer: {
    search: '検索',
    searchTitle: 'ページソースを検索',
    raw: '生データ',
    rawTitle: '生データを表示',
    copyAll: 'すべてコピー',
    copyAllTitle: '技術スタックレポートをコピー',
    close: 'パネルを閉じる',
    downloadRaw: '生データをダウンロード',
    copyRaw: '生データをコピー'
  },
  search: {
    placeholder: 'キーワードまたは正規表現を入力',
    caseSensitive: '大文字小文字を区別',
    wholeWord: '単語全体を検索',
    useRegex: '正規表現',
    meta: '現在のページのDOMソーススナップショットを検索。'
  },
  settings: {
    title: 'StackPrism 設定',
    subtitle: '検出カテゴリの制御、カスタムルールの追加、ポップアップスタイルの上書き。',
    save: '設定を保存',
    reset: 'デフォルトに戻す',
    help: '使い方',
    github: 'GitHub リポジトリ',
    toggleSection: '検出スイッチ',
    allOn: 'すべてON',
    allOff: 'すべてOFF',
    disabledTech: '指定した技術を無効化',
    disabledTechHint: '1行に1つの技術名。名前が一致した場合、結果に表示されません。',
    customCss: 'カスタムCSS',
    customCssHint: '保存後にポップアップと設定ページに適用されます。空白の場合は上書きしません。',
    customRules: 'カスタムルール',
    contribute: 'ルールを提供',
    clearForm: 'フォームをクリア',
    rulesJson: 'ルール JSON',
    importJson: 'JSONからインポート',
    formatJson: 'フォーマット',
    editRule: 'このルールを編集',
    deleteRule: 'このルールを削除',
    form: {
      name: '技術名',
      namePlaceholder: '例：MyCMS',
      category: 'カテゴリ',
      categoryPlaceholder: '例：CMS',
      kind: '種別',
      kindPlaceholder: '例：カスタムCMS',
      confidence: '信頼度',
      matchType: 'マッチ方式',
      url: '公式サイト / リポジトリURL',
      patterns: 'マッチルール（1行に1つ）',
      selectors: 'CSSセレクター（1行に1つ）',
      globals: 'グローバル変数（1行に1つ）',
      matchTargets: 'マッチ範囲',
      targets: {
        url: 'ページURL',
        resources: 'リソースURL',
        html: 'DOM / ソース',
        headers: 'レスポンスヘッダー',
        dynamic: '動的リソース'
      },
      addRule: 'ルールを追加',
      updateRule: 'ルールを更新',
      confidenceHigh: '高',
      confidenceMid: '中',
      confidenceLow: '低',
      matchRegex: '正規表現',
      matchKeyword: 'キーワード',
      rulePatterns: '{count} 件のマッチルール'
    }
  },
  help: {
    title: 'StackPrism 使い方',
    openSettings: '設定を開く',
    github: 'GitHub リポジトリ'
  },
  lang: { label: '言語' }
}
