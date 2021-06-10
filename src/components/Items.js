import Item from './Item'

const Items = ({items, onDelete, onChecked}) => {
    
    return (
        <>
            {items.map((item) => (
                <Item key = {item.id} item={item} onDelete = {onDelete} onChecked = {onChecked}/>
            ))}
        </>
    )
}

export default Items
