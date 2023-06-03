import { useState } from "react";
import Item from "./Item";

export default function App() {
    let [items, setItems] = useState([])

    let onRemove = (itemRemove) => {
        setItems(items.filter((i) => i !== itemRemove));
    }

    let onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const input = form.item;
        const newItem = [...items, input.value];
        setItems(newItem);
        form.reset();
    }

 return(
    <>
    <h1>SHOPPING LIST</h1>
    <section id="list">
    <h2>Items to buy:</h2>
    <form onSubmit={onSubmit}>
        <input type="text" name="item" placeholder="add an item to the list" required />
        <button>add</button>
    </form>
    <ul>
    {items.map((item, index) => (
        <Item   key={item+index}  item={item} onRemove={onRemove} />
    ))}
    </ul>
    </section>
    </>
 )
}

