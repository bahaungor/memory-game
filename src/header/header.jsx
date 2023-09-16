import Switch from "../darkTheme/switch"
import './header.css'

export default function Header(){
    
    return(
        <header>
            <div className="header">Pokémon Memory Game</div>
            <img src="/favicon.ico" alt="logo"/>
            <Switch/>
        </header>
    )
}