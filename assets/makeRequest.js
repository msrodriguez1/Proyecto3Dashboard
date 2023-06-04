export const makeRequest= async(origen, destino)=>{
    const respuesta = await axios.get(`https://api.unhcr.org/rsq/v1/demographics?page=1&year=2014%2C2015%2C2016%2C2017%2C2018%2C2019%2C2020%2C2021%2C2022%2C2023&origin=${origen}&resettlement=${destino}`); 
    if(respuesta.status==200){
        const datos= respuesta.data.results;
        console.log(datos)
        return(datos)
    }else{
        console.log('fallo')
    }

}