import { criarId } from "../utils/criarId";
import CabecalhoSubtrama from "./CabecalhoSubtrama";
import Capitulo from "./Capitulo";

/** Uma subtrama = cabeçalho "S1.1 | Título" + os capítulos dela. */
export default function Subtrama({ numero, titulo, emoji, data, id, capitulos = [] }) {
  return (
    <>
      <CabecalhoSubtrama numero={numero} titulo={titulo} emoji={emoji} data={data} id={id} />
      {capitulos.map((cap) => (
        <Capitulo
          key={cap.id ?? cap.titulo}
          {...cap}
          // prefixo da subtrama no ID: dois capítulos com o mesmo título não colidem
          id={cap.id ?? criarId(`s${numero} ${cap.titulo}`)}
        />
      ))}
    </>
  );
}