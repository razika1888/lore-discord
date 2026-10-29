import Texto from "./Texto";
import "./Bloco.css";

/**
 * Renderiza um bloco de conteúdo conforme o `tipo`.
 * Para criar um tipo novo: adicione um `case` aqui e documente em conteudo.js.
 */
export default function Bloco({ tipo, paragrafos = [], texto, itens = [], src, legenda }) {
  switch (tipo) {
    case "citacao":
      return (
        <blockquote className="citacao">
          {paragrafos.map((p, i) => (
            <p key={i} className="sub sub--italico">
              <Texto>{p}</Texto>
            </p>
          ))}
        </blockquote>
      );

    case "texto":
      return (
        <p>
          <Texto>{texto}</Texto>
        </p>
      );

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
          {itens.map((item, i) => (
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
