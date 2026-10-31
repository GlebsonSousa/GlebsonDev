const aplicacao = {
  iniciar() {
    this.montarSecoes();
    this.montarCrachas();

    secaoContato.ativar();
    tema.ativar();
    menu.ativar();
    alvo.ativar();
    revelar.ativar();
    cracha.balancar();
  },

  montarSecoes() {
    document.getElementById("habilidades").innerHTML = secaoSobre.montar();
    document.getElementById("trajetoria-lista").innerHTML = secaoTrajetoria.montar();
    document.getElementById("projetos-lista").innerHTML = secaoProjetos.montar();
    document.getElementById("contato-links").innerHTML = secaoContato.montar();
  },

  montarCrachas() {
    document.querySelectorAll(".cordao").forEach((elemento) => {
      elemento.innerHTML = cracha.montar();
      cracha.ativar(elemento);
    });
  }
};

aplicacao.iniciar();
