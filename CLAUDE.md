# Currículo online — Izabela Dutra Neves

Landing page estática do currículo em **Astro 7 + Tailwind CSS 4**, em português (`/`) e inglês (`/en/`).

## Comandos

```bash
npm install       # primeira vez
npm run dev       # http://localhost:4321/curriculo/
npm run build     # gera o site estático em dist/
npm run preview   # serve o build localmente
```

Não há testes nem linter. Valide mudanças com `npm run build` e conferindo a página no navegador (PT e EN, e a impressão).

## Estrutura

- `src/data/cv.ts`: **todo o conteúdo** (objetos `pt` e `en`). Para mudar texto, edite só este arquivo. Mantenha PT e EN sempre em paridade.
- `src/components/Cv.astro`: layout único do currículo, usado pelas duas línguas (prop `lang`).
- `src/layouts/Base.astro`: `<head>`, meta tags, canonical, hreflang e favicon.
- `src/pages/index.astro` e `src/pages/en/index.astro`: só escolhem o idioma.
- `src/styles/global.css`: tokens de cor/fonte (`@theme`) e o bloco `@media print`.

## Convenções e cuidados

- **Base path**: o site é servido em `/curriculo/` (`base` em `astro.config.mjs`). Links e assets internos devem usar `import.meta.env.BASE_URL` (veja favicon e o botão de idioma). Nunca use `href="/..."` absoluto.
- **Contato**: só o LinkedIn é público. E-mail e telefone ficam fora do código de propósito; não adicione.
- **Cores**: vermelho (`accent`) transmite algo negativo em listas; para tags/chips use azul (`sky`, `sky-soft`). O vermelho fica só em detalhes pontuais (pin, avião, barras).
- **Países em destaque**: cada item de experiência tem `country` (destaque) e `city` (pode ser vazio).
- **Duração**: EUA = 8 meses no total; Coreia = 6 meses no total (já no campo `period`). "+1 ano no exterior" continua válido (14 meses).
- **Impressão/PDF**: o botão "Baixar PDF" usa `window.print()` com layout A4 próprio (cerca de 3 páginas). Ao criar uma cor de fundo nova, confira a regra equivalente em `@media print` no `global.css` (como `.bg-accent-soft, .bg-sky-soft`).
- Textos em português do Brasil, tom profissional; o nome da candidata aparece também em coreano (`nameKr`).

## Deploy

- Repositório: https://github.com/Izabela-DNeves/curriculo (público, branch `main`).
- Site: https://izabela-dneves.github.io/curriculo/ (EN em `/en/`).
- GitHub Actions (`.github/workflows/deploy.yml`) faz build e publica no GitHub Pages a cada push na `main`.
- Se mudar o nome do repositório ou usar domínio próprio, ajuste `site` e `base` em `astro.config.mjs`.
- A pasta `Claude outputs/` é local e está no `.gitignore`.
- O `gh` guarda duas contas (`Izabela-DNeves` e `mateusneves`); confira com `gh auth status` qual está ativa antes de dar push.
