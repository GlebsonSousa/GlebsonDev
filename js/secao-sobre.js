const secaoSobre = {
  montar() {
    return dadosPortfolio.habilidades.map((grupo) => {
      const itens = grupo.itens.map((item) => `<li>${item}</li>`).join("");
      return `
        <div>
          <h3>${grupo.grupo}</h3>
          <ul>${itens}</ul>
        </div>
      `;
    }).join("");
  }
};
