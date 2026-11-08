import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages 项目站点部署在 /<repo>/ 子路径下，需要对应调整 base，
// 否则 /assets/* 会指向域名根目录导致白屏。
// 本地开发保持 '/'，CI（GitHub Actions）构建时自动切换到 '/chaiAI/'。
// 部署地址：https://ricky709394.github.io/chaiAI/
const repoName = 'chaiAI'
const pagesBase = process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/'

export default defineConfig({
  base: process.env.VITE_BASE || pagesBase,
  plugins: [react(), tailwindcss()],
})
