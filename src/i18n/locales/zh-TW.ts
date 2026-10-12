export default {
  app: { title: '棧稜鏡' },
  theme: {
    light: '淺色',
    dark: '深色',
    auto: '自動',
    toggle: '主題：{label}（點擊切換）',
    labelPrefix: '主題：'
  },
  nav: {
    openSettings: '開啟設定頁',
    copyUrl: '複製目前頁面 URL',
    redetect: '重新偵測',
    scrollTop: '回到頂部'
  },
  state: {
    unsupported: '目前頁面不支援偵測',
    unsupportedHint: '在一般網頁（http:// 或 https://）上重新開啟擴充功能即可。',
    loading: '正在讀取背景快取...',
    detecting: '正在偵測目前分頁...',
    noTech: '未偵測到明確技術線索',
    noTechHint: '重新整理頁面後再開啟外掛，以便擷取主文件回應標頭。',
    noCategoryResult: '目前分類沒有偵測結果',
    noResources: '未擷取到資源。',
    noHeaders: '沒有主文件回應標頭資料',
    noCustomRules: '暫無自訂規則',
    loadingDetail: '正在載入...',
    loadingRaw: '正在請求原始線索...'
  },
  summary: {
    tech: '技術',
    resources: '資源',
    headers: '回應標頭',
    focus: '重點',
    all: '全部',
    focusTitle: '返回重點列表',
    resourcesTitle: '查看擷取到的資源列表',
    headersTitle: '查看主文件回應標頭',
    selectCategory: '選擇分類'
  },
  count: '{n} 項',
  detail: {
    evidence: '識別依據',
    sources: '來源（點擊查看原始資料）',
    correct: '識別不準確，點擊糾正',
    confidence: '{level}信賴度',
    viewDetail: '查看 {name} 詳情',
    openSite: '開啟 {name} 官網或倉庫',
    viewSource: '查看 {source} 來源的原始資料'
  },
  footer: {
    search: '搜尋',
    searchTitle: '網頁原始碼搜尋',
    raw: '原始線索',
    rawTitle: '查看原始線索',
    copyAll: '複製全部',
    copyAllTitle: '複製全部技術棧報告',
    close: '關閉面板',
    downloadRaw: '下載原始線索',
    copyRaw: '複製原始線索'
  },
  search: {
    placeholder: '輸入關鍵詞或正規表示式',
    caseSensitive: '區分大小寫',
    wholeWord: '全字匹配',
    useRegex: '正規表示式',
    meta: '搜尋目前頁面 DOM 原始碼快照。'
  },
  settings: {
    title: 'StackPrism 設定',
    subtitle: '控制識別分類，新增自訂規則，並覆蓋彈窗樣式。',
    save: '儲存設定',
    reset: '還原預設',
    help: '使用說明',
    github: 'GitHub 倉庫',
    toggleSection: '識別開關',
    allOn: '全開',
    allOff: '全關',
    disabledTech: '停用指定技術',
    disabledTechHint: '每行一個技術名稱。名稱匹配後不會在結果裡顯示。',
    customCss: '自訂樣式 CSS',
    customCssHint: '儲存後會套用到彈窗和設定頁。留空則不覆蓋樣式。',
    customRules: '自訂規則',
    contribute: '提交規則貢獻',
    clearForm: '清空表單',
    rulesJson: '規則 JSON',
    importJson: '從 JSON 匯入',
    formatJson: '格式化',
    editRule: '編輯此規則',
    deleteRule: '刪除此規則',
    form: {
      name: '技術名稱',
      namePlaceholder: '例如：MyCMS',
      category: '分類',
      categoryPlaceholder: '例如：網站程式',
      kind: '類型說明',
      kindPlaceholder: '例如：自訂 CMS',
      confidence: '信賴度',
      matchType: '匹配方式',
      url: '官網 / 倉庫 URL',
      patterns: '匹配規則，每行一個',
      selectors: 'CSS 選擇器，每行一個',
      globals: '全域變數，每行一個',
      matchTargets: '匹配範圍',
      targets: {
        url: '頁面 URL',
        resources: '資源 URL',
        html: 'DOM / 原始碼',
        headers: '回應標頭',
        dynamic: '動態資源'
      },
      addRule: '新增規則',
      updateRule: '更新目前規則',
      confidenceHigh: '高',
      confidenceMid: '中',
      confidenceLow: '低',
      matchRegex: '正規表示式',
      matchKeyword: '關鍵詞',
      rulePatterns: '{count} 條匹配規則'
    }
  },
  help: {
    title: 'StackPrism 使用說明',
    openSettings: '開啟設定頁',
    github: 'GitHub 倉庫'
  },
  lang: { label: '語言' }
}
