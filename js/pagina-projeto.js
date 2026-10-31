const paginaProjeto = {
  iniciar() {
    this.renderizar();
    tema.ativar();
    alvo.ativar();

    window.addEventListener("hashchange", () => {
      this.renderizar();
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  },

  lerId() {
    const doEndereco = location.hash.replace("#", "");
    return doEndereco || new URLSearchParams(location.search).get("p");
  },

  renderizar() {
    const id = this.lerId();
    const lista = dadosPortfolio.projetos;
    const indice = lista.findIndex((projeto) => projeto.id === id);
    const destino = document.getElementById("pagina-projeto");

    if (indice === -1) {
      destino.innerHTML = this.montarNaoEncontrado();
    } else {
      const projeto = lista[indice];
      const proximo = lista[(indice + 1) % lista.length];
      document.title = `${projeto.nome} — ${dadosPortfolio.perfil.nome}`;
      destino.innerHTML = this.montar(projeto, proximo);
    }

    revelar.ativar();
  },

  montar(projeto, proximo) {
    return `
      <header class="caso-cabecalho">
        <span class="projeto-tipo mono">${projeto.tipo}</span>
        <h1 class="caso-nome titulo-display">${projeto.nome}</h1>
        <p class="caso-resumo">${projeto.descricao}</p>
        <dl class="caso-ficha">
          <div><dt class="mono">Papel</dt><dd>${projeto.papel}</dd></div>
          <div><dt class="mono">Status</dt><dd>${projeto.status}</dd></div>
          <div><dt class="mono">Stack</dt><dd>${projeto.stack.join(", ")}</dd></div>
        </dl>
        <div class="projeto-links">${secaoProjetos.montarLinks(projeto.links)}</div>
      </header>

      <figure class="caso-capa">
        <img src="${projeto.capa || projeto.imagem}" alt="Imagem principal do projeto ${projeto.nome}">
      </figure>

      ${this.montarBloco("O problema", `<p>${projeto.problema}</p>`)}
      ${this.montarBloco("A solução", `<p>${projeto.solucao}</p>`)}
      ${this.montarBloco("Como funciona", `<ol class="caso-passos">${this.montarItens(projeto.passos)}</ol>`)}
      ${this.montarBloco("Decisões técnicas", `<ul class="caso-decisoes">${this.montarItens(projeto.decisoes)}</ul>`)}
      ${this.montarBloco("Imagens", `<div class="caso-galeria">${this.montarGaleria(projeto.galeria)}</div>`)}

      <a class="caso-proximo" href="projeto.html#${proximo.id}">
        <span class="mono">Próximo projeto</span>
        <strong class="titulo-display">${proximo.nome} →</strong>
      </a>
    `;
  },

  montarBloco(titulo, conteudo) {
    return `
      <section class="caso-bloco revelar">
        <h2 class="caso-titulo titulo-display">${titulo}</h2>
        <div class="caso-conteudo">${conteudo}</div>
      </section>
    `;
  },

  montarItens(itens) {
    return itens.map((item) => `<li>${item}</li>`).join("");
  },

  montarGaleria(galeria) {
    return galeria.map((item) => `
      <figure>
        <a href="${item.imagem}" target="_blank" rel="noopener">
          <img src="${item.imagem}" alt="${item.legenda}" loading="lazy">
        </a>
        <figcaption>${item.legenda}</figcaption>
      </figure>
    `).join("");
  },

  montarNaoEncontrado() {
    return `
      <header class="caso-cabecalho">
        <h1 class="caso-nome caso-nome-pequeno titulo-display">Projeto não encontrado</h1>
        <p class="caso-resumo">O endereço pode estar incompleto. Volte ao portfólio e escolha um projeto da lista.</p>
        <div class="projeto-links"><a class="botao botao-cheio" href="index.html#projetos">Ver projetos</a></div>
      </header>
    `;
  }
};

paginaProjeto.iniciar();
