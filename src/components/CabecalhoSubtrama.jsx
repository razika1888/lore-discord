import { criarId } from "../utils/criarId";
import "./CabecalhoSubtrama.css";

/** Subtrama "S1.1 | Título". Props: numero ("1.1"), titulo, emoji, data, id */
export default function CabecalhoSubtrama({ numero, titulo, emoji, data, id }) {
  const rotulo = `S${numero}`;

  return (
    <header
      className="subtrama"
      id={id ?? criarId(`${rotulo} ${titulo}`)}
      data-nav="subtrama"
      data-titulo={`${rotulo} | ${titulo}`}
      data-emoji={emoji}
    >
      <h2 className="subtrama__titulo">
        {emoji && <span className="subtrama__selo" aria-hidden="true">{emoji}</span>}
        <span className="subtrama__numero">{rotulo}</span>
        <span>{titulo}</span>
      </h2>
      {data && (
        <p className="subtrama__data">
          <span className="estrela" aria-hidden="true" />
          {data}
        </p>
      )}
    </header>
  );
}
