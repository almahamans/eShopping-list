import '../styles/item.scss';
import { Tooltip } from 'react-tooltip';
import { useState, useEffect } from "react";

export default function Item({item, onRemove}) {
    // const redItems = JSON.parse(localStorage.getItem('redItem'))
    // const greenItems = JSON.parse(localStorage.getItem('greenItem'))
    // const yelloItems = JSON.parse(localStorage.getItem('yellItem'))
    // const greyItems = JSON.parse(localStorage.getItem('greyItem'))
    
    const [red, setRed] = useState(false)
    const [green, setGreen] = useState(false)
    const [yellow, setYell] = useState(false)
    const [grey, setGrey] = useState(false)
//red status
    const onRed = () => {
        if(!red){
        document.body.classList.add('redBg')
        setRed(true)        
    } else {
        document.body.classList.remove('redBg')
        setRed(false)
        }
    }
    // useEffect(()=>{
    //     localStorage.setItem('redItem', JSON.stringify(red))
    // },[red])
//green status
    const onGreen = () => {
        if(!green){
          document.body.classList.add('greenBg')
          setGreen(true)  
        } else {
        document.body.classList.remove('greenBg')
        setGreen(false) 
        }   
    }
    // useEffect(()=>{
    //     localStorage.setItem('greenItem', JSON.stringify(green))
    // },[green])
//yellow status
    const onYell = () => {
        if(!yellow){
           document.body.classList.add('yellBg')
           setYell(true) 
        } else {
            document.body.classList.remove('yellBg')
            setYell(false) 
        }  
    }
    // useEffect(()=>{
    //     localStorage.setItem('yellItem', JSON.stringify(yellow))
    // },[yellow])
//grey status
    const onGrey = () => {
        if(!grey){
         document.body.classList.add('greyBg')
         setGrey(true)   
        } else {
            document.body.classList.remove('greyBg')
            setGrey(false)   
        }  
    }
    // useEffect(()=>{
    //     localStorage.setItem('greyItem', JSON.stringify(grey))
    // },[grey])

    
return(
    <li className="item-style">
        {item}
        <section className='status'>
        <Tooltip id="tooltip-red"/>
        <span data-tooltip-id="tooltip-red" data-tooltip-content="Uncompleted" className='red' onClick={onRed}></span>
        <Tooltip id="tooltip-green"/>
        <span data-tooltip-id="tooltip-green" data-tooltip-content="Completed" className='green' onClick={onGreen}></span>
        <Tooltip id="tooltip-yellow"/>
        <span data-tooltip-id="tooltip-yellow" data-tooltip-content="Urgent" className='yellow' onClick={onYell}></span>
        <Tooltip id="tooltip-grey"/>
        <span data-tooltip-id="tooltip-grey" data-tooltip-content="Inprogress" className='grey' onClick={onGrey}></span>
        <Tooltip id="tooltip-btn"/>
        <button data-tooltip-id="tooltip-btn" data-tooltip-content="Delete" onClick={() => onRemove(item)}>X</button>
        </section>
    </li>
)
}