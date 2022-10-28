import { version } from './package.json'
import vue from '@vitejs/plugin-vue'

export default {

    root: './src',
    publicDir: '../public',
    base: './',

    build: {
        outDir: '../dist/' + version
    },

    server: {
        port: 8001
    },

    plugins: [
        vue()
    ]
}