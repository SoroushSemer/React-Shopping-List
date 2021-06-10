import { useState } from 'react'

const AddItem = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [checked, setChecked] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({ text, quantity, checked })
        setText('')
        setQuantity(0)
        setChecked(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Item</label>
                <input type="text" required placeholder='Add Item' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Quantity: </label>
                <input type="number" required value={quantity} onChange={(e) => setQuantity(e.target.value)} />

            </div>
            <input type='submit' value='Save Item' className='btn btn-block' />
        </form>
    )
}


export default AddItem
