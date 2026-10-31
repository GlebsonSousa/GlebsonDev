const menu = {
  links: [],
  agendado: false,

  ativar() {
    this.links = Array.from(document.querySelectorAll("#menu a"));

    window.addEventListener("scroll", () => {
      if (this.agendado) return;
      this.agendado = true;
      requestAnimationFrame(() => {
        this.marcarAtual();
        this.agendado = false;
      });
    }, { passive: true });

    this.marcarAtual();
  },

  marcarAtual() {
    const linhaDeCorte = window.innerHeight * 0.45;
    let atual = this.links[0];

    this.links.forEach((link) => {
      const secao = document.querySelector(link.getAttribute("href"));
      if (secao && secao.getBoundingClientRect().top < linhaDeCorte) {
        atual = link;
      }
    });

    const chegouNoFim = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
    if (chegouNoFim) {
      atual = this.links[this.links.length - 1];
    }

    this.links.forEach((link) => {
      link.classList.toggle("ativo", link === atual);
    });
  }
};
