import axios from "axios";
import { GET_COUNTRIES, CONTINENT_FILTER_COUNTRIES, CONTINENT_FILTER_POPULATION, CURRENT_PAGE, CONTINENT_FILTER_ALPH } from "./action_type.js";

export const getCountries = () => {
  return function (dispatch) {
    axios
      .get("/countries")
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_COUNTRIES, payload: data })); //hacemos el dispatch y la action va al reducer, el reducer la recibe y ya trabajamos con la info
  };
};

export const getCountrie = (name) => {
  return function (dispatch) {
    axios
      .get(`/countries?name=${name}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_COUNTRIES, payload: data })); //hacemos el dispatch y la action va al reducer, el reducer la recibe y ya trabajamos con la info
  };
}

export const filterContinent = (continent) => {
  return function(dispatch) {
    dispatch({type: CONTINENT_FILTER_COUNTRIES, payload: continent})
  }
}

export const filterPopulation = (population) => {
  return function(dispatch) {
    dispatch({type: CONTINENT_FILTER_POPULATION, payload: population})
  }
}

export const filterAlph = (alph) => {
  return function(dispatch) {
    dispatch({type: CONTINENT_FILTER_ALPH, payload: alph})
  }
}

export const currentPage = (page) => {
  return function(dispatch) {
    dispatch({type: CURRENT_PAGE, payload: page})
  }
}


