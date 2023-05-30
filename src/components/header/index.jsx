import { useState } from 'react';
import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState();



function calcula(e) {
        e.preventDefault();
        return setResultado(peso / (altura * altura));
    }

    return (
        <>
        <div className="container">
            <h1>Cálculo IMC</h1>
            <div>
                <form>
                    <label htmlFor="altura">Altura:</label>
                    <input type="number" id='altura' step="any" onChange={e => setAltura(parseFloat(e.target.value))} placeholder='metros' required/>
                    <label htmlFor="peso">Peso:</label>
                    <input type="number" id='peso' onChange={e => setPeso(parseFloat(e.target.value))} placeholder='kilos' required/>
                    <button onClick={calcula}>Calcular</button>
                    <button onClick={() => {setAltura(''); setPeso('')}}>Limpar</button>
                </form>
            </div>
            <div>
                {resultado ? (
                    <h2>Seu IMC: {Number(resultado).toFixed(2)}</h2>
                ) : (<h2></h2>)}
            </div>
        </div>
        </>
    )
}

export default Header;