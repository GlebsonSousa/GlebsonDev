const cracha = {
  balancos: [],

  montar() {
    let barras = "";
    for (let i = 0; i < 24; i++) {
      const largura = (i * 7) % 3 + 1;
      barras += `<i style="width: ${largura}px"></i>`;
    }

    return `
      <div class="cordao-fita">GLEBSON SOUSA · BACK-END · GLEBSON SOUSA</div>
      <div class="cordao-presilha"></div>
      <div class="cracha">
        <div class="cracha-furo"></div>
        <div class="cracha-foto"><img src="img/glebson-cracha.webp" alt="" draggable="false"></div>
        <div class="cracha-nome titulo-display">${dadosPortfolio.perfil.nome}</div>
        <div class="cracha-cargo">${dadosPortfolio.perfil.cargo}</div>
        <div class="cracha-rodape">
          <div class="cracha-codigo">${barras}</div>
          <span class="cracha-selo">ACESSO LIBERADO</span>
        </div>
      </div>
    `;
  },

  ativar(elemento) {
    const estado = {
      angulo: 0,
      velocidade: 0,
      tocando: false,
      arrastando: false,
      inicioX: 0,
      inicioY: 0,
      visivel: true
    };

    elemento.addEventListener("pointerdown", (evento) => {
      estado.tocando = true;
      estado.inicioX = evento.clientX;
      estado.inicioY = evento.clientY;
    });

    elemento.addEventListener("pointermove", (evento) => {
      if (!estado.tocando) return;

      const distanciaX = evento.clientX - estado.inicioX;
      const distanciaY = evento.clientY - estado.inicioY;

      if (!estado.arrastando) {
        if (Math.abs(distanciaX) > 8 && Math.abs(distanciaX) > Math.abs(distanciaY)) {
          estado.arrastando = true;
          elemento.setPointerCapture(evento.pointerId);
        } else if (Math.abs(distanciaY) > 8) {
          estado.tocando = false;
        }
        return;
      }

      const caixa = elemento.parentElement.getBoundingClientRect();
      const pivoX = caixa.left + caixa.width / 2;
      const anguloNovo = this.limitar((pivoX - evento.clientX) / 6, -28, 28);
      estado.velocidade = anguloNovo - estado.angulo;
      estado.angulo = anguloNovo;
    });

    const soltar = () => {
      estado.tocando = false;
      estado.arrastando = false;
    };
    elemento.addEventListener("pointerup", soltar);
    elemento.addEventListener("pointercancel", soltar);

    const observador = new IntersectionObserver((entradas) => {
      estado.visivel = entradas[0].isIntersecting;
    });
    observador.observe(elemento);

    const animar = () => {
      if (estado.visivel && !estado.arrastando) {
        estado.velocidade += -estado.angulo * 0.015;
        estado.velocidade *= 0.95;
        estado.angulo += estado.velocidade;
      }
      const parado = Math.abs(estado.angulo) < 0.01 && Math.abs(estado.velocidade) < 0.01;
      if (!parado || estado.arrastando) {
        elemento.style.transform = `rotate(${estado.angulo.toFixed(2)}deg)`;
      }
      requestAnimationFrame(animar);
    };
    animar();

    this.balancos.push(estado);
  },

  balancar() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    this.balancos.forEach((estado) => {
      estado.angulo = 8;
    });
  },

  limitar(valor, minimo, maximo) {
    return Math.max(minimo, Math.min(maximo, valor));
  }
};
