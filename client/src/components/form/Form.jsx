import "./Form.css";

import axios from "axios";
import { Link } from "react-router-dom";

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
  });
  const [duration, setDuration] = useState({
    durationHs: "",
    durationMin: "",
  });
  const [season, setSeason] = useState([]);
  const [countriesName, setCountriesName] = useState([]);
  const [countriesId, setCountriesId] = useState([]);
  const [difficulty, setDifficulty] = useState("1");

  const handleInputChange = (event) => {
    // console.log("name", event.target.name, "value", event.target.value);
    if (
      event.target.name === "durationHs" ||
      event.target.name === "durationMin"
    ) {
      setDuration({
        ...duration,
        [event.target.name]: event.target.value,
      });
    }
    setMyForm({
      ...myForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleDifficulyChange = (e) => {
    setDifficulty(e.target.value);
  };
  const handleSeason = (event) => {
    if (event.target.checked) {
      let data = event.target.value;
      let exist = season?.find((element) => element === data);
      if (exist) return;
      setSeason(...season, event.target.value);
    }
    if (!event.target.checked) {
      let deleteSeason = countriesId.filter(
        (element) => element !== event.target.value
      );
      setSeason(deleteSeason);
    }
  };
  const handleCountrie = (event) => {
    if (event.target.checked) {
      let data = event.target.value;
      let exist = countriesId.find((element) => element === data);
      if (exist) return;
      setCountriesId([...countriesId, event.target.value]);
      setCountriesName([...countriesName, event.target.name]);
    }
    if (!event.target.checked) {
      let dataId = event.target.value;
      let deleteId = countriesId.filter((element) => element !== dataId);
      setCountriesId(deleteId);

      let data = event.target.name;
      let exist = countriesName.filter((element) => element !== data);
      setCountriesName(exist);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/activity", {
      name: myForm.name,
      difficulty: difficulty,
      duration: duration.durationHs + "hs " + duration.durationMin + "min",
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
    setCountriesId([]);
    setDifficulty([]);
    setSeason([]);
    setCountriesName([]);
    setDuration({
      durationHs: "",
      durationMin: "",
    });
    setMyForm({
      name: "",
    });
  };

  return (
    <section className="section_form">
      <div className="bg-sectionForm">
        <header className="header_sectionForm">
          <h1>Crear Actividad</h1>
          <h2>
            <Link to="/home" className="style_back">
              Atrás
            </Link>
          </h2>
        </header>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="containerForm_1">
            <label
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Seleccionar Paises
            </label>
            <div
              style={{
                marginTop: "20px",
              }}
            >
              {countriesOrder?.map((countrie) => (
                <>
                  <div>
                    <input
                      value={countrie.id}
                      name={countrie.name}
                      type="checkbox"
                      onClick={handleCountrie}
                    />
                    <label className="style_CountrieList">
                      {countrie.name}
                    </label>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="containerForm_2">
            <div className="bg-Name_Duration">
              <div>
                <label>Nombre</label>
                <input
                  onChange={(event) => handleInputChange(event)}
                  name="name"
                  type="text"
                  autoComplete="off"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label>Duracion: </label>
                <input
                  onChange={(event) => handleInputChange(event)}
                  name="durationHs"
                  type="number"
                  min="1"
                  max="23"
                  className="style_durationInput"
                  required
                />{" "}
                hs
                <input
                  onChange={(event) => handleInputChange(event)}
                  name="durationMin"
                  type="number"
                  min="1"
                  max="59"
                  className="style_durationInput"
                  required
                />{" "}
                min
              </div>
            </div>

            <div className="bg-Difficulty_Season">
              <div>
                <label>Dificultad: </label>
                <div className="container-difficulty">
                  <div className="group_Difficulty-1">
                    <div>
                      <input
                        id="1"
                        type="radio"
                        value="1"
                        checked={difficulty === "1" ? true : false}
                        onChange={handleDifficulyChange}
                      />
                      <label for="1">1</label>
                    </div>
                    <div>
                      <input
                        id="2"
                        type="radio"
                        value="2"
                        checked={difficulty === "2" ? true : false}
                        onChange={handleDifficulyChange}
                      />
                      <label for="2">2</label>
                    </div>
                  </div>

                  <div className="group_Difficulty-2">
                    <div>
                      <input
                        id="3"
                        type="radio"
                        value="3"
                        checked={difficulty === "3" ? true : false}
                        onChange={handleDifficulyChange}
                      />
                      <label for="3">3</label>
                    </div>
                    <div>
                      <input
                        id="4"
                        type="radio"
                        value="4"
                        checked={difficulty === "4" ? true : false}
                        onChange={handleDifficulyChange}
                      />
                      <label for="4">4</label>
                    </div>
                  </div>

                  <div>
                    <input
                      id="5"
                      type="radio"
                      value="5"
                      checked={difficulty === "5" ? true : false}
                      onChange={handleDifficulyChange}
                    />
                    <label for="5">5</label>
                  </div>
                </div>
              </div>
              <div>
                <label>Temporada</label>
                <div className="container-season">
                  <div className="group_Season-1">
                    <input
                      id="Verano"
                      type="checkbox"
                      value="Verano"
                      onClick={handleSeason}
                    />
                    <label for="Verano">Verano</label>
                    <input
                      id="Otoño"
                      type="checkbox"
                      value="Otoño"
                      onClick={handleSeason}
                    />
                    <label for="Otoño">Otoño</label>
                  </div>
                  <div className="group_Season-2">
                    <input
                      id="Invierno"
                      type="checkbox"
                      value="Invierno"
                      onClick={handleSeason}
                    />
                    <label for="Invierno">Invierno</label>
                    <input
                      id="Primavera"
                      type="checkbox"
                      value="Primavera"
                      onClick={handleSeason}
                    />
                    <label for="Primavera">Primavera</label>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" disabled={countriesId.length ? false : true}>
              Crear
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
