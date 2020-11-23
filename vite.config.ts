import path from 'path'
import { UserConfig } from 'vite'
import voie from 'vite-plugin-voie'
import ViteComponents from 'vite-plugin-components'

const alias = {
  '/~/': path.resolve(__dirname, 'src'),
}

const config: UserConfig = {
  alias,
  plugins: [
    voie({
      // pagesDir: 'src/pages',
      // extensions: ['vue', 'ts'],
      // load index page sync and bundled with the landing page to improve first loading time.
      // feel free to remove if you don't need it
      importMode(path: string) {
        if (path === '/src/pages/index.vue')
          return 'sync'
        return 'async'
      },
    }),
    ViteComponents({
      // currently, vite does not provide an API for plugins to get the config https://github.com/vitejs/vite/issues/738
      // as the `alias` changes the behavior of middlewares, you have to pass it to ViteComponents to do the resolving
      alias,
    }),
  ],
}

export default config
