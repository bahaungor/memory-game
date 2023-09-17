import Switch from "../darkTheme/switch"
import './header.css'
import logo from '../assets/images/favicon.ico'

export default function Header(){
    
    return(
        <header>
            <div className="header">Pokémon Memory Game</div>
            <img src={logo} alt="logo"/>
            <Switch/>
        </header>
    )
}