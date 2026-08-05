---
title: "Do React ao Astro: reconstruindo meu portfólio"
description: "Por que migrei meu portfólio de um SPA em React para o Astro, e o que ganhei em performance, SEO e simplicidade no caminho."
pubDate: 2026-08-05
tags: ["astro", "react", "performance", "seo"]
---

Este site que você está navegando agora é a terceira versão do meu portfólio - e a primeira construída com [Astro](https://astro.build). Neste primeiro post do blog, quero compartilhar o raciocínio por trás da migração.

## O problema com o SPA

A versão anterior era um SPA em React com Vite. Funcionava bem, mas para um site que é essencialmente **conteúdo estático**, eu estava pagando um preço desnecessário:

- Todo o conteúdo era renderizado no cliente, então crawlers e previews de link viam um HTML quase vazio;
- O bundle carregava React, i18next, motion e Radix UI para exibir... uma página;
- A troca de idioma acontecia via JavaScript, sem URLs distintas por idioma - ruim para SEO.

## Por que Astro

O Astro renderiza tudo em HTML estático no build e só envia JavaScript quando realmente necessário. Na prática, isso significou:

- **Zero framework no cliente**: as animações de partículas, o scroll-spy da navbar e o efeito de texto "encriptado" viraram scripts vanilla de poucos KB;
- **i18n com rotas reais**: `/` em português e `/en/` em inglês, com `hreflang` e sitemap gerados no build;
- **Este blog**: as Content Collections do Astro transformam arquivos Markdown em páginas tipadas e validadas.

## O resultado

O layout continua exatamente o mesmo - só mudou a cor, do verde para um azul. Mas por baixo, o site ficou mais leve, indexável e fácil de manter.

Nos próximos posts pretendo compartilhar mais experiências de desenvolvimento. Até lá!
