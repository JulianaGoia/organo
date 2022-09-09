import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    // const times = [
    //     'Programação',
    //     'Front-End',
    //     'Data Science',
    //     'Devops',
    //     'UX e Design',
    //     'Mobile',
    //     'Inovação e Gestão',
    // ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    //funçao para submeter o form
    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
        // console.log('Foi submetido! =>', nome, cargo, imagem, time);

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    //recebe o valor que vem do componente e setNome(com esse valor)
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    //recebe o valor que vem do componente e setCargo(com esse valor)
                    aoAlterado={valor=> setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem"
                    placeholder="https://github.com/nome-do-usuario.png"
                    valor={imagem}
                    //recebe o valor que vem do componente e setCargo(com esse valor)
                    aoAlterado={valor=> setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.nomesDosTimes}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                 />
               <Botao>
                    <p>Criar Card</p>
               </Botao>
            </form>
        </section>
    )
}

export default Formulario;