import "./Form.css";
import axios from 'axios';
import { Link } from "react-router-dom";

import videoContinent from "../../assets/continents.mp4"

import swal from "sweetalert";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Form = () => {

	let countries = useSelector((state) => state.countriesOrigin);

	let countriesOrder = countries.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});


	 const [myForm, setMyForm] = useState({
    name: "",
    duration: "",
  });
	const [season, setSeason] = useState([])
	const [countriesName, setCountriesName] = useState([]);
	const [countriesId, setCountriesId] = useState([]);
	const [difficulty, setDifficulty] = useState("1");

	const handleInputChange = (event) => {
    console.log("name",event.target.name, "value",event.target.value)
		setMyForm({
    	...myForm, [event.target.name]: event.target.value
    })
  };

  const handleDifficulyChange = (e) => {
  	setDifficulty(e.target.value);
  }
  const handleSeason = (event) => {
  	if(event.target.checked){
  		let exist = season.find((element) => element == event.target.value);
  		if(exist) return;
  		setSeason(...season, event.target.value)
  	}
  	if(!event.target.checked){
  		let deleteSeason = countriesId.filter((element) => element != event.target.value);
      setSeason(deleteSeason);
  	}
  }
  const handleCountrie = (event) => {	
  	if(event.target.checked){
  		let data = event.target.value;
      let exist = countriesId.find((element) => element === data);
      if (exist) return;
  		setCountriesId([...countriesId, event.target.value])
  		setCountriesName([...countriesName, event.target.name])
  	}
  	if(!event.target.checked){
  		let dataId = event.target.value;
      let deleteId = countriesId.filter((element) => element !== dataId);
      setCountriesId(deleteId);

  		let data = event.target.name;
      let exist = countriesName.filter((element) => element !== data);
      setCountriesName(exist);
  	}
  }

	const handleSubmit = (e) => {
		e.preventDefault();
    axios.post("/activity", {
      name: myForm.name,
      difficulty: difficulty,
      duration: myForm.duration,
      season: season,
      CountryId: countriesId,
    });

    // "Reseteamos" nuestros estados, lo volvemos a su estado inicial
    e.target.reset();
     swal({
      title: "Actividad creada correctamente!",
      icon: "success",
      button: "Aceptar",
    });
    setCountriesId([])
    setDifficulty([])
    setSeason([]);
    setCountriesName([]);
    setMyForm({
      name: "",
      duration: "",
    });
	}


	return (
		<section className="section_form">
			<div className="backgroundSectionForm">
      			<video className="videoContinentsForm" src={videoContinent} autoPlay muted loop data-aos="fade-down"
     				data-aos-easing="linear"/>
    		</div>

			
			<div className="bg-section_form">
				
				<div className="bg-container_form">
					
				<div className="container-headForm">
					<h1>Crear Actividad</h1>
					<h2><Link to="/home" className="styleLinkForm">Atrás</Link></h2>
				</div>
				<form onSubmit={(event) => handleSubmit(event)}>

					<div className="container_name_duration">
						<div>
							<label>Nombre: </label>
							<input className="styleInputText" onChange={(event) => handleInputChange(event)} name="name" type="text" autoComplete="off" placeholder="Ingrese el nombre de su actividad..."/>
						</div>
						<div>
							<label>Duracion: </label>
							<input className="styleInputText" onChange={(event) => handleInputChange(event)} name="duration" type="text"/>
						</div>
					</div>

					<div className="container_season_difficulty">
						<div className="container_difficulty">
							<label>Dificultad: </label>
							<div>
								<input id="1" type="radio" value="1" checked={difficulty === "1" ? true : false} onChange={handleDifficulyChange}/><label for="1">1</label>
								<input id="2" type="radio" value="2" checked={difficulty === "2" ? true : false} onChange={handleDifficulyChange}/><label for="2">2</label>
								<input id="3" type="radio" value="3" checked={difficulty === "3" ? true : false} onChange={handleDifficulyChange}/><label for="3">3</label>
								<input id="4" type="radio" value="4" checked={difficulty === "4" ? true : false} onChange={handleDifficulyChange}/><label for="4">4</label>
								<input id="5" type="radio" value="5" checked={difficulty === "5" ? true : false} onChange={handleDifficulyChange}/><label for="5">5</label>
							</div>
						</div>
						<div className="container_season">
							<label>Temporada</label>
							<div>
								<input id="Verano" type="checkbox" value="Verano" onClick={handleSeason}/><label for="Verano">Verano</label>
								<input id="Otoño" type="checkbox" value="Otoño" onClick={handleSeason}/><label for="Otoño">Otoño</label>
								<input id="Invierno" type="checkbox" value="Invierno" onClick={handleSeason}/><label for="Invierno">Invierno</label>
								<input id="Primavera" type="checkbox" value="Primavera" onClick={handleSeason}/><label for="Primavera">Primavera</label>
							</div>
						</div>
					</div>

					<div className="container_countries_selection">
						<div className="container_countries">
							<label>Pais</label>
							<div className="section_countries">
							{
								countriesOrder?.map(countrie => 
									(<>
										<div>
											<input value={countrie.id} name={countrie.name} type="checkbox"  onClick={handleCountrie}/><label>{countrie.name}</label>
										</div>
									</>)
									)
							}
							</div>
						</div>
						<div className="container_selection">
							<div>
								<h2>Paises Seleccionados: </h2><br/>
								{
									countriesName?.map(countrie => <p>{countrie}</p>)
								}
							</div>
						</div>
					</div>

					<button className="style_buttonSubmit" type="submit">
						Crear
					</button>
				</form>

				</div>

			</div>

		</section>
	)
};

export default Form;
