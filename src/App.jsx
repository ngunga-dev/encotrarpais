import { useState, useEffect } from "react";

// import axios from "axios";
import "./reset.css";
function App() {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [countryInformation, setCountryInformation] = useState("");
  const [lingua, setLingua] = useState([]);
  const [detalhe, setDetalhe] = useState(null);
  const [fronteiras, setFronteiras] = useState([]);

  // const CountryBordrs = async ()=>{
  //   return (
  //     await fronteiras.map((nome,index)=>(<li key={index}>{nome}</li>))
  //   )
  // }
  useEffect(() => {
    // searchCountry()
  });
  let paisesF = [];

  async function searchCountry() {
    const urlCountry = `https://restcountries.com/v3.1/name/${city}?fullText=true`;
    const foundCountry = await fetch(urlCountry);
    if (foundCountry.status === 404) {
      setCountryInformation("Pais não encontrado");
      console.log(countryInformation);
    }

    const data = await foundCountry.json();
    await data.map((country) => {
      // Lista de linguas
      data.forEach(async (country) => {
        const linguas = await country.languages;
        const listLingua = [];
        for (let lang in linguas) {
          listLingua.push(linguas[lang]);
          setLingua(() => listLingua.map((langs) => langs));
        }
        console.log(lingua);
      });

      console.log(country);

      const detalheis = {
        name: country.name.common,
        capital: country.capital[0],
        bandeira: country.flags.svg,
        region: country.region,
        independencia: country.independent,
        population: country.population,
        ladoMotorista: country.car.side,
        area: country.area,
        mapa: country.maps.googleMaps,
      };

      // Listar as fronteiras

      country.borders.forEach(async (codigo) => {
        const newUrl = `https://restcountries.com/v3.1/alpha/${codigo}`;
        const response = await fetch(newUrl);
        if (response.status === 200) {
          const newData = await response.json();
          newData.forEach(async (country) => {
            const f = await country.name.common;
            paisesF.push(f);
          });
          setFronteiras(() => paisesF.map((value) => value));
          console.log(paisesF);
        }
      });

      setDetalhe(detalheis);
      console.log(detalheis);
    });
  }

  async function executar() {
    await searchCountry();
    await hendleSearch();
  }

  const hendleChange = (cidade) => {
    const newCity = cidade.target.value;
    setCity(newCity);
  };

  const hendleSearch = async () => {
    // searchCountry(city)
    const key = "f751498fffae496f911182221220304";
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&lang=pt`;
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      setWeatherForecast(data);
    } else {
      console.log("erro de ligação");
    }
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-primary bg-primary mb-5 ">
        <div className="d-flex justify-content-between textAlign: center">
          <h3 className="col-md-6 text-center text-white"></h3>
        </div>
      </nav>

      <main className="container-fluid">
        <div className="jumbotrom">
          <div className="col-md-6 offset-md-3 text-center">
            <h2>Conheça mais sobre os paises!</h2>
            <p>Sabedoria vem do aprender!</p>
            {/* <p className="lead">Digite o nome do país</p> */}
          </div>

          <div className="row mb-4">
            {/* <div>
                <h2>ES</h2>
              <select>
                    <option value="">Escolha a sua cidade</option>
                  </select>
              </div> */}
            <div className="col-md-6 offset-md-3  d-flex justify-content-between ">
              <input
                className="form-control mr-3 mb-2 "
                onChange={hendleChange}
                value={city}
                placeholder="Digite o nome do país"
              />
              <button
                className="btn btn-primary btn-lg mb-2"
                align="center"
                onClick={executar}
              >
                Pesquisar
              </button>
            </div>
          </div>

          <div className="container-fluid">
            <div>
              {detalhe ? (
                <div className="col-md-6 offset-md-3 text-center flex-wrap" display="flex" justifyContent="between">
                  <br></br>
                  <br></br>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    <h1>Detalhes sobre {detalhe.name}</h1>
                    <br></br>
                  </span>
                  <span>
                    <img src={detalhe.bandeira} width="60" height="50" />
                  </span>
                </div>
              ) : null}
            </div>
            <div className="container-fluid row align-items-center justify-content-center">
              <div className="col-6">
                <div>
                  {detalhe ? (
                    <div className="lead">
                      <p>
                        {" "}
                        <strong>País:</strong> {detalhe.name}
                      </p>
                      <p>
                        {" "}
                        <strong>Capital:</strong> {detalhe.capital}
                      </p>
                      <p>
                        {" "}
                        <strong>População:</strong> {detalhe.population}
                      </p>
                      <p>
                        {" "}
                        <strong>Continente:</strong> {detalhe.region}
                      </p>
                      <p>
                        {" "}
                        <strong></strong> Extensão Territorial : {detalhe.area}{" "}
                        km²
                      </p>
                      <p>
                        {" "}
                        <strong></strong> Independecia :
                        {detalhe.independencia ? "Sim" : "Não"}
                      </p>
                      <p>
                        {" "}
                        <strong></strong> Lado do Motorista:{" "}
                        {detalhe.ladoMotorista === "right"
                          ? "Direito"
                          : "Esquerdo"}
                      </p>
                      {/* <p>Moeda do Pais :{`${detalhe.currencies.AOA.name}`}</p> */}
                      <p>Moeda Internacional</p>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="col-6">
                {weatherForecast ? (
                  <div>
                    <div className="mt-4 d-flex align-items-center">
                      <div>
                        <img src={weatherForecast.current.condition.icon} />
                      </div>

                      <div>
                        <h3>
                          Hoje o dia está:{" "}
                          {weatherForecast.current.condition.text}
                        </h3>
                        <div className="lead">
                          <p>
                            Temperatura em Celsius:{" "}
                            {weatherForecast.current.temp_c} °C
                          </p>
                          <p>
                            Temperatura em Fahrenheit:{" "}
                            {weatherForecast.current.temp_f} °F
                          </p>
                          <p>Humidade: {weatherForecast.current.humidity}%</p>
                          <p>Vento : {weatherForecast.current.wind_kph} km/h</p>
                          {/* <h3>Pais: {weatherForecast.location.country}</h3> */}
                          <p>Cidade: {weatherForecast.location.name}</p>
                          <p>
                            Horário local:{" "}
                            <strong>
                              {weatherForecast.location.localtime}
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div>
                {detalhe ? (
                  <div className="col-md-6 offset-md-3 text-center">
                    <h2>Paises que fazem fronteira com {detalhe.name}</h2>
                    <ul className="list-group ">
                      {fronteiras.map((nome, index) => (
                        <li className="list-group-item" key={index}>
                          {nome}
                        </li>
                      ))}
                    </ul>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="navbar footer footer-fixed  navbar-primary bg-primary  content container-fluid">
        <p>Footer Text</p>
      </footer>
  
    </div>
  );
}

export default App;
