export default function Item({item, onRemove}) {
return(
    <li className="item-style">
        {item}
        <button onClick={() => onRemove(item)}>X</button>
    </li>
)
}