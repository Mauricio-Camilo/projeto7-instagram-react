export default function Feed() {
    return (
        <div>
            <Postagem imagem="Figuras/story_3.png" fotoPerfil="Figuras/gato.png" nome="meowed" curtida="respondeai" quantidade="outras 101.523 pessoas"/>
            <Postagem imagem="Figuras/cachorrinho.png" fotoPerfil="Figuras/cachorrinho.png" nome="barked" curtida="respondeai" quantidade="outras 101.523 pessoas"/>
            <Postagem imagem="Figuras/story_1.png" fotoPerfil="Figuras/gato.png" nome="wawawiwa" curtida="meowed" quantidade="outras 328.126 pessoas"/>           
        </div>
    );
}

function Postagem (props) {
    return (
        <div class="postagem">
        <div class="post">
            <div class="post-topo">
                <a href="#"><img class="feed-perfil" src={props.imagem}/></a>
                <a href="#">
                    <p>{props.nome}</p>
                </a>
            </div>
            <p>...</p>
        </div>
        <img class="postimagem" src={props.fotoPerfil} />
        <div class="post-icones">
            <div class="post-icones2">
                <Icones icone="heart-outline"/>
                <Icones icone="chatbubble-outline"/>
                <Icones icone="paper-plane-outline"/>
            </div>
            <a href="#">
                <Icones icone="bookmark-outline"/>
            </a>
        </div>
        <div class="curtida">
            <a href="#"><img class="storiesback" src="Figuras/story_7.png" /></a>
            <p>Curtido por <strong>{props.curtida}</strong> e <strong>{props.quantidade}</strong></p>
        </div>
    </div>
    )
}

function Icones (props) {
    return (
      <a href="#">
                <ion-icon class="tamanhoicone" name={props.icone}></ion-icon>
              </a>
    )
  }