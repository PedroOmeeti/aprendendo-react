import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";

function Calculadora() {
    
    // Variáveis:
    const [numero1, setNumero1] = useState();
    const [numero2, setNumero2] = useState();
    const [resultado, setResultado] = useState();
    
    function calcular() {
        setResultado(parseFloat(numero1) + parseFloat(numero2))
    }
    return(
        <div>
            <p>
                <label htmlFor="n1">Número 1: </label>
                <input onChange={(e) => setNumero1(e.target.value)} type="number" id="n1" name="n1" />
            </p>
            <p>
                <label htmlFor="n2">Número 2: </label>
                <input onChange={(e) => setNumero2(e.target.value)} type="number" id="n2" name="n2" />
            </p>
            <p>
                <Button onClick={calcular} color="primary">Calcular</Button>
            </p>
            <p>Resultado: {resultado}</p>
        </div>
    )
}

export default Calculadora