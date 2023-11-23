import PropTypes from 'prop-types';

function MeApresente({nome}) {
    return(
        <div>
            <h1>Olá {nome}!</h1>
            <p>{nome} Você é incrível</p>
            <p>Parábens {nome} por ser assim</p>
        </div>
    )
}

MeApresente.defaultProps = {
    nome: "Sem nome"
}

export default MeApresente;