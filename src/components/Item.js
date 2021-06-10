import { FaTrash } from 'react-icons/fa'

const Item = (props) => {

    return (
        <div className={props.item.checked ? 'item checked' : 'item'}  onDoubleClick={() => props.onChecked(props.item.id)}>
            <h3>
                {props.item.text} <FaTrash style={{ color: 'red', cursor: 'pointer' }} onClick={() => props.onDelete(props.item.id)} />
            </h3>
            <p>Quantity: {props.item.quantity} </p>
        </div>
    )
}


export default Item
