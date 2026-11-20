import { useEffect, useRef, useState } from "react";
import "./Aside.css";
import logoFormiga from '/formiga.svg'

/**
 * Lê a página e monta a árvore sozinho (na ordem em que aparece):
 *   Cabecalho (secao)
 *     ├─ CabecalhoSecundario (capitulo)
 *     └─ CabecalhoSubtrama (subtrama)
 *          └─ CabecalhoSecundario (capitulo da subtrama)
 */
function lerEstrutura(raiz) {
  const arvore = [];
  let secao = null;
  let sub = null;

  raiz.querySelectorAll("[data-nav]").forEach((el) => {
    const { nav, titulo, emoji } = el.dataset;
    const item = { id: el.id, titulo, emoji };

    if (nav === "secao") {
      secao = { ...item, capitulos: [], subtramas: [] };
      sub = null;
      arvore.push(secao);
    } else if (nav === "subtrama" && secao) {
      sub = { ...item, capitulos: [] };
      secao.subtramas.push(sub);
    } else if (secao) {
      (sub ?? secao).capitulos.push(item); // capítulo cai na subtrama aberta, se houver
    }
  });
  return arvore;
}

function irPara(id) {
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: reduzir ? "auto" : "smooth", block: "start" });
}

export default function Aside({
  titulo = "LORE",
  subtitulo = "Índice de capítulos",
  logo = "📖",
  conteudoRef,
}) {
  const [arvore, setArvore] = useState([]);
  const [fechadas, setFechadas] = useState({}); // temporadas: abertas por padrão
  const [subAbertas, setSubAbertas] = useState({}); // subtramas: fechadas por padrão
  const [ativo, setAtivo] = useState(null);

  // enquanto o clique estiver rolando a página, a rolagem não troca o item ativo
  const travadoAte = useRef(0);

  useEffect(() => {
    const raiz = conteudoRef.current;
    if (!raiz) return;

    setArvore(lerEstrutura(raiz));

    const titulos = [...raiz.querySelectorAll("[data-nav]")]; // na ordem da página
    let quadro = null;

    const atualizar = () => {
      quadro = null;
      const linha = window.innerHeight * 0.3; // "linha de leitura" a 30% do topo
      const rolavel = document.documentElement.scrollHeight > window.innerHeight + 4;
      const noFim =
        rolavel &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;

      // ativo = o último título que já passou da linha de leitura
      let atual = titulos[0];
      for (const el of titulos) {
        if (el.getBoundingClientRect().top <= linha) atual = el;
        else break;
      }
      // no fim da página, os últimos títulos nunca chegam na linha: marca o último
      if (noFim) atual = titulos[titulos.length - 1];

      setAtivo(atual?.id ?? null);
    };

    const aoRolar = () => {
      if (Date.now() < travadoAte.current) {
        travadoAte.current = Date.now() + 150; // segue travado até a rolagem parar
        return;
      }
      if (!quadro) quadro = requestAnimationFrame(atualizar);
    };

    atualizar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, [conteudoRef]);

  const alternar = (id) => setFechadas((f) => ({ ...f, [id]: !f[id] }));
  const alternarSub = (id) => setSubAbertas((a) => ({ ...a, [id]: !a[id] }));

  // clicar num capítulo sempre o destaca, mesmo que a página não consiga rolar até o topo dele
  const selecionar = (id) => {
    travadoAte.current = Date.now() + 150;
    setAtivo(id);
    irPara(id);
  };

  const subContemAtivo = (sub) =>
    ativo === sub.id || sub.capitulos.some((c) => c.id === ativo);

  const totalCapitulos = arvore.reduce(
    (n, s) =>
      n + s.capitulos.length + s.subtramas.reduce((m, sub) => m + sub.capitulos.length, 0),
    0
  );

  const botoesCapitulos = (lista) =>
    lista.map((cap) => (
      <button
        key={cap.id}
        className="sidebar-capitulo"
        title={cap.titulo}
        aria-current={ativo === cap.id ? "location" : undefined}
        onClick={() => selecionar(cap.id)}
      >
        <span className="sidebar-capitulo-linha" aria-hidden="true" />
        <span className="sidebar-capitulo-emoji">{cap.emoji}</span>
        <span className="sidebar-nome">{cap.titulo}</span>
      </button>
    ));

  return (
    <aside data-lenis-prevent className="sidebar">
      <div className="sidebar-cabecalho">
        <div className="sidebar-logo" aria-hidden="true">
          <img src={logoFormiga}></img>
        </div>
        <div>
          <h2>{titulo}</h2>
          <p>{subtitulo}</p>
        </div>
      </div>

      <div className="sidebar-divisor" />
      <p className="sidebar-legenda">LORES</p>

      <nav className="sidebar-navegacao" aria-label="Navegação do lore">
        {arvore.map((sec) => {
          const aberta = !fechadas[sec.id];
          const contemAtivo =
            ativo === sec.id ||
            sec.capitulos.some((c) => c.id === ativo) ||
            sec.subtramas.some(subContemAtivo);

          return (
            <div key={sec.id} className="sidebar-grupo">
              <button
                className={`sidebar-historia ${contemAtivo ? "ativa" : ""}`}
                aria-expanded={aberta}
                title={sec.titulo}
                onClick={() => alternar(sec.id)}
              >
                <span className="sidebar-toggle" aria-hidden="true">
                  <span className={`sidebar-seta ${aberta ? "aberta" : ""}`}>›</span>
                </span>
                <span className="sidebar-titulo-historia">
                  <span className="sidebar-capitulo-emoji">{sec.emoji}</span>
                  <span className="sidebar-nome">{sec.titulo}</span>
                </span>
              </button>

              {aberta && (
                <div className="sidebar-capitulos">
                  {botoesCapitulos(sec.capitulos)}

                  {sec.subtramas.map((sub) => {
                    const subAberta = !!subAbertas[sub.id];

                    return (
                      <div key={sub.id} className="sidebar-subtrama">
                        <button
                          className={`sidebar-historia sidebar-historia--sub ${
                            subContemAtivo(sub) ? "ativa" : ""
                          }`}
                          aria-expanded={subAberta}
                          title={sub.titulo}
                          onClick={() => alternarSub(sub.id)}
                        >
                          <span className="sidebar-toggle" aria-hidden="true">
                            <span className={`sidebar-seta ${subAberta ? "aberta" : ""}`}>›</span>
                          </span>
                          <span className="sidebar-titulo-historia">
                            {sub.emoji && (
                              <span className="sidebar-capitulo-emoji">{sub.emoji}</span>
                            )}
                            <span className="sidebar-nome">{sub.titulo}</span>
                          </span>
                        </button>

                        {subAberta && (
                          <div className="sidebar-capitulos">
                            {botoesCapitulos(sub.capitulos)}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="sidebar-rodape">
        <span className="sidebar-status" aria-hidden="true" />
        {arvore.length} lores · {totalCapitulos} capítulos
      </div>
    </aside>
  );
}