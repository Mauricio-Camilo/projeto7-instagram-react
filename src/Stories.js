import Imagens from "./Imagens";

const conteudoStories = [
    {imagem: "Figuras/story_1.png", perfil:"wawawiwa"},
    {imagem: "Figuras/story_2.png", perfil:"memeriago"},
    {imagem: "Figuras/story_3.png", perfil:"meowed"},
    {imagem: "Figuras/story_4.png", perfil:"barked"},
    {imagem: "Figuras/story_5.png", perfil:"9gag"},
    {imagem: "Figuras/story_6.png", perfil:"nathanwpyle"},
    {imagem: "Figuras/story_7.png", perfil:"respondeai"},
    {imagem: "Figuras/story_8.png", perfil:"filomoderna"},
]

export default function Stories() {
    return (
        <div class="stories">
            <div class="scrool">
                <ion-icon class="tamanhoscrool" name="chevron-forward-circle"></ion-icon>
            </div>
            {conteudoStories.map (conteudo => 
            <StoriesConteudo imagem={conteudo.imagem} perfil={conteudo.perfil}/>)
            }
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