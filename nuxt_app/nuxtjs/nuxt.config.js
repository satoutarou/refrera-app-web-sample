export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  manifest: {
    name: 'ref-rela公式APP',      // アプリの名称
    short_name: 'ref-rela',    // ホーム画面に表示される名称
    display: 'standalone',     // 表示モード  'fullscreen' 'standalone' 'minimal-ui' 'browser'
    theme_color: '#ff4a93',    // アプリケーションの既定のテーマ色を定義
    background_color: '#ffdce6',  // 背景の色
    lang: 'ja',                // 言語
    start_url: '/?mode=pwa',   // アイコンから起動した時のURL
    icons: [
      {
        src: "static/icon.png",
        sizes: "512x512",
        type: "image/png",
      }
    ],
  },
}
