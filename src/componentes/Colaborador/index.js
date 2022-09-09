import './Colaborador.css'

//Outra forma de passar props:um objeto que desestrutura a props inteira e vc só pega o que precisa
const Colaborador = ({nome, cargo, imagem, corFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor:corFundo}}>
                {/* <img src='https://github.com/JulianaGoia.png' alt='Juliana Goia'></img> */}
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;