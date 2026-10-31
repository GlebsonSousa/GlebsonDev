const tema = {
  chave: "portfolio-tema",
  atual: "papel",

  aplicarInicial() {
    const salvo = this.ler();
    const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.aplicar(salvo || (prefereEscuro ? "noite" : "papel"));
  },

  aplicar(nome) {
    this.atual = nome;
    document.documentElement.classList.toggle("tema-noite", nome === "noite");
  },

  ativar() {
    const botao = document.getElementById("tema-botao");
    if (!botao) return;

    this.atualizarBotao(botao);
    botao.addEventListener("click", () => {
      const proximo = this.atual === "noite" ? "papel" : "noite";
      this.aplicar(proximo);
      this.salvar(proximo);
      this.atualizarBotao(botao);
    });
  },

  atualizarBotao(botao) {
    const escuro = this.atual === "noite";
    botao.querySelector("span").textContent = escuro ? "Claro" : "Escuro";
    botao.setAttribute("aria-label", escuro ? "Mudar para o tema claro" : "Mudar para o tema escuro");
  },

  ler() {
    try {
      return localStorage.getItem(this.chave);
    } catch (erro) {
      return null;
    }
  },

  salvar(nome) {
    try {
      localStorage.setItem(this.chave, nome);
    } catch (erro) {
      return;
    }
  }
};

tema.aplicarInicial();
