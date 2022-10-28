import vue from '@vitejs/plugin-vue'

export default {

    root: './src',

    build: {
        outDir: '../dist'
    },

    server: {
        port: 8001
    },

    plugins: [
        vue()
    ]
}