import Imagens from "./Imagens";

const conteudos = [
  { nome: "bad.vibes.memes", imagem: "./Figuras/sugestoes-1.png" },
  { nome: "chibirdart", imagem: "./Figuras/sugestoes-2.png" },
  { nome: "razoesparaacreditar", imagem: "./Figuras/sugestoes-3.png" },
  { nome: "smallcutecats", imagem: "./Figuras/sugestoes-4.png" },
]

export default function Sidebar() {

  return (
    <aside>

      <SugestoesUsuario />
      <SugestoesVerTudo />
      <SugestoesDireitos />

    </aside>
  )
}

function SugestoesUsuario() {
  return (
    <div class="perfil">
      <Imagens classe="storiesback" link={"./Figuras/Perfil (1).png"} />
      <div class="nomeperfil">
        <a href="#">
          <p class="texto-perfil">catanacomics</p>
        </a>
        <p class="texto2-perfil">Catana</p>
      </div>
    </div>
  )
}

function SugestoesVerTudo() {
  return (
    <div class="sugestoes">
      <div class="sugestoes-texto">
        <p class="texto4-perfil">Sugestões para você</p>
        <a href="#">
          <p class="texto-perfil"> Ver tudo</p>
        </a>
      </div>
      {conteudos.map(conteudo =>
        <SugestoesPerfis nome={conteudo.nome} imagem={conteudo.imagem} />)
      }
    </div>
  )
}

function SugestoesPerfis(props) {
  return (
    <div class="sugestoes-perfil">
      <div class="sugestoes-perfil-1">
        <Imagens classe="" link={props.imagem} />
        <div class="sugestoes-perfil-texto">
          <a href="#">
            <p class="texto-perfil">{props.nome}</p>
          </a>
          <p class="texto3-perfil">Segue você</p>
        </div>
      </div>
      <a href="#">
        <p class="seguindo">Seguir</p>
      </a>
    </div>
  )
}

function SugestoesDireitos() {
  return (
    <div class="textofinal">
      <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
        Termos • Localizações • Contas mais relevantes • Hashtags •
        Idioma</p>
      <p>© 2021 INSTAGRAM DO FACEBOOK</p>
    </div>
  )
}

