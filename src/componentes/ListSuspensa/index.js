import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    // map: percorre cada item desse Array, me retorna o array com os itens manipulados/diferentes
    //forEach: só vai iterar alguma coisa/uma lista

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            {/* para cada iten da lista, eu tenho um item . E  para cada item eu quero retornas uma option */}
            {/* <select>
                {props.itens.map(item => <option>{item}</option> )}
            </select> */}

            {/* <select>
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                } )}
            </select> */}

            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} required={props.obrigatorio}>
                <option value="">Selecione</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                } )}
            </select>
            
        </div>
    )
}

export default ListaSuspensa;