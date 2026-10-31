const secaoTrajetoria = {
  montar() {
    return dadosPortfolio.trajetoria.map((item) => {
      const pontos = item.pontos.map((ponto) => `<li>${ponto}</li>`).join("");
      return `
        <article class="trajetoria-item revelar">
          <span class="trajetoria-periodo mono">${item.periodo}</span>
          <div>
            <h3>${item.titulo}</h3>
            <h4>${item.local}</h4>
            <ul>${pontos}</ul>
          </div>
        </article>
      `;
    }).join("");
  }
};
