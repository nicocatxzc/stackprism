import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './style.css'
import IssueFeedback from './IssueFeedback.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('IssueFeedback', IssueFeedback)
  }
} satisfies Theme
