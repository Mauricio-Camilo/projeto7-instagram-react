import Icones from "./Icones";

const conteudos = [
  { nome: "paper-plane-outline", classe: "tamanhoicone" },
  { nome: "compass-outline", classe: "tamanhoicone" },
  { nome: "heart-outline", classe: "tamanhoicone" },
  { nome: "person-outline", classe: "tamanhoicone" },
]

export default function Header() {
  return (
    <header>
      <div class="barratopo">
        <TopoLogos />
        <div class="pesquisar">
          <p>Pesquisar</p>
        </div>
        <TopoIcones />
      </div>
    </header>
  );
}

function TopoLogos() {
  return (
    <div class="logotopo">
      <ion-icon class="iconeinsta" name="logo-instagram"></ion-icon>
      <div class="linhavertical"></div>
      <img class="logoinsta" src="./Figuras/logo.png" />
      <Icones nome="paper-plane-outline" classe="tamanhoicone1" />
    </div>
  )
}

function TopoIcones() {
  return (
    <div class="icones">
      {conteudos.map(conteudo =>
        <Icones nome={conteudo.nome} classe={conteudo.classe} />)
      }
    </div>
  )
}
