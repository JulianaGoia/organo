// import { useState } from 'react';
import './CampoTexto.css'

const CampoTexto = (props) => {
    // console.log(props.label)

    // hook: manter um estado dentro de uma funçao
    // retorna 2 variaveis: o valor em si(para ler), e uma função(para escrever) que chamamos qundo queremos definir/alterar esse valor
    //um value fica atrelado a um estado e o react sabe que precisa ser renderizado de novo
    // const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        // console.log(valor);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto;