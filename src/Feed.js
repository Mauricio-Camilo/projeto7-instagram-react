import Icones from "./Icones";
import Imagens from "./Imagens";

const conteudos = [
    { imagem: "Figuras/story_3.png", fotoPerfil: "Figuras/gato.png", nome: "meowed", perfilCurtida: "Figuras/story_7.png", curtida: "respondeai", quantidade: "101.523" },
    { imagem: "Figuras/cachorrinho.png", fotoPerfil: "Figuras/cachorrinho.png", nome: "barked", perfilCurtida: "Figuras/story_5.png", curtida: "9gag", quantidade: "99.159" },
    { imagem: "Figuras/story_1.png", fotoPerfil: "Figuras/Perfil (1).png", nome: "wawawiwa", perfilCurtida: "Figuras/story_3.png", curtida: "meowed", quantidade: "328.126" },
]

const conteudosIcones = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];

export default function Feed() {
    return (
        <div>
            {conteudos.map(conteudo =>
                <Postagem imagem={conteudo.imagem} fotoPerfil={conteudo.fotoPerfil} nome={conteudo.nome} perfilCurtida={conteudo.perfilCurtida} curtida={conteudo.curtida} quantidade={conteudo.quantidade} />)
            }
        </div>
    )
}

function Postagem(props) {
    return (
        <div class="postagem">
            <div class="post">
                <div class="post-topo">
                    <Imagens classe="feed-perfil" link={props.imagem} />
                    <a href="#">
                        <p>{props.nome}</p>
                    </a>
                </div>
                <p>...</p>
            </div>
            <img class="postimagem" src={props.fotoPerfil} />
            <div class="post-icones">
                <div class="post-icones2">
                    {conteudosIcones.map(conteudo =>
                        <Icones nome={conteudo} classe="tamanhoicone" />)
                    }
                </div>
                <Icones nome="bookmark-outline" classe="tamanhoicone" />
            </div>
            <div class="curtida">
                <Imagens classe="storiesback" link={props.perfilCurtida} />
                <p>Curtido por <strong>{props.curtida}</strong> e <strong>outras {props.quantidade} pessoas</strong></p>
            </div>
        </div>
    )
}

