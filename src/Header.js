export default function Header () {
    return (
        <header>
        <div class="barratopo">
          <div class="logotopo">
            <ion-icon class="iconeinsta" name="logo-instagram"></ion-icon>
            <div class="linhavertical"></div>
            <img class="logoinsta" src="./Figuras/logo.png"/>
            <a href="#">
              <ion-icon class="tamanhoicone1" name="paper-plane-outline"></ion-icon>
            </a>
          </div>
          <div class="pesquisar">
            <p>Pesquisar</p>
          </div>
          <div class="icones">
           <IconesTopo nome="paper-plane-outline"/>
           <IconesTopo nome="compass-outline"/>
           <IconesTopo nome="heart-outline"/>
           <IconesTopo nome="person-outline"/>
          </div>
        </div>
      </header>
    );
}

function IconesTopo (props) {
  return (
    <a href="#">
              <ion-icon class="tamanhoicone" name={props.nome}></ion-icon>
            </a>
  )
}