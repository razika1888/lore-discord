/**
 * Converte a marcação do Discord em JSX:
 *   **negrito**  ->  <strong>      *itálico*  ->  <em>
 * (não aceita um dentro do outro)
 */
export default function Texto({ children }) {
  if (!children) return null;

  return (
    <>
      {children.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((parte, i) => {
        if (parte.startsWith("**")) return <strong key={i}>{parte.slice(2, -2)}</strong>;
        if (parte.startsWith("*")) return <em key={i}>{parte.slice(1, -1)}</em>;
        return parte;
      })}
    </>
  );
}
