import { useState } from "react";
import CabecalhoSecundario from "./CabecalhoSecundario";
import Bloco from "./Bloco";

/**
 * Um capítulo = título secundário + todos os seus blocos, na ordem.
 * Com `recolhivel: true` no conteudo.js, os blocos começam escondidos e o
 * leitor abre clicando no título. (O menu lateral não muda.)
 */
export default function Capitulo({ emoji, titulo, id, recolhivel = false, blocos = [] }) {
  const [aberto, setAberto] = useState(!recolhivel);

  return (
    <>
      <CabecalhoSecundario
        emoji={emoji}
        titulo={titulo}
        id={id}
        aberto={aberto}
        aoAlternar={recolhivel ? () => setAberto((a) => !a) : undefined}
      />
      {aberto && blocos.map((bloco, i) => <Bloco key={i} {...bloco} />)}
    </>
  );
}