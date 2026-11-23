---
title: "Construir uma biblioteca me ensinou a pensar diferente sobre código"
description: "Como desenvolver o Kori, meu toolkit para Go, mudou minha maneira de pensar sobre abstrações, simplicidade e a experiência de quem utiliza o código que escrevemos."
pubDate: 2026-11-23
tags:
  - Go
  - Open Source
  - Engenharia de Software
  - Aprendizado
---

# Construir uma biblioteca me ensinou a pensar diferente sobre código

Quando comecei a trabalhar com Go, minha intenção era aprender uma nova linguagem e entender melhor seu ecossistema. Como contei no [artigo anterior](/blog/do-javascript-ao-go/), essa experiência acabou despertando uma curiosidade que foi muito além do trabalho.

Comecei a experimentar ferramentas, desenvolver pequenos projetos e explorar diferentes maneiras de construir aplicações com Go.

Em meio a esses experimentos, surgiu uma ideia: e se eu construísse minha própria biblioteca?

Foi assim que comecei o [Kori](https://kori.douglasmaia.dev.br/pt-br), um toolkit para Go construído sobre o Chi.

Na época, não imaginava que esse projeto acabaria me ensinando tanto sobre algo que vai muito além de escrever código.

## Quando o problema é seu, tudo parece mais simples

No começo, desenvolver o Kori parecia um exercício relativamente simples.

Eu já tinha alguma experiência desenvolvendo APIs e sabia quais ferramentas gostaria de ter disponíveis. Queria uma experiência agradável ao trabalhar com handlers, facilitar o tratamento de erros e evitar repetir algumas operações comuns durante o desenvolvimento.

A ideia era construir algo que tornasse meu próprio trabalho mais confortável.

Mas existe uma diferença importante entre desenvolver uma solução para resolver um problema seu e construir algo que outras pessoas também possam utilizar.

Quando o código é apenas seu, você conhece suas decisões, entende suas limitações e sabe como contornar os problemas que aparecem.

Quando outras pessoas começam a utilizar aquilo que você construiu, essas suposições deixam de ser suficientes.

Uma função que parece intuitiva para você pode não ser tão clara para outra pessoa. Uma abstração que economiza algumas linhas de código pode esconder comportamentos importantes. Uma decisão que parecia pequena pode acabar limitando quem utiliza a biblioteca.

Comecei a perceber que não estava apenas desenvolvendo funcionalidades. Estava tomando decisões sobre como outras pessoas poderiam escrever seus próprios códigos.

## A responsabilidade de criar abstrações

Uma das coisas que mais me chamou a atenção durante o desenvolvimento do Kori foi a responsabilidade envolvida em criar abstrações.

É muito fácil olhar para um código repetitivo e pensar que precisamos criar uma função para resolver aquilo. Mais fácil ainda é imaginar uma camada que esconda detalhes e deixe tudo aparentemente mais organizado.

Mas será que toda repetição precisa de uma abstração?

Será que estamos realmente simplificando alguma coisa ou apenas movendo a complexidade para outro lugar?

Essas perguntas começaram a fazer parte das minhas decisões.

No caso do Kori, uma das escolhas mais importantes foi não tentar substituir o Chi.

Eu poderia ter criado uma camada completamente independente, escondendo o funcionamento do roteador e oferecendo uma API própria para tudo. Mas não era esse o objetivo.

Queria adicionar algumas conveniências sem tirar do desenvolvedor aquilo que já funciona bem no ecossistema Go.

Por isso, `http.ResponseWriter`, `*http.Request` e o próprio Chi continuam explícitos. Quem utiliza o Kori ainda pode trabalhar diretamente com as ferramentas da biblioteca padrão e com os recursos do Chi.

Essa decisão pode parecer simples, mas representa uma filosofia que passei a valorizar ainda mais: uma abstração deve facilitar o trabalho sem esconder desnecessariamente aquilo que existe por baixo dela.

Nem tudo precisa ser reinventado. Às vezes, construir algo bom significa saber exatamente o que não devemos construir.

## Pensar em quem vai utilizar

Outra mudança importante foi começar a olhar para o código pela perspectiva de quem vai utilizá-lo.

Quando desenvolvemos uma aplicação, normalmente estamos concentrados em resolver um problema de negócio. Sabemos o contexto, conhecemos as regras e entendemos por que determinada função existe.

Em uma biblioteca, a experiência de utilização passa a fazer parte do próprio produto.

O nome de uma função, os parâmetros que ela recebe, os erros que retorna e até a quantidade de código necessária para realizar uma operação fazem diferença.

No Kori, isso aparece em algumas decisões.

Os handlers podem retornar `error`, permitindo que o tratamento de erros HTTP aconteça de maneira centralizada. Os helpers de binding permitem receber dados de diferentes partes de uma requisição e validá-los. Os helpers de resposta evitam repetir operações comuns.

São pequenas conveniências, mas cada uma delas precisa fazer sentido dentro da experiência geral da biblioteca.

Não adianta criar uma função apenas porque ela é interessante de implementar. Ela precisa resolver um problema real e, principalmente, tornar a utilização mais clara.

Foi nesse momento que comecei a perceber que desenvolver uma biblioteca exige um tipo diferente de atenção.

Você não está apenas pensando em como o código funciona, mas também em como alguém vai descobrir, entender e utilizar aquilo que você construiu.

## Aprender construindo

Talvez a parte mais interessante dessa experiência seja perceber o quanto continuo aprendendo com o projeto.

Desenvolver o Kori me fez estudar mais profundamente a biblioteca padrão do Go, entender melhor o funcionamento do Chi e prestar atenção em detalhes que provavelmente passariam despercebidos se eu estivesse apenas desenvolvendo uma aplicação.

Também comecei a olhar para outras bibliotecas de uma maneira diferente.

Antes, quando encontrava uma ferramenta interessante, meu primeiro pensamento geralmente era sobre como utilizá-la.

Hoje, também tento entender por que ela foi construída daquela maneira.

Por que essa função recebe esses parâmetros? Por que determinada abstração existe? Por que o autor decidiu não implementar alguma funcionalidade?

São perguntas que mudam a maneira como consumimos tecnologia.

E existe algo muito interessante nisso: quando você começa a construir ferramentas para outras pessoas, passa a enxergar problemas que antes nem sabia que existiam.

## O projeto é maior do que o código

O Kori ainda é um projeto em evolução, e não tenho a pretensão de dizer que encontrei a solução ideal para todos os problemas que ele se propõe a resolver.

Na verdade, acredito que parte da graça de desenvolver algo assim está justamente em continuar aprendendo, receber feedback e descobrir novas possibilidades.

Também não espero que todo desenvolvedor precise criar uma biblioteca própria ou publicar projetos open source para evoluir profissionalmente.

Mas acredito que construir algo que outras pessoas possam utilizar oferece uma perspectiva muito diferente sobre engenharia de software.

Você começa a perceber que qualidade não está apenas em escrever um código que funciona, mas também em tomar decisões que tornam esse código compreensível, previsível e agradável de utilizar.

No final, desenvolver o Kori me ensinou que escrever código é apenas uma parte do trabalho.

Precisamos pensar em quem vai ler, manter, integrar e depender daquilo que construímos.

E talvez essa seja uma das maiores mudanças na minha maneira de enxergar desenvolvimento de software: deixar de pensar apenas em como resolver um problema e começar a pensar também em como entregar uma solução que faça sentido para outras pessoas.

Afinal, construir algo útil é muito bom. Mas construir algo que outras pessoas consigam entender, utilizar e evoluir também é uma experiência completamente diferente.
