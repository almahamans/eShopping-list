import '../styles/item.scss';
import { Tooltip } from 'react-tooltip';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEllipsisH, faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';

export default function Item({item, onRemove}) { 
     const [isRed, setIsActiveRed] = useState(false)
    const [isGreen, setIsActiveGreen] = useState(false)
    const [isYell, setIsActiveYell] = useState(false)
    const [isGrey, setIsActiveGrey] = useState(false)

    const handleClickRed = () => {
        setIsActiveRed(c => !c)
        setIsActiveGreen(false)
        setIsActiveGrey(false)
        setIsActiveYell(false)
    }
    const handleClickGreen = () => {
        setIsActiveGreen(c => !c)
        setIsActiveGrey(false)
        setIsActiveYell(false)
        setIsActiveRed(false)
    }
    const handleClickYell = () => {
        setIsActiveYell(c => !c)
        setIsActiveRed(false)
        setIsActiveGreen(false)
        setIsActiveGrey(false)
    }
    const handleClickGrey = () => {
        setIsActiveGrey(c => !c)
        setIsActiveYell(false)
        setIsActiveRed(false)
        setIsActiveGreen(false)
    }  
return(
    <li className="item-style" style={{backgroundColor: isRed ? '#ff6e6e47' :  '' || isGreen ? '#6eff8947' : '' || isYell ? '#e7e95e47' : '' || isGrey ? '#aea7a73d' : ''}}>
        <span style={{textDecoration: isYell ? 'underline' : '' || isGreen ? 'line-through' : '', letterSpacing: isYell ? '3px' : '', fontWeight: isYell ? 'bold' : ''}}>
        {isRed && <FontAwesomeIcon icon={faXmark} style={{color: "#d01b1b"}}/>}
        {' '}
        {item}
        {' '}  
        {
            (isGrey && <FontAwesomeIcon icon={faEllipsisH} style={{color: "#757575"}} />) 
            ||
            (isGreen && <FontAwesomeIcon icon={faCheck} style={{color: "#369162"}} />)
            ||
            (isRed && <FontAwesomeIcon icon={faXmark} style={{color: "#d01b1b"}} />)
        }
        </span>
        <section className='status'>
        <Tooltip id="tooltip-red"/>
        <span data-tooltip-id="tooltip-red" data-tooltip-content="Uncompleted" className='red'  onClick={handleClickRed}></span>
        <Tooltip id="tooltip-green"/>
        <span data-tooltip-id="tooltip-green" data-tooltip-content="Completed" className='green' onClick={handleClickGreen}></span>
        <Tooltip id="tooltip-yellow"/>
        <span data-tooltip-id="tooltip-yellow" data-tooltip-content="Urgent" className='yellow' onClick={handleClickYell}></span>
        <Tooltip id="tooltip-grey"/>
        <span data-tooltip-id="tooltip-grey" data-tooltip-content="In progress" className='grey' onClick={handleClickGrey}></span>
        <Tooltip id="tooltip-btn"/>
        <button data-tooltip-id="tooltip-btn" data-tooltip-content="Delete" onClick={() => onRemove(item)}>X</button>
        </section>
    </li>
)
}