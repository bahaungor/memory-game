import './content.css'
import Card from './card'
import { useState } from 'react'

export default function Content(){
    const arr = () => [...new Set(Array.from({ length: 12 }, (_, i) => i + 1).sort(() => Math.random() - 0.5))].slice(0, 12)
    const newArr = arr().map((el) => el*3)
    const shuffleArray = arr => [...arr].sort(() => 0.5 - Math.random());

    const [order, setOrder] = useState(shuffleArray(newArr))
    const [best, setBest] = useState(0)
    const [score, setScore] = useState(0)

    return (
        <div className="content">
            <div className="scores" style={{textAlign:'center', fontSize:'1.8rem', padding:'20px'}}>
                <div className="score">Score: {score}</div>
                <div className="best">Best: {best}</div>
            </div>
            <div className="cardContainer" style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'10px'}}>
                {order.map(number => 
                <div key={number}><Card number={number}/></div>
            )}
            </div>
        </div>
    )
}