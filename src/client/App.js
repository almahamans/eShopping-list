import { useState, useEffect } from "react";
import Item from "./Item";
import '../styles/header.scss'
import '../styles/input-sec.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons"; 
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function App() {
//local storage variables
    let itemsStorage = JSON.parse(localStorage.getItem('items')); 
    let itemsNOStorage = JSON.parse(localStorage.getItem('countItems')); 
//usestate
    let [items, setItems] = useState(itemsStorage); //handle form data and any update by user; store it in array
    let [darkMode, setDarkMode] = useState(false); //to make dark theme
    let [lightMode, setLightMode] = useState(true); //to make light theme 
    let [countItem, setCountItem] = useState(itemsNOStorage); //to count completed tasks

//remove one item at a time
    let onRemove = (itemRemove) => {
        setItems(items.filter((i) => i !== itemRemove));
        setCountItem(countItem - 1);
    }
//handle form inputs and store it in state(array)
    let onSubmit = (e) => {
        const form = e.target;
        const input = form.item; //take name of the input feild
        const newItem = [...items, input.value];//adding new items to the exsits; easer to handle any change in the array
        setItems(newItem);
        form.reset();
    }
//keep track of items and store it in localStorage
    useEffect(()=>{
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])
//keep track of number of items and store it in localStorage
    useEffect(()=>{
        localStorage.setItem('countItems', JSON.stringify(countItem))
    }, [countItem])
//apply dark/light mode
    useEffect(() => {
        if(darkMode){
            document.body.classList.add('darkMood')
        }
    }, [darkMode])

    useEffect(() => {
        if(darkMode){
            document.body.classList.remove('darkMood')
        }
    }, [lightMode])  
 return(
    <>
    <header>
    <h1>NOTES</h1>
    <section className="icons">
    <FontAwesomeIcon icon={faMoon} onClick={()=>{ setDarkMode(!darkMode)}} />
    <FontAwesomeIcon icon={faSun}  onClick={()=>{ setLightMode(!lightMode)}}/>   
    </section>
    <p className="p">arrange your day with NOTES app</p>
    </header>
    <main id="list">
    <h2> {countItem} Notes:</h2>
    <section id="show-inputs">
    <form onSubmit={onSubmit}>
        <input type="text" name="item" placeholder="add a note" autoComplete="off" aria-labelledby="add a note" onKeyDown={(e)=>{e.key === 'Enter' && e.preventDefault();}} required />
        <button id="add-btn" onClick={()=>{items !== '' && setCountItem(countItem + 1)}} aria-pressed="true">add</button>
    </form>
    <ul id="items" aria-labelledby="items list">
        {/* make map/loop on items state to display it in list */}
    {items.map((item, index) => (
        <Item key={index} item={item} onRemove={onRemove} />
    ))}
    </ul>
    </section>
    </main>
    </>
 )
};