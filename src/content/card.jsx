export default function Card({number}){
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    return (
        <div className="card" style={{border:'var(--border)', cursor:'pointer'}}>
        <img style={{width:'300px'}} src={`${url}${number}.png`} alt="Pokemon" />
        </div>
    )
}