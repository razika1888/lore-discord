import { criarId } from "../utils/criarId";
import "./CabecalhoSecundario.css";

/**
 * Título de capítulo (equivale ao "##" do Discord).
 * Props: emoji, titulo  (id é opcional)
 * A PRIMEIRA letra do título é sublinhada via CSS (::first-letter).
 */
export default function CabecalhoSecundario({ emoji, titulo, id }) {
  return (
    <h2
      className="capitulo"
      id={id ?? criarId(titulo)}
      data-nav="capitulo"
      data-titulo={titulo}
      data-emoji={emoji}
    >
      <span className="capitulo__marcador">
        〚<code>{emoji}</code>〛》
      </span>
      <span className="capitulo__titulo">{titulo}</span>
    </h2>
  );
}
