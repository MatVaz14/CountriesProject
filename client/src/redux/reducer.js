import { GET_COUNTRIES, GET_COUNTRIE, CONTINENT_FILTER_COUNTRIES, CONTINENT_FILTER_POPULATION,CURRENT_PAGE, CONTINENT_FILTER_ALPH } from "./action_type.js";

const initialState = {
  currentPage: 1,
  countriesOrigin: [],
  countries: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countriesOrigin: action.payload,
        countries: [...action.payload]
      }; //Retornamos el estado nuevo
    case CONTINENT_FILTER_COUNTRIES:
      let data = [...state.countries];
      let info = [...state.countriesOrigin]
       let filterCountriesContinent = [];
      if(action.payload == 'continent'){
        filterCountriesContinent = [...state.countries]
      }else{
        filterCountriesContinent = data.filter(countrie => (countrie.continent).toLowerCase() == (action.payload).toLowerCase());
      }
      return {
        ...state,
        countriesOrigin: filterCountriesContinent,
      };

    case CURRENT_PAGE: 
      return {
        ...state,
        currentPage: action.payload,
      };

    case CONTINENT_FILTER_POPULATION:
      const orderCopy = [...state.countriesOrigin];
      // eslint-disable-next-line
      const order = orderCopy.sort((a, b) => {
        if (a.population > b.population) {
          return "populationMin" == action.payload ? 1 : -1;
        }
        if (a.population < b.population) {
          return "populationMax" == action.payload ? 1 : -1;
        }
      });
      return {
        ...state,
        countriesOrigin: order,
      }
      case CONTINENT_FILTER_ALPH:
      const orderCopy2 = [...state.countriesOrigin];
      // eslint-disable-next-line
      const order2 = orderCopy2.sort((a, b) => {
        if (a.name > b.name) {
          return "az" == action.payload ? 1 : -1;
        }
        if (a.name < b.name) {
          return "za" == action.payload ? 1 : -1;
        }
      });
      return {
        ...state,
        countriesOrigin: order2,
      }    
    default:
      return { ...state };
  }
};

export default rootReducer;
