# Currículo online — Izabela Dutra Neves

Landing page do currículo em **Astro + Tailwind CSS 4**, em português (`/`) e inglês (`/en/`).

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site estático em dist/
```

## Editar o conteúdo

Todo o texto fica em `src/data/cv.ts` (objetos `pt` e `en`). Não precisa mexer no layout.

- **Contato**: o site expõe só o LinkedIn (`contact.linkedin`). E-mail e telefone ficam fora do código de propósito.
- **Domínio**: troque `site` em `astro.config.mjs` pela URL final.

## PDF

O botão "Baixar PDF" abre a impressão do navegador com um layout próprio para A4
(cerca de 3 páginas). Escolha "Salvar como PDF".

## Publicar

Vercel, Netlify ou Cloudflare Pages: conecte o repositório, comando `npm run build`, pasta `dist`.
