# Propulsão em Cliques

Plataforma interativa de divulgação científica sobre motores turbojato, desenvolvida como projeto de extensão universitária da UFABC. Alinhado ao ODS 4 — Educação de Qualidade.

## Como rodar

```bash
cd propulsao-em-cliques
npm install
npm run dev
```

O site estará disponível em `http://localhost:5173`

## Estrutura do projeto

```
src/
├── components/
│   └── Navbar.jsx         # Barra de navegação responsiva
├── pages/
│   ├── Home.jsx           # Página inicial com hero e cards dos módulos
│   ├── Modulo1.jsx        # "O que é um motor turbojato?" — diagrama interativo + Ciclo de Brayton
│   ├── Modulo2.jsx        # Simulador interativo com manete e painel de instrumentos
│   └── Modulo3.jsx        # Artigos científicos adaptados para linguagem acessível
├── App.jsx                # Roteamento principal
└── index.css              # Estilos globais e animações
```

## Tecnologias

- **React + Vite** — estrutura do projeto
- **Tailwind CSS v4** — estilização utilitária
- **Framer Motion** — animações
- **React Router DOM** — navegação entre módulos
- **Lucide React** — ícones

## Módulos

| Módulo | Conteúdo |
|--------|----------|
| 01 — O Motor | Componentes do turbojato, diagrama SVG interativo, Ciclo de Brayton |
| 02 — Simulador | Manete de potência, motor animado, gauges de temperatura/empuxo/eficiência |
| 03 — Ciência | 3 artigos científicos com resumos acessíveis e análise de impacto |

## Build para produção

```bash
npm run build
```

Os arquivos gerados ficam em `dist/`.
