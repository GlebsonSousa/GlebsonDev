const secaoProjetos = {
  montar() {
    return dadosPortfolio.projetos.map((projeto) => {
      const pagina = `projeto.html#${projeto.id}`;

      return `
        <article class="projeto revelar">
          <a class="projeto-imagem" href="${pagina}">
            <img src="${projeto.imagem}" alt="Imagem do projeto ${projeto.nome}" loading="lazy">
          </a>
          <div class="projeto-texto">
            <span class="projeto-tipo mono">${projeto.tipo}</span>
            <h3 class="titulo-display"><a href="${pagina}">${projeto.nome}</a></h3>
            <p>${projeto.descricao}</p>
            <ul>${projeto.pontos.map((ponto) => `<li>${ponto}</li>`).join("")}</ul>
            <div class="etiquetas">${projeto.stack.map((item) => `<span>${item}</span>`).join("")}</div>
            <div class="projeto-links">
              <a class="botao botao-cheio" href="${pagina}">Ver projeto →</a>
              ${this.montarLinks(projeto.links)}
            </div>
          </div>
        </article>
      `;
    }).join("");
  },

  montarLinks(links) {
    return links.map((link) => `
      <a class="link-externo" href="${link.url}" target="_blank" rel="noopener">${link.texto} ↗</a>
    `).join("");
  }
};
