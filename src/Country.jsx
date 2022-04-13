import { useState } from 'react'

// export  async function searchCountry(city){
//     const urlCountry=`https://restcountries.com/v3.1/name/${city}?fullText=true`;
//     const foundCountry=await fetch(urlCountry)
//     const data= await foundCountry.json()
  
//     const newData=data.map(country=>console.log(country))
// }

const Country=(props)=>{
    // const [countryInformation,setCountryInformation]=useState()
    // const [detalhe,setDetalhe]=useState()
    // const city=props.city
    // async function searchCountry(){
    //     const urlCountry=await (`https://restcountries.com/v3.1/name/${city}?fullText=true`);
    //     const foundCountry=await fetch(urlCountry)
    //     const data= await foundCountry.json()
    //     const newData=data.map(country=>{

    //         const detalheis={
    //             name:country.name.common,
    //         }

    //         console.log(country)

    //         setDetalhe(setDetalhe(detalheis))
    //     })

    // }
/*
const listaDePias={
            name: pais.name.common,
            capital: pais.capital[0],
            region: pais.region,
            population: pais.population,
            area: pais.area,
            paisedeFronteira: pais.borders.map(obj=>obj),
            mapa: pais.maps.googleMaps,
        }   
        paisEncontrado.innerHTML=`
        <ul>
        <p> País: ${listaDePias.name} </p>
        <p> Capital: ${listaDePias.capital} </p>
        <p> Região: ${listaDePias.region} </p>
        <p> População: ${listaDePias.population} </p>
        <p> Área territotorial: ${listaDePias.area} </p>
        <p> Pais que fazem fronteria ${listaDePias.paisedeFronteira}</p>
        </ul>

*/
    
    return(
       <>
       <div className="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" className="sr-only">Senha</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Senha"/>
  </div>
  <button type="submit" className="btn btn-primary mb-2">Confirmar identidade</button>
       </>
    )
}

export default Country;

