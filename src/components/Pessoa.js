import PropTypes from 'prop-types'
import styles from './Pessoa.components.css'

function Pessoa({nome, idade, foto, profissao, alt}) {
    return(
        <div className="fundo">
            <p>Seu nome é {nome}</p>
            <p>Você tem {idade} anos</p>
            <img src={foto} alt={alt} />
            <p>Sua profissão é {profissao}</p>
        </div>
    )
}
// Tipos e valores obrigatórios:
Pessoa.propTypes = {
    nome: PropTypes.string.isRequired, // texto é obrigatório
    idade: PropTypes.number // número
}

//Valores padrões obrigatórios:
Pessoa.defaultProps = {
    nome: "Sem nome",
    idade: "Sem idade",
    foto: "https://placehold.co/400",
    profissao: "Desempregado"
}

export default Pessoa

