
const TodoInput = (props) => {

    
    return (
        <div>
            <div className="List">
                <li>{props.list}</li>
                <p onClick={() => {
                    props.onSelect(props.id)   
                }}>x</p>
            </div>

            
        </div>
    )
}

export default TodoInput;

