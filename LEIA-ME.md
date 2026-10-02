# Comece aqui

## Abrir e publicar

Extraia o ZIP inteiro e abra index.html para ver a versão com CDN. Para publicar a versão otimizada, copie index.producao.html como index.html, mantendo assets, favicons e arquivos técnicos juntos na raiz do site.

Para editar e recompilar: instale Node.js, execute `npm install` e depois `npm run build`. O build lê index.html e escreve index.producao.html; não sobrescreve a versão editável.

# Bravo Barbearia

Landing page demonstrativa, em português, com marca e conteúdo fictícios. HTML sem framework, CSS responsivo e JavaScript nativo. Fotos originais geradas para este projeto.

## Conteúdo

- `index.producao.html`: versão de publicação com Tailwind pré-compilado.
- `index.html`: versão editável com Tailwind Play CDN 4.1.13 e CSS/JS próprios no HTML.
- `assets/`: fotografias WebP responsivas, fontes locais e suas licenças, marca e imagem social.
- `favicon.ico`, PNGs e apple-touch-icon.
- `robots.txt`, `sitemap.xml`, `llms.txt`.

## As oito configurações

1. Favicons ICO, PNG 16 e 32, Apple 180, com tags no head.
2. Title, description, keywords, canonical, viewport, Open Graph, Twitter Card e placeholder do Search Console.
3. JSON-LD Organization: nome, descrição, URL, logo, image e sameAs. A lista de redes começa vazia para não atribuir perfis falsos; adicione URLs oficiais verificadas.
4. Robots, sitemap e llms em arquivos separados e também como comentário no final do HTML.
5. GA4 gtag.js no head, ID `G-XXXXXXXXXX`, inicializado apenas com ID real e consentimento.
6. Clarity no head, ID `SEU_ID_CLARITY`, consentimento v2, formulários mascarados.
7. Fotos WebP com picture/srcset, dimensões, alt, lazy e decoding async. Fontes locais, sem chamadas ao Google Fonts em tempo de execução.
8. Header, hero, serviços e preços, benefícios, depoimentos, FAQ, localização, rodapé, CTA móvel, modal de agendamento e animações com respeito à preferência de movimento reduzido.

## Configurar para uma empresa real

1. Substitua a marca, textos, preços, profissionais, fotos, horários e endereço nos HTMLs. Substitua os depoimentos ilustrativos por avaliações autorizadas e verdadeiras. Não use os dados fictícios como fatos de uma empresa.
2. Troque o domínio em canonical, og:url, og:image, twitter:image, JSON-LD, robots.txt, sitemap.xml, llms.txt e comentários. Use URLs absolutas HTTPS que estejam acessíveis publicamente.
3. Preencha BRAVO_CONFIG no head: `whatsapp` com DDI+DDD+número (somente dígitos), `maps` com URL oficial, `ga4` e `clarity` com seus IDs. O campo instagram fica disponível para sua personalização; insira o link oficial na navegação/rodapé e em sameAs quando existir.
4. Configure o Search Console com seu código real. Cadastre e envie sitemap.xml na conta do domínio. Analytics e Clarity precisam de projetos válidos, consentimento e validação em suas respectivas plataformas.
5. Para permitir a solicitação via WhatsApp, altere `demo` para `false`. O visitante escolhe serviço, profissional e horário desejado; abre-se uma mensagem pronta. O visitante ainda precisa enviá-la. A equipe deve confirmar manualmente a disponibilidade.
6. O site não consulta agenda externa, não reserva horários, não impede duas pessoas de solicitar o mesmo horário, não processa pagamentos e não salva dados de clientes. Para reservas automáticas, integre uma plataforma/API de agendamento e armazenamento seguro no servidor.
7. Revise a política de privacidade com os dados e práticas reais do responsável pelo site. O texto incluído descreve esta demonstração, não substitui uma política específica da empresa.

## Tailwind CDN e publicação

O CDN foi incluído na versão editável por solicitação. A própria documentação oficial reserva Play CDN para desenvolvimento. A versão publicada utiliza CSS pré-compilado, removendo o processamento de estilos do navegador.

O layout principal usa CSS próprio no HTML e continua utilizável se o CDN estiver indisponível. Se editar classes Tailwind, recompile o CSS da versão de publicação. No pacote ZIP existe um comando de build opcional e reproduzível.

## Desempenho e SEO: limites

Todas as tags img usam loading=lazy conforme solicitado. Para compensar o custo na primeira imagem, a foto principal possui preload responsivo e fetchpriority=high. Em uma publicação futura orientada exclusivamente a LCP, prefira loading=eager na imagem principal e preserve lazy nas demais.

Keywords não garantem ranqueamento. Dados estruturados, metadados e sitemap não garantem indexação. llms.txt é documentação informativa e não garante leitura, indexação, treinamento ou licença para IAs. A versão compartilhada pelo Sites começa privada; buscadores e robôs de redes sociais só conseguirão acessar uma publicação pública.

## Validação executada

Verificados: sintaxe de JavaScript, referências de assets locais, IDs e âncoras, atributos WebP, JSON-LD, menu, FAQ, seleção de serviço, exigência de horário, valor do combo, domingos sem atendimento, reabertura do fluxo, conclusão da simulação, contato demonstrativo e preferências de cookies.

Teste funcional executado em DOM simulado (jsdom). A integração WebMCP é progressiva: foi verificada com registro simulado e compartilhamento do estado da interface. Inspeção visual em navegador real, Lighthouse, dispositivos físicos e integração real de GA4/Clarity/WhatsApp não foram executados neste ambiente. Revise a experiência em celular antes de conectar uma empresa real.

## Referências técnicas

- Inspiração funcional: https://viabarbearia.ageenda.com.br/
- Tailwind: https://tailwindcss.com/docs/installation/play-cdn
- Google: https://developers.google.com/tag-platform/security/guides/consent
- Clarity: https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-consent-api-v2

As fotografias foram geradas para este projeto. Os textos, identidade e apresentação são originais. Licenças das fontes estão em assets.
