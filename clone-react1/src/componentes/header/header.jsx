import "./style-header.css";
import ironLogo from "../../imagens/ironhack-logo-xs.png"
import menu from "../../imagens/menu-top-xs.png"

function Header() {
    return (
      <header>
        
      <div className="Header">
      <img src={ironLogo} alt="logo" class="imgLogo" />
      <img src={menu} alt="menu" class="imgMenu" />
     
      </div>

      </header>
    );
  }
  
  export default Header;