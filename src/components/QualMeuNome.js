import {useState} from 'react'

function QualMeuNome() {

    const[nome, mudaNome] = useState();

    return(
        <div>
            <label htmlFor="nome">Nome: </label>
            <input onKeyUp={(e) => mudaNome(e.target.value)} type="text" id="nome" name="nome" maxLength="10"></input>
            <br />
            <p>Seu nome é: {nome}</p>
        </div>
    )
}

export default QualMeuNome;