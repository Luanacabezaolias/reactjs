import {} from 'react'
import Imagem from './assets/barbie.jfif'
import './Cabecalho.css'

function Cabecalho(){

    const aluno = "Luana";
    const curso = "Engenharia";
    return(
        <>
        <h1>Este é o Cabeçalho</h1>
        <p>{aluno}</p>
        <p>{curso}</p>
        <img src={Imagem} title="Barbie"/>
        </>
    )
}
export default Cabecalho