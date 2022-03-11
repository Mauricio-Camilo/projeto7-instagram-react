import Icones from "./Icones";

export default function Header () {
    return (
        <header>
        <div class="barratopo">
          <div class="logotopo">
            <ion-icon class="iconeinsta" name="logo-instagram"></ion-icon>
            <div class="linhavertical"></div>
            <img class="logoinsta" src="./Figuras/logo.png"/>
            <Icones nome="paper-plane-outline" classe="tamanhoicone1"/>
          </div>
          <div class="pesquisar">
            <p>Pesquisar</p>
          </div>
          <div class="icones">
           <Icones nome="paper-plane-outline" classe="tamanhoicone"/>
           <Icones nome="compass-outline" classe="tamanhoicone"/>
           <Icones nome="heart-outline" classe="tamanhoicone"/>
           <Icones nome="person-outline" classe="tamanhoicone"/>
          </div>
        </div>
      </header>
    );
}

// function IconesTopo (props) {
//   return (
//     <a href="#">
//               <ion-icon class="tamanhoicone" name={props.nome}></ion-icon>
//             </a>
//   )
// }