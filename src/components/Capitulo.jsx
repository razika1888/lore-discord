import CabecalhoSecundario from "./CabecalhoSecundario";
import Bloco from "./Bloco";

/** Um capítulo = título secundário + todos os seus blocos, na ordem. */
export default function Capitulo({ emoji, titulo, id, blocos = [] }) {
  return (
    <>
      <CabecalhoSecundario emoji={emoji} titulo={titulo} id={id} />
      {blocos.map((bloco, i) => (
        <Bloco key={i} {...bloco} />
      ))}
    </>
  );
}
