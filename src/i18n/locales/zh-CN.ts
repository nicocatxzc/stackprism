export default {
  app: { title: '栈棱镜' },
  theme: {
    light: '浅色',
    dark: '深色',
    auto: '自动',
    toggle: '主题：{label}（点击切换）',
    labelPrefix: '主题：'
  },
  nav: {
    openSettings: '打开设置页',
    copyUrl: '复制当前页 URL',
    redetect: '重新检测',
    scrollTop: '返回顶部'
  },
  state: {
    unsupported: '当前页面不支持检测',
    unsupportedHint: '在普通网页（http:// 或 https://）上重新打开扩展即可。',
    loading: '正在读取后台缓存...',
    detecting: '正在检测当前标签页...',
    noTech: '未检测到明确技术线索',
    noTechHint: '刷新页面后重新打开插件，以便捕获主文档响应头。',
    noCategoryResult: '当前分类没有检测结果',
    noResources: '未抓取到资源。',
    noHeaders: '没有主文档响应头数据',
    noCustomRules: '暂无自定义规则',
    loadingDetail: '正在加载...',
    loadingRaw: '正在请求原始线索...'
  },
  summary: {
    tech: '技术',
    resources: '资源',
    headers: '响应头',
    focus: '重点',
    all: '全部',
    focusTitle: '返回重点列表',
    resourcesTitle: '查看抓取到的资源列表',
    headersTitle: '查看主文档响应头',
    selectCategory: '选择分类'
  },
  count: '{n} 项',
  detail: {
    evidence: '识别依据',
    sources: '来源(点击查看原始数据)',
    correct: '识别不准确，点击纠正',
    confidence: '{level}置信度',
    viewDetail: '查看 {name} 详情',
    openSite: '打开 {name} 官网或仓库',
    viewSource: '查看 {source} 来源的原始数据'
  },
  footer: {
    search: '搜索',
    searchTitle: '网页源代码搜索',
    raw: '原始线索',
    rawTitle: '查看原始线索',
    copyAll: '复制全部',
    copyAllTitle: '复制全部技术栈报告',
    close: '关闭面板',
    downloadRaw: '下载原始线索',
    copyRaw: '复制原始线索'
  },
  search: {
    placeholder: '输入关键词或正则表达式',
    caseSensitive: '区分大小写',
    wholeWord: '全字匹配',
    useRegex: '正则表达式',
    meta: '搜索当前页面 DOM 源码快照。'
  },
  settings: {
    title: 'StackPrism 设置',
    subtitle: '控制识别分类，添加自定义规则，并覆盖弹窗样式。',
    save: '保存设置',
    reset: '恢复默认',
    help: '使用说明',
    github: 'GitHub 仓库',
    toggleSection: '识别开关',
    allOn: '全开',
    allOff: '全关',
    disabledTech: '禁用指定技术',
    disabledTechHint: '每行一个技术名称。名称匹配后不会在结果里显示。',
    customCss: '自定义样式 CSS',
    customCssHint: '保存后会应用到弹窗和设置页。留空则不覆盖样式。',
    customRules: '自定义规则',
    contribute: '提交规则贡献',
    clearForm: '清空表单',
    rulesJson: '规则 JSON',
    importJson: '从 JSON 导入',
    formatJson: '格式化',
    editRule: '编辑此规则',
    deleteRule: '删除此规则',
    form: {
      name: '技术名称',
      namePlaceholder: '例如：MyCMS',
      category: '分类',
      categoryPlaceholder: '例如：网站程序',
      kind: '类型说明',
      kindPlaceholder: '例如：自定义 CMS',
      confidence: '置信度',
      matchType: '匹配方式',
      url: '官网 / 仓库 URL',
      patterns: '匹配规则，每行一个',
      selectors: 'CSS 选择器，每行一个',
      globals: '全局变量，每行一个',
      matchTargets: '匹配范围',
      targets: {
        url: '页面 URL',
        resources: '资源 URL',
        html: 'DOM / 源码',
        headers: '响应头',
        dynamic: '动态资源'
      },
      addRule: '添加规则',
      updateRule: '更新当前规则',
      confidenceHigh: '高',
      confidenceMid: '中',
      confidenceLow: '低',
      matchRegex: '正则表达式',
      matchKeyword: '关键词',
      rulePatterns: '{count} 条匹配规则'
    }
  },
  help: {
    title: 'StackPrism 使用说明',
    openSettings: '打开设置页',
    github: 'GitHub 仓库'
  },
  lang: { label: '语言' }
}
