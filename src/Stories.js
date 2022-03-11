import Imagens from "./Imagens";

export default function Stories() {
    return (
        <div class="stories">
            <div class="scrool">
                <ion-icon class="tamanhoscrool" name="chevron-forward-circle"></ion-icon>
            </div>
            <StoriesConteudo imagem="Figuras/story_1.png" perfil="wawawiwa"/>
            <StoriesConteudo imagem="Figuras/story_2.png" perfil="memeriago"/>
            <StoriesConteudo imagem="Figuras/story_3.png" perfil="meowed"/>
            <StoriesConteudo imagem="Figuras/story_4.png" perfil="barked"/>
            <StoriesConteudo imagem="Figuras/story_5.png" perfil="9gag"/>
            <StoriesConteudo imagem="Figuras/story_6.png" perfil="nathanwpyle"/>
            <StoriesConteudo imagem="Figuras/story_7.png" perfil="respondeai"/>
            <StoriesConteudo imagem="Figuras/story_8.png" perfil="filomoderna"/>
        </div>
    )
}

function StoriesConteudo (props) {
    return (
        <div class="storiesconteudo">
            <Imagens classe="storiesback" link={props.imagem}/>
            <a href="#">
                <p>{props.perfil}</p>
            </a>
         </div>
    )
}