function Entrada(props) {
    return(
        <p>
            <label for={props.name}>{props.label} </label>
            <input type={props.tipo} name={props.name} id={props.name} placeholder={props.ph} />
        </p>
    )
}

export default Entrada;