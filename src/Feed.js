import Icones from "./Icones";
import Imagens from "./Imagens";

export default function Feed() {
    return (
        <div>
            <Postagem imagem="Figuras/story_3.png" fotoPerfil="Figuras/gato.png" nome="meowed" perfilCurtida="Figuras/story_7.png" curtida="respondeai" quantidade="101.523"/>
            <Postagem imagem="Figuras/cachorrinho.png" fotoPerfil="Figuras/cachorrinho.png" nome="barked" perfilCurtida="Figuras/story_5.png"  curtida="9gag" quantidade="99.159"/>
            <Postagem imagem="Figuras/story_1.png" fotoPerfil="Figuras/Perfil (1).png" nome="wawawiwa" perfilCurtida="Figuras/story_3.png"  curtida="meowed" quantidade="328.126"/>           
        </div>
    );
}

function Postagem (props) {
    return (
        <div class="postagem">
        <div class="post">
            <div class="post-topo">
                <Imagens classe="feed-perfil" link={props.imagem}/>
                <a href="#">
                    <p>{props.nome}</p>
                </a>
            </div>
            <p>...</p>
        </div>
        <img class="postimagem" src={props.fotoPerfil} />
        <div class="post-icones">
            <div class="post-icones2">
                <Icones nome="heart-outline" classe="tamanhoicone"/>
                <Icones nome="chatbubble-outline" classe="tamanhoicone"/>
                <Icones nome="paper-plane-outline" classe="tamanhoicone"/>

            </div>
            <Icones nome="bookmark-outline" classe="tamanhoicone"/>
        </div>
        <div class="curtida">
            <Imagens classe="storiesback" link={props.perfilCurtida}/>
            <p>Curtido por <strong>{props.curtida}</strong> e <strong>outras {props.quantidade} pessoas</strong></p>
        </div>
    </div>
    )
}
