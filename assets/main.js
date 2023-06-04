
import {makeRequest} from './makeRequest.js'
import {suma, resta} from './prueba.js' 
import {graph} from './graph.js'
import {formatData} from './datosFormateados.js'


const button =document.getElementById('consultar')
const pais_origen =document.getElementById('pais_origen')
const pais_destino =document.getElementById('pais_destino')


const handdleRequest = async() =>{
    const origen= pais_origen.value;
    const destino= pais_destino.value;


    try{
        const datos= await makeRequest(origen, destino)
        const g =document.getElementById('Grafico')    
        const gnino =document.getElementById('Grafico_niños')       
        const gadult =document.getElementById('Grafico_adulto')       
        const gmayor =document.getElementById('Grafico_mayor')        
        const datosFormateados = formatData(datos)
        graph(datosFormateados,g,gnino,gadult,gmayor)
        console.log(datosFormateados)
    } catch(error){
        console.log(error)
    }
    
}




button.addEventListener('click', handdleRequest)