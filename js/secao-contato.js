const secaoContato = {
  endereco: "https://formsubmit.co/ajax/glebsonsalmeida@gmail.com",

  montar() {
    const perfil = dadosPortfolio.perfil;
    const links = [
      { nome: "E-mail", texto: perfil.email, url: `mailto:${perfil.email}` },
      { nome: "GitHub", texto: "GlebsonSousa ↗", url: perfil.github },
      { nome: "LinkedIn", texto: perfil.linkedin ? "Ver perfil ↗" : "[link] ↗", url: perfil.linkedin || "#" },
      { nome: "Currículo", texto: "PDF ↓", url: perfil.curriculo || "#" }
    ];

    return links.map((link) => `
      <a href="${link.url}" target="_blank" rel="noopener">${link.nome}<span>${link.texto}</span></a>
    `).join("");
  },

  ativar() {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      this.enviar(formulario);
    });
  },

  async enviar(formulario) {
    const botao = formulario.querySelector("button");
    const campos = new FormData(formulario);

    if (campos.get("_honey")) {
      this.avisar("Mensagem enviada. Te respondo em breve.", false);
      formulario.reset();
      return;
    }

    if (!campos.get("nome").trim() || !campos.get("mensagem").trim()) {
      this.avisar("Preencha seu nome e a mensagem antes de enviar.", true);
      return;
    }

    if (!this.emailValido(campos.get("email"))) {
      this.avisar("Confira o e-mail: ele precisa ter o formato nome@dominio.com.", true);
      return;
    }

    botao.disabled = true;
    botao.textContent = "Enviando…";

    try {
      const resposta = await fetch(this.endereco, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nome: campos.get("nome"),
          email: campos.get("email"),
          mensagem: campos.get("mensagem"),
          _subject: "Nova mensagem pelo portfólio",
          _template: "table",
          _captcha: "false"
        })
      });
      const dados = await resposta.json();

      if (!resposta.ok || String(dados.success) !== "true") {
        throw new Error("falha no envio");
      }

      this.avisar("Mensagem enviada. Te respondo em breve no e-mail que você informou.", false);
      formulario.reset();
    } catch (erro) {
      this.avisar(`Não consegui enviar agora. Me chama direto em ${dadosPortfolio.perfil.email}.`, true);
    } finally {
      botao.disabled = false;
      botao.textContent = "Enviar mensagem";
    }
  },

  emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
  },

  avisar(texto, ehErro) {
    const aviso = document.getElementById("formulario-aviso");
    aviso.textContent = texto;
    aviso.classList.toggle("erro", ehErro);
  }
};
