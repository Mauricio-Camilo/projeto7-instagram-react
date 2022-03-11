import Icones from "./Icones";

const conteudos = ["home","search-outline","add-circle-outline","heart-outline","person-outline"]

export default function Footer() {
  return (
    <footer>
      <div class="iconesinferior">
      {conteudos.map(conteudo => 
      <Icones nome={conteudo} classe="tamanhoicone3" />)
      }
      </div>
    </footer>
  );
}


