import Button from './Button'

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.title}</h1>
            <Button text = "Add Item" 
                color={props.showAdd ? 'red':'green'} 
                text={props.showAdd ? 'Close' : 'Add Item'} 
                onClick={props.onAdd} />
        </div>
    )
}

export default Header
