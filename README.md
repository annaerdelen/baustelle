# Baustelle

Anna's starter template with Nuxt 3 and Sanity v3. 👷‍♀️  
Demo → [baustelle.erdelen.com](https://baustelle.erdelen.com/)

## ● Features

- [Nuxt 3](https://nuxt.com/)
- [Sanity v3](https://sanity.io)
- [Tailwind](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)
- Video Hosting with [Mux](https://www.mux.com/)
- Optimized Images with [Nuxt Image](https://image.nuxt.com/)
- [PNPM](https://pnpm.io/) Workspaces
- Preview Functionality

## ● Getting Started

→ Create a new Sanity Project

```bash
cd studio/
pnpm create sanity@latest
```

- Abort with `ctrl + c` when "Project output path" appears
- Get Project ID with `sanity manage` or `sanity projects list`
- Change ID in `web/.env`, `studio/sanity.config` and `studio/sanity.cli`

→ Install Dependencies

```bash
# From Root
pnpm install
```

→ Start Development Server

```bash
# From Root
# Nuxt → http://localhost:3000
# Sanity → http://localhost:3333
pnpm dev
```

→ Netlify Serverless Functions

```bash
# Install Netlify CLI
# From Root, Select web
# http://localhost:8888
ntl dev
```
