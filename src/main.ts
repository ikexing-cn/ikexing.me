import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import 'uno.css'
import '~/assets/css/main.css'
import '@unocss/reset/tailwind.css'

export const createApp = ViteSSG(App, { routes: setupLayouts(generatedRoutes) })
