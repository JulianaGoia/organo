import './Rodape.css'

const Rodape = () => {
    return (
        <section className='app-rodape'>
            <div className='icones'>
                <img src='/images/fb.png' alt='facebook'></img>
                <img src='/images/tw.png' alt='twitter'></img>
                <img src='/images/ig.png' alt='instagram'></img>
            </div>
            <div className='logo'>
                <img src='/images/logo.png' alt='logo'></img>
            </div>
            <div className='texto'>
                <p>Desenvolvido por Alura.</p>
            </div>
        </section>
    )
}

export default Rodape;