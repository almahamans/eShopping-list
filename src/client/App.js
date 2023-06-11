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
        e.preventDefault();
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
//return number of items
    let onCount = () => {
      return countItem
    }
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
    <h1>MY SHOPPING LIST</h1>
    <section className="icons">
    <FontAwesomeIcon icon={faMoon} onClick={()=>{ setDarkMode(!darkMode)}} />
    <FontAwesomeIcon icon={faSun}  onClick={()=>{ setLightMode(!lightMode)}}/>   
    </section>
    </header>
    <section id="list">
    <h2> {onCount()} Items to buy:</h2>
    <section id="show-inputs">
    <form onSubmit={onSubmit}>
        <input type="text" name="item" placeholder="add an item to the list" autoComplete="no" required />
        <button id="add-btn" onClick={()=> setCountItem(countItem + 1)}>add</button>
    </form>
    <ul id="items">
        {/* make map/loop on items state to display it in list */}
    {items.map((item, index) => (
        <Item key={item + index} item={item} onRemove={onRemove} />
    ))}
    </ul>
    </section>
    </section>
    </>
 )
};
