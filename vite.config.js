import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import personSchema from './src/data/person-schema.json'

const injectStructuredData = () => ({
  name: 'inject-structured-data',
  transformIndexHtml(html) {
    return html.replace('<!--structured-data-->', JSON.stringify(personSchema))
  },
})

export default defineConfig({
  plugins: [react(), injectStructuredData()],
})
