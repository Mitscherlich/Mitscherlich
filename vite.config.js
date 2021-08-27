import Vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import Markdown from 'vite-plugin-md'
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    legacy({ targets: ['defaults', 'not IE 11'] }),
    Vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown(),
    VitePWA({
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png'
      ],
      manifest: {
        name: 'Mitscherlich',
        short_name: 'Mitscherlich',
        description: 'My personal interactive resume',
        theme_color: '#f7f7f7',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
}
