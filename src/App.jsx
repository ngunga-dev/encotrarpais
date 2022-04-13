import { useState } from 'react'
import axios from 'axios';

function App() {
  const [city,setCity]=useState("");
  const [weatherForecast,setWeatherForecast]=useState(null)
  const [countryInformation,setCountryInformation]=useState()
  const [detalhe,setDetalhe]=useState(null)
  
  const fronteiras=[]
  
  async function searchCountry(){
        const urlCountry=(`https://restcountries.com/v3.1/name/${city}?fullText=true`);
        const foundCountry=await fetch(urlCountry)
        const data= await foundCountry.json()
        data.map(async(country)=>{
          console.log(country)
          const detalheis={
            name:country.name.common,
            capital:country.capital[0],
            region:country.region,
            population:country.population,
            area:country.area,
            mapa:country.maps.googleMaps,
          }
         data.forEach((country)=>{
            country.borders.forEach(async(codigo)=>{

              const newUrl= await (`https://restcountries.com/v3.1/alpha/${codigo}`);
              const response= await fetch(newUrl)
              const newData= await response.json()

              
              newData.map(async(country)=>{
                    const newCountryBords=country.name.common
                  fronteiras.push(newCountryBords)  
                  console.log(fronteiras)           
              })
              // fronteiras.push()
              // CONTINUA
              // detalheis.paisdeFronteira=fronteiras
              
            })
          })
          setDetalhe(detalheis)
        })

    }



    async function executar(){
      await searchCountry()
     await hendleSearch()
    }

  const hendleChange= (cidade)=>{
    const newCity= cidade.target.value;
    setCity(newCity)  
  }

  const hendleSearch= async()=>{

    // searchCountry(city)
    const key="f751498fffae496f911182221220304";
    const url=(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&lang=pt`)
    const response=await fetch(url)
    if(response.status===200){
      const data=await response.json()
      setWeatherForecast(data)
    }else{
      console.log("erre de ligação")
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5 ">
      <a className="navbar-brand text-white text-sm-start" href='#stop'>
        Agora Sei
      </a>

      </nav>

      <main className="container">
        <div className="jumbotrom">
            <h1>Conhece mais sobre o  pais que gostes</h1>
            <p className="lead">Digite o nome do país</p>

            <div className="row mb-4">
              {/* <div>
                <h2>ES</h2>
              <select>
                    <option value="">Escolha a sua cidade</option>
                  </select>
              </div> */}
                <div className="col-md-6">

                

                  <input
                    className="form-control"
                    onChange={hendleChange}
                    value={city}
                    placeholder="Digite o nome do país"
                    
                  />
                </div>
            </div>

        
            <button
            className="btn btn-primary btn-lg"
            onClick={executar}
            >Pesquisar</button>

            <div>
              <h2>RENDER AQUI</h2>
              {
                detalhe?(<div>
                  <p> País: {detalhe.name}</p>
                  <p> Capital: {detalhe.capital}</p>
                  <p> População: {detalhe.population}</p>
                  <p> Fronteira: {detalhe.paisdeFronteira}</p>
                  <p> Continenti: {detalhe.region}</p>
                  <p> Área: {detalhe.area}</p>
                  <p>Independecia</p>
                  <p>Lado do Motorista </p>
                  <p>Moeda do Pais</p>
                  <p>Moeda Internacional</p>
                </div>):null
              }
            </div>


          {
            weatherForecast ? (
              <div>
            <div className="mt-4 d-flex align-items-center" >
                <div >
                  <img src={weatherForecast.current.condition.icon}/>
                </div>

                <div>

                  <h3>Hoje o dia está: {weatherForecast.current.condition.text}</h3>
                  <div className="lead">
                  <p>
                    Temperatura em Celsius: {weatherForecast.current.temp_c} 
                  </p>
                  <p>
                    Temperatura em Fahrenheit: {weatherForecast.current.temp_f} 
                  </p>
                  <p>
                    Humidade: {weatherForecast.current.humidity}% 
                  </p>
                    <p>
                      Vento : {weatherForecast.current.wind_kph} km/h
                    </p>
                    <h3>Pais: {weatherForecast.location.country}</h3>
                    <p>Cidade: {weatherForecast.location.name}</p>
                    <p> 
                     Horário local: <strong>{weatherForecast.location.localtime}</strong>
                    </p>
                  </div>
                </div>
        
            </div>
          </div>
            ):null}
        </div>
      </main>
    </div>
  )
}

export default App
