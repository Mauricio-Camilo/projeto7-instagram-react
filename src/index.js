import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function PaginaInstagram () {
    return (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
    );
} 
const elemento = document.querySelector(".root");
ReactDOM.render(<PaginaInstagram />, elemento);
