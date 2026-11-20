import Texto from "./Texto";
import "./Bloco.css";

// aceita tanto ["texto"] quanto "texto" solto, para não quebrar a página por um colchete esquecido
const paraLista = (v) => (Array.isArray(v) ? v : v ? [v] : []);

/**
 * Renderiza um bloco de conteúdo conforme o `tipo`.
 * Para criar um tipo novo: adicione um `case` aqui e documente em conteudo.js.
 */
export default function Bloco({ tipo, paragrafos = [], texto, itens = [], src, legenda }) {
  switch (tipo) {
    case "citacao":
      return (
        <blockquote className="citacao">
          {paraLista(paragrafos).map((p, i) => (
            <p key={i} className="sub sub--italico">
              <Texto>{p}</Texto>
            </p>
          ))}
        </blockquote>
      );

    case "texto": {
      // "# ", "## " e "### " no começo viram títulos (h2, h3, h4).
      // Título é elemento de bloco, então NÃO pode ficar dentro de <p>.
      const titulo = texto?.match(/^(#{1,3}) +([\s\S]*)$/);
      if (titulo) {
        const Tag = ["h2", "h3", "h4"][titulo[1].length - 1];
        return (
          <Tag className="titulos">
            <Texto>{titulo[2].trim()}</Texto>
          </Tag>
        );
      }
      return (
        <p>
          <Texto>{texto}</Texto>
        </p>
      );
    }

    case "imagem":
      return (
        <figure className="imagem">
          <img src={src} alt={legenda ?? ""} />
          {legenda && <figcaption>{legenda}</figcaption>}
        </figure>
      );

    case "lista":
      return (
        <ul className="lista">
          {paraLista(itens).map((item, i) => (
            <li key={i}>
              <Texto>{item}</Texto>
            </li>
          ))}
        </ul>
      );

    case "divisor":
      return <hr className="divisor" />;

    default:
      console.warn(`Bloco: tipo desconhecido "${tipo}"`);
      return null;
  }
}