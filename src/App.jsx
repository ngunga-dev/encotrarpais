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
        console.log(listLingua);
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
    <div>
      <nav className="navbar navbar-expand-sm bg-primary">
          <div className="container">
      <a className="navbar-brand" href="https://github.com/ngunga-dev/encotrarpais">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      <small className="text-white"> GitHub</small>
    </a>
    </div>
      </nav>

      <main className="container">
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

          <div className="container">
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
            <div className="container">
              <div className="row justify-content-around">
              <div className="col-sm">
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
                        <strong></strong> Independência :
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

              <div className="col-sm">
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

              </div>

              <div className="container">
                {detalhe ? (
                  <div className="row justify-content-around">
                    <ul className="list-group col-sm">
                    <h3
                    className="text-center"
                    >Fronteira com {detalhe.name}</h3>
                      {fronteiras.map((nome, index) => (
                        <li className="list-group-item lead" key={index}>
                          {nome}
                        </li>
                      ))}
                    </ul>

                    <ul className="list-group col-sm">
                      <h3
                      className="text-center"
                      >Linguas mais faladas {detalhe.name} </h3>
                      {lingua.map((nome, index) => (
                        <li className="list-group-item lead" key={index}>
                          {nome}
                        </li>
                      ))}
                    </ul>
                    <br></br>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <footer className="navbar footer footer-fixed  navbar-primary bg-primary  content container">
        <p>Footer Text</p>
      </footer> */}
  
    </div>
  );
}

export default App;
