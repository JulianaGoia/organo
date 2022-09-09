import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    // const css = {backgroundColor: props.corSecundaria}

    return (
        // <section className='time' style={css}>
        //     <h3>{props.nome}</h3>
        // </section>

        (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corFundo={props.corPrimaria} />)}
        </div>
    </section> : ''

    )
}

export default Time;