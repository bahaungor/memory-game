import './content.css'
import Card from './card'
import { useState,useEffect } from 'react'

export default function Content(){
    const arr = () => [...new Set(Array.from({ length: 12 }, (_, i) => i + 1).sort(() => Math.random() - 0.5))].slice(0, 12)
    const newArr = arr().map((el) => el*3)
    const shuffleArray = arr => [...arr].sort(() => 0.5 - Math.random());

    const [order, setOrder] = useState(shuffleArray(newArr))
    const [best, setBest] = useState(0)
    const [score, setScore] = useState(0)
    const [selection, setSelection] = useState([])

    function handleClick(e){
        if (selection.includes(e.target.dataset.id)){
            console.log("same selection")
            setOrder(shuffleArray(newArr))
            setScore(0)
            setSelection([])
        } else{
            const newSelection = [...selection]
            newSelection.push(e.target.dataset.id)
            setSelection(newSelection)
            setOrder(shuffleArray(newArr))
            setScore(score+1)
        }
    }
    useEffect(() => {
        if (score >= best) setBest(score)
    }, [score, best]);
    return (
        <div className="content">
            <div className="scores" >
                <div className="score">Score: {score}</div>
                <div className="best">Best: {best}</div>
            </div>
            <div className="cardContainer">
                {order.map(number => 
                <Card handleClick={handleClick} id={number} number={number} key={number} />
            )}
            </div>
        </div>
    )
}