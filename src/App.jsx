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
  const [moeda,setMoeda]=useState(null)


  const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
      code: 'AU',
      label: 'Australia',
      phone: '61',
      suggested: true,
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
      code: 'BA',
      label: 'Bosnia and Herzegovina',
      phone: '387',
    },
    { code: 'BB', label: 'Barbados', phone: '1-246' },
    { code: 'BD', label: 'Bangladesh', phone: '880' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BF', label: 'Burkina Faso', phone: '226' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'BH', label: 'Bahrain', phone: '973' },
    { code: 'BI', label: 'Burundi', phone: '257' },
    { code: 'BJ', label: 'Benin', phone: '229' },
    { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
    { code: 'BM', label: 'Bermuda', phone: '1-441' },
    { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
    { code: 'BO', label: 'Bolivia', phone: '591' },
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'BS', label: 'Bahamas', phone: '1-242' },
    { code: 'BT', label: 'Bhutan', phone: '975' },
    { code: 'BV', label: 'Bouvet Island', phone: '47' },
    { code: 'BW', label: 'Botswana', phone: '267' },
    { code: 'BY', label: 'Belarus', phone: '375' },
    { code: 'BZ', label: 'Belize', phone: '501' },
    {
      code: 'CA',
      label: 'Canada',
      phone: '1',
      suggested: true,
    },
    {
      code: 'CC',
      label: 'Cocos (Keeling) Islands',
      phone: '61',
    },
    {
      code: 'CD',
      label: 'Congo, Democratic Republic of the',
      phone: '243',
    },
    {
      code: 'CF',
      label: 'Central African Republic',
      phone: '236',
    },
    {
      code: 'CG',
      label: 'Congo, Republic of the',
      phone: '242',
    },
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
    { code: 'CK', label: 'Cook Islands', phone: '682' },
    { code: 'CL', label: 'Chile', phone: '56' },
    { code: 'CM', label: 'Cameroon', phone: '237' },
    { code: 'CN', label: 'China', phone: '86' },
    { code: 'CO', label: 'Colombia', phone: '57' },
    { code: 'CR', label: 'Costa Rica', phone: '506' },
    { code: 'CU', label: 'Cuba', phone: '53' },
    { code: 'CV', label: 'Cape Verde', phone: '238' },
    { code: 'CW', label: 'Curacao', phone: '599' },
    { code: 'CX', label: 'Christmas Island', phone: '61' },
    { code: 'CY', label: 'Cyprus', phone: '357' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    {
      code: 'DE',
      label: 'Germany',
      phone: '49',
      suggested: true,
    },
    { code: 'DJ', label: 'Djibouti', phone: '253' },
    { code: 'DK', label: 'Denmark', phone: '45' },
    { code: 'DM', label: 'Dominica', phone: '1-767' },
    {
      code: 'DO',
      label: 'Dominican Republic',
      phone: '1-809',
    },
    { code: 'DZ', label: 'Algeria', phone: '213' },
    { code: 'EC', label: 'Ecuador', phone: '593' },
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'EG', label: 'Egypt', phone: '20' },
    { code: 'EH', label: 'Western Sahara', phone: '212' },
    { code: 'ER', label: 'Eritrea', phone: '291' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'ET', label: 'Ethiopia', phone: '251' },
    { code: 'FI', label: 'Finland', phone: '358' },
    { code: 'FJ', label: 'Fiji', phone: '679' },
    {
      code: 'FK',
      label: 'Falkland Islands (Malvinas)',
      phone: '500',
    },
    {
      code: 'FM',
      label: 'Micronesia, Federated States of',
      phone: '691',
    },
    { code: 'FO', label: 'Faroe Islands', phone: '298' },
    {
      code: 'FR',
      label: 'France',
      phone: '33',
      suggested: true,
    },
    { code: 'GA', label: 'Gabon', phone: '241' },
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'GD', label: 'Grenada', phone: '1-473' },
    { code: 'GE', label: 'Georgia', phone: '995' },
    { code: 'GF', label: 'French Guiana', phone: '594' },
    { code: 'GG', label: 'Guernsey', phone: '44' },
    { code: 'GH', label: 'Ghana', phone: '233' },
    { code: 'GI', label: 'Gibraltar', phone: '350' },
    { code: 'GL', label: 'Greenland', phone: '299' },
    { code: 'GM', label: 'Gambia', phone: '220' },
    { code: 'GN', label: 'Guinea', phone: '224' },
    { code: 'GP', label: 'Guadeloupe', phone: '590' },
    { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    { code: 'GR', label: 'Greece', phone: '30' },
    {
      code: 'GS',
      label: 'South Georgia and the South Sandwich Islands',
      phone: '500',
    },
    { code: 'GT', label: 'Guatemala', phone: '502' },
    { code: 'GU', label: 'Guam', phone: '1-671' },
    { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    { code: 'GY', label: 'Guyana', phone: '592' },
    { code: 'HK', label: 'Hong Kong', phone: '852' },
    {
      code: 'HM',
      label: 'Heard Island and McDonald Islands',
      phone: '672',
    },
    { code: 'HN', label: 'Honduras', phone: '504' },
    { code: 'HR', label: 'Croatia', phone: '385' },
    { code: 'HT', label: 'Haiti', phone: '509' },
    { code: 'HU', label: 'Hungary', phone: '36' },
    { code: 'ID', label: 'Indonesia', phone: '62' },
    { code: 'IE', label: 'Ireland', phone: '353' },
    { code: 'IL', label: 'Israel', phone: '972' },
    { code: 'IM', label: 'Isle of Man', phone: '44' },
    { code: 'IN', label: 'India', phone: '91' },
    {
      code: 'IO',
      label: 'British Indian Ocean Territory',
      phone: '246',
    },
    { code: 'IQ', label: 'Iraq', phone: '964' },
    {
      code: 'IR',
      label: 'Iran, Islamic Republic of',
      phone: '98',
    },
    { code: 'IS', label: 'Iceland', phone: '354' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'JE', label: 'Jersey', phone: '44' },
    { code: 'JM', label: 'Jamaica', phone: '1-876' },
    { code: 'JO', label: 'Jordan', phone: '962' },
    {
      code: 'JP',
      label: 'Japan',
      phone: '81',
      suggested: true,
    },
    { code: 'KE', label: 'Kenya', phone: '254' },
    { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { code: 'KH', label: 'Cambodia', phone: '855' },
    { code: 'KI', label: 'Kiribati', phone: '686' },
    { code: 'KM', label: 'Comoros', phone: '269' },
    {
      code: 'KN',
      label: 'Saint Kitts and Nevis',
      phone: '1-869',
    },
    {
      code: 'KP',
      label: "Korea, Democratic People's Republic of",
      phone: '850',
    },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    {
      code: 'LA',
      label: "Lao People's Democratic Republic",
      phone: '856',
    },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    {
      code: 'MD',
      label: 'Moldova, Republic of',
      phone: '373',
    },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    {
      code: 'MF',
      label: 'Saint Martin (French part)',
      phone: '590',
    },
    { code: 'MG', label: 'Madagascar', phone: '261' },
    { code: 'MH', label: 'Marshall Islands', phone: '692' },
    {
      code: 'MK',
      label: 'Macedonia, the Former Yugoslav Republic of',
      phone: '389',
    },
    { code: 'ML', label: 'Mali', phone: '223' },
    { code: 'MM', label: 'Myanmar', phone: '95' },
    { code: 'MN', label: 'Mongolia', phone: '976' },
    { code: 'MO', label: 'Macao', phone: '853' },
    {
      code: 'MP',
      label: 'Northern Mariana Islands',
      phone: '1-670',
    },
    { code: 'MQ', label: 'Martinique', phone: '596' },
    { code: 'MR', label: 'Mauritania', phone: '222' },
    { code: 'MS', label: 'Montserrat', phone: '1-664' },
    { code: 'MT', label: 'Malta', phone: '356' },
    { code: 'MU', label: 'Mauritius', phone: '230' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'MW', label: 'Malawi', phone: '265' },
    { code: 'MX', label: 'Mexico', phone: '52' },
    { code: 'MY', label: 'Malaysia', phone: '60' },
    { code: 'MZ', label: 'Mozambique', phone: '258' },
    { code: 'NA', label: 'Namibia', phone: '264' },
    { code: 'NC', label: 'New Caledonia', phone: '687' },
    { code: 'NE', label: 'Niger', phone: '227' },
    { code: 'NF', label: 'Norfolk Island', phone: '672' },
    { code: 'NG', label: 'Nigeria', phone: '234' },
    { code: 'NI', label: 'Nicaragua', phone: '505' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'NO', label: 'Norway', phone: '47' },
    { code: 'NP', label: 'Nepal', phone: '977' },
    { code: 'NR', label: 'Nauru', phone: '674' },
    { code: 'NU', label: 'Niue', phone: '683' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'OM', label: 'Oman', phone: '968' },
    { code: 'PA', label: 'Panama', phone: '507' },
    { code: 'PE', label: 'Peru', phone: '51' },
    { code: 'PF', label: 'French Polynesia', phone: '689' },
    { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { code: 'PH', label: 'Philippines', phone: '63' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
    { code: 'PL', label: 'Poland', phone: '48' },
    {
      code: 'PM',
      label: 'Saint Pierre and Miquelon',
      phone: '508',
    },
    { code: 'PN', label: 'Pitcairn', phone: '870' },
    { code: 'PR', label: 'Puerto Rico', phone: '1' },
    {
      code: 'PS',
      label: 'Palestine, State of',
      phone: '970',
    },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'PW', label: 'Palau', phone: '680' },
    { code: 'PY', label: 'Paraguay', phone: '595' },
    { code: 'QA', label: 'Qatar', phone: '974' },
    { code: 'RE', label: 'Reunion', phone: '262' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RW', label: 'Rwanda', phone: '250' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'SB', label: 'Solomon Islands', phone: '677' },
    { code: 'SC', label: 'Seychelles', phone: '248' },
    { code: 'SD', label: 'Sudan', phone: '249' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'SH', label: 'Saint Helena', phone: '290' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    {
      code: 'SJ',
      label: 'Svalbard and Jan Mayen',
      phone: '47',
    },
    { code: 'SK', label: 'Slovakia', phone: '421' },
    { code: 'SL', label: 'Sierra Leone', phone: '232' },
    { code: 'SM', label: 'San Marino', phone: '378' },
    { code: 'SN', label: 'Senegal', phone: '221' },
    { code: 'SO', label: 'Somalia', phone: '252' },
    { code: 'SR', label: 'Suriname', phone: '597' },
    { code: 'SS', label: 'South Sudan', phone: '211' },
    {
      code: 'ST',
      label: 'Sao Tome and Principe',
      phone: '239',
    },
    { code: 'SV', label: 'El Salvador', phone: '503' },
    {
      code: 'SX',
      label: 'Sint Maarten (Dutch part)',
      phone: '1-721',
    },
    {
      code: 'SY',
      label: 'Syrian Arab Republic',
      phone: '963',
    },
    { code: 'SZ', label: 'Swaziland', phone: '268' },
    {
      code: 'TC',
      label: 'Turks and Caicos Islands',
      phone: '1-649',
    },
    { code: 'TD', label: 'Chad', phone: '235' },
    {
      code: 'TF',
      label: 'French Southern Territories',
      phone: '262',
    },
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
    { code: 'TN', label: 'Tunisia', phone: '216' },
    { code: 'TO', label: 'Tonga', phone: '676' },
    { code: 'TR', label: 'Turkey', phone: '90' },
    {
      code: 'TT',
      label: 'Trinidad and Tobago',
      phone: '1-868',
    },
    { code: 'TV', label: 'Tuvalu', phone: '688' },
    {
      code: 'TW',
      label: 'Taiwan, Province of China',
      phone: '886',
    },
    {
      code: 'TZ',
      label: 'United Republic of Tanzania',
      phone: '255',
    },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'UG', label: 'Uganda', phone: '256' },
    {
      code: 'US',
      label: 'United States',
      phone: '1',
      suggested: true,
    },
    { code: 'UY', label: 'Uruguay', phone: '598' },
    { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    {
      code: 'VA',
      label: 'Holy See (Vatican City State)',
      phone: '379',
    },
    {
      code: 'VC',
      label: 'Saint Vincent and the Grenadines',
      phone: '1-784',
    },
    { code: 'VE', label: 'Venezuela', phone: '58' },
    {
      code: 'VG',
      label: 'British Virgin Islands',
      phone: '1-284',
    },
    {
      code: 'VI',
      label: 'US Virgin Islands',
      phone: '1-340',
    },
    { code: 'VN', label: 'Vietnam', phone: '84' },
    { code: 'VU', label: 'Vanuatu', phone: '678' },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
    { code: 'WS', label: 'Samoa', phone: '685' },
    { code: 'XK', label: 'Kosovo', phone: '383' },
    { code: 'YE', label: 'Yemen', phone: '967' },
    { code: 'YT', label: 'Mayotte', phone: '262' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'ZM', label: 'Zambia', phone: '260' },
    { code: 'ZW', label: 'Zimbabwe', phone: '263' },
  ];

  let paisesF = [];
  

  async function searchCountry() {
    const urlCountry = `https://restcountries.com/v3.1/name/${city}?fullText=true`;
    const foundCountry = await fetch(urlCountry);
    if (foundCountry.status === 404) return alert(`
      Pais não encontrado.
      Tenta escrever o  país em inglês!!!
      `);
    

    const data = await foundCountry.json();
    await data.map(async (country) => {
      // Lista de linguas
      data.forEach(async (country) => {
        const linguas = await country.languages;
        const moedasPais= await country.currencies
        
        for(let mode in moedasPais){
          const obj={
            moedaLocal:moedasPais[mode].name,
            simbolo:moedasPais[mode].symbol
          }
          setMoeda(()=>obj)
        }

        // console.log(moeda)

        const listLingua = [];
        for (let lang in linguas) {
          listLingua.push(linguas[lang]);
          setLingua(() => listLingua.map((langs) => langs));
        }
      });

      // console.log(country);
      
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
        }
      });

      setDetalhe(detalheis);
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
      <a className="navbar-brand" href="https://github.com/ngunga-dev/encotrarpais" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      <small className="text-white"> GitHub</small>
    </a>
    </div>
      </nav>

      <main className="container">
        <div className="jumbotrom">
          <div className="col-md-6 offset-md-3 text-center">
            <br></br>
            <br></br>
            <br></br>
            <h2
            >Conheça sobre o país!</h2>
            <br></br>
            <br></br>
            
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
                list="paises"
                value={city}
                placeholder="Digite o nome do país"
              />
              <datalist id="paises">
                {
                  countries.map((valor,index)=>(
                    <option key={index} value={valor.label} />
                  ))
                }
              </datalist>
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
                        <strong>Capital:</strong> {detalhe.capital}
                      </p>
                      <p>
                        {" "}
                        <strong>População:</strong> {detalhe.population.toLocaleString()}
                      </p>
                      <p>
                        {" "}
                        <strong>Continente:</strong> {detalhe.region}
                      </p>
                      <p>
                        {" "}
                        <strong>Extensão Territorial :</strong> {detalhe.area.toLocaleString()}{" "}
                        km²
                      </p>
                      <p>
                        {" "}
                        <strong>Independência :</strong> 
                        {detalhe.independencia ? "Sim" : "Não"}
                      </p>
                      <p>
                        {" "}
                        <strong>Lado do Motorista:</strong> {" "}
                        {detalhe.ladoMotorista === "right"
                          ? "Direito"
                          : "Esquerdo"}
                      </p>
                      {/* <p>Moeda do Pais :{`${detalhe.currencies.AOA.name}`}</p> */}
                      <p> <strong>Moeda :</strong>{
                        moeda?(
                          <p>
                            {moeda.moedaLocal}
                             <strong>
                            {moeda.simbolo}
                            </strong> 
                          </p>
                        ):null
                      } </p>
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
                        <p>
                          <strong>
                          Hoje o dia está:{" "}
                          {weatherForecast.current.condition.text}
                          </strong>
                        </p>
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
                          <p>Cidade: {detalhe.capital}</p>
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
                    >Paises que fazem fronteira</h3>
                      {fronteiras.map((nome, index) => (
                        <li className="list-group-item lead" key={index}>
                          {nome}
                        </li>
                      ))}
                    </ul>

                    <ul className="list-group col-sm">
                      <h3
                      className="text-center"
                      >Idioma</h3>
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
