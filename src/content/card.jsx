export default function Card({number, handleClick, id}){
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    return (
        <div onClick={handleClick} className="card" style={{border:'var(--border)', cursor:'pointer'}}>
        <img style={{width:'100%'}} data-id={id} src={`${url}${number}.png`} alt="Pokemon" />
        </div>
    )
}